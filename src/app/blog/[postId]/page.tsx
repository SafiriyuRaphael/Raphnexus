import getFormattedDate from "@/lib/getFormattedDate";
import { getPostByName, getBlogMeta } from "@/lib/blogPost";
import Link from "next/link";
import { notFound } from "next/navigation";
import Image from "next/image";
import SideBlog from "../components/SideBlog";
import { getRestaurantMenu } from "@/lib/getRestaurantMenu";
import { ChevronRight } from "lucide-react";
import { Metadata } from "next";
// export const revalidate = 0;

type Params = {
  params: Promise<{ postId: string }>;
};

export async function generateStaticParams() {
  const blogs = await getBlogMeta();
  if (!blogs) return [];
  return blogs.map((blog) => ({
    postId: blog.id,
  }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const postId = (await params).postId;
  const blog = await getPostByName(`${postId}.mdx`);

  if (!blog) {
    return {
      title: "Blog Not Found - RaphNexus",
      description: "Sorry, the blog post you are looking for does not exist.",
      openGraph: {
        title: "Blog Not Found - RaphNexus",
        description:
          "This blog post is missing. Check out our latest articles instead.",
        url: `https://raphnexus.vercel.app/blog/${postId}`,
        type: "article",
        images: [
          {
            url: "https://raphnexus.vercel.app/og-image.jpg",
            width: 1200,
            height: 630,
            alt: "Blog Not Found",
          },
        ],
      },
    };
  }

  const { meta } = blog;

  return {
    title: `${meta.title} - RaphNexus`,
    description: meta.summary || "Read the latest insights on RaphNexus.",
    keywords: meta.tags.join(", "),
    openGraph: {
      title: meta.title,
      description: meta.summary || "Read the latest insights on RaphNexus.",
      url: `https://raphnexus.vercel.app/blog/${postId}`,
      type: "article",
      publishedTime: meta.date,
      authors: [
        `https://raphnexus.vercel.app/blog/author/${meta.author.replace(/\s+/g, "-")}`,
      ],
      images: [
        {
          url: `https://raphnexus.vercel.app/blog/${meta.image}.jpg`,
          width: 1200,
          height: 630,
          alt: meta.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: meta.title,
      description: meta.summary || "Read the latest insights on RaphNexus.",
      images: [`https://raphnexus.vercel.app/blog/${meta.image}.jpg`],
    },
  };
}

export default async function Blog({ params }: Params) {
  const blogs = await getBlogMeta();
  const menu = await getRestaurantMenu();
  if (!menu) return;

  if (!blogs) return <h2>Blogs not available try again later</h2>;

  const blog = await getPostByName(`${(await params).postId}.mdx`);
  if (!blog) return notFound();

  const { meta, content } = blog;
  const blogLength = blogs.findIndex((b) => b.id === meta.id);

  const pubDate = getFormattedDate(meta.date);

  const tags = meta.tags.map((tag, i) => {
    const encodedTag = tag.replace(/\s+/g, "-");

    return (
      <Link
        key={i}
        href={`/blog/tags/${encodedTag}`}
        className="px-4 py-1 rounded-2xl border hover:text-amber-500 hover:border-amber-500 text-sm"
      >
        {tag}
      </Link>
    );
  });

  return (
    <main>
      <div className="bg-[#F8F5F0] px-7 items-center flex md:gap-1 md:text-lg flex-wrap text-sm py-6 text-gray-600">
        <Link className="hover:text-amber-500" href="/">
          Home
        </Link>
        <ChevronRight className="size-4" />
        <Link
          className="hover:text-amber-500"
          href={`/blog/tags/${meta.tags[0].replace(/\s+/g, "-")}`}
        >
          {meta.tags[0]}
        </Link>
        <ChevronRight className="size-4" />
        <p className="text-black">{meta.title}</p>
      </div>
      <div className="px-4 py-16  flex gap-8 sm:px-7">
        <div className=" flex flex-col gap-4  sm:gap-7 ">
          <div className="">
            <div className="flex flex-col border rounded-md pb-9 w-[90vw] lg:w-[70vw]">
              <Image
                src={`/blog/${meta.image}.jpg`}
                alt={meta.id}
                width={700}
                height={500}
                className="w-full rounded-t-md"
              />
              <div className="px-7 flex flex-col gap-2">
                <h1 className="text-4xl font-bold mt-7">{meta.title}</h1>
                <div className="flex gap-2 text-gray-600 text-sm whitespace-nowrap flex-wrap">
                  <Link
                    className="hover:text-amber-500"
                    href={`/blog/tags/${meta.tags[0].replace(/\s+/g, "-")}`}
                  >
                    {meta.tags[0]}
                  </Link>
                  / {pubDate} / Post by
                  <Link
                    className="hover:text-amber-500"
                    href={`/blog/author/${meta.author.replace(/\s+/g, "-")}`}
                  >
                    admin
                  </Link>
                </div>
                <article className="mt-6">{content}</article>
              </div>
            </div>
            <div className="flex flex-wrap whitespace-nowrap gap-1 mt-3">
              {tags}
            </div>
          </div>
          <div
            className={`flex justify-between gap-10  w-full px-4 py-5 rounded-md sm:bg-[#F7F4EF] ${
              blogs.length === 1 ? "hidden" : ""
            }`}
          >
            <Link
              href={`/blog/${blogs[blogLength - 1]?.id}`}
              className={`${blogLength === 0 ? "hidden" : ""} group w-full`}
            >
              <div className="flex flex-col gap-2">
                <p className="text-gray-500 text-xs sm:text-sm">PREV POST</p>
                <h3 className="font-bold group-hover:text-amber-400 text-sm md:text-lg">
                  {blogs[blogLength - 1]?.title.slice(0, 40)}...
                </h3>
              </div>
            </Link>
            <Link
              href={`/blog/${blogs[blogLength + 1]?.id}`}
              className={`${
                blogLength === blogs.length - 1 ? "hidden" : ""
              } group flex  w-full justify-end`}
            >
              <div className="flex flex-col  gap-2 ">
                <p className="text-gray-500 text-xs sm:text-sm">Next POST</p>
                <h3 className="font-bold group-hover:text-amber-400 text-sm md:text-lg">
                  {blogs[blogLength + 1]?.title.slice(0, 40)}
                </h3>
              </div>
            </Link>
          </div>
        </div>
        <div className="w-[35vw] lg:block hidden">
          <SideBlog blogs={blogs} menu={menu} />
        </div>
      </div>
    </main>
  );
}
