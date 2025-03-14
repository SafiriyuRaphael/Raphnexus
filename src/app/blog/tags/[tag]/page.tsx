import { getBlogMeta } from "@/lib/blogPost";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import BlogList from "../../components/BlogList";
import { getRestaurantMenu } from "@/lib/getRestaurantMenu";
import SideBlog from "../../components/SideBlog";
import { notFound } from "next/navigation";
import { Metadata } from "next";

export const revalidate = 10;

type Params = {
  params: Promise<{ tag: string }>;
};

export async function generateStaticParams() {
    const blogs= await getBlogMeta()
    if(!blogs) return[]

    const tags= new Set(blogs.map(blog=>blog.tags).flat())

    return Array.from(tags).map((tag)=>({tag}))
}


export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const decodedTag = (await params).tag.replace(/-/g, " ");
  const formattedTag =
    decodedTag.charAt(0).toUpperCase() + decodedTag.slice(1).toLowerCase();

  return {
    title: `Posts tagged "${formattedTag}"`,
    description: `Explore blog posts tagged under "${formattedTag}". Stay updated with articles and insights on ${formattedTag}.`,
    openGraph: {
      title: `Posts tagged "${formattedTag}"`,
      description: `Discover all articles categorized under "${formattedTag}" on our blog.`,
      url: `/blog/tag/${(await params).tag}`,
      type: "website",
      images: [
        {
          url: "https://raphnexus.vercel.app/og-image.jpg",
          width: 1200,
          height: 630,
          alt: `Tag ${formattedTag}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `Posts tagged "${formattedTag}"`,
      description: `Check out the latest posts under "${formattedTag}".`,
      images: ["https://raphnexus.vercel.app/og-image.jpg"], 
    },
  };
}

export default async function TagPostList({ params }: Params) {
  const blogs = await getBlogMeta();
   const menu = await getRestaurantMenu();
  if (!blogs) return <p>sorry, no post</p>;
  if (!menu) return <>no content</>;

  const decodedTags = (await params).tag.replace(/-/g, " ");

  const tagBlogs = blogs.filter((blog) => blog.tags.includes(decodedTags));

  if (!tagBlogs.length) return notFound()

  return (
    <main>
      <div className="bg-[#F8F5F0] flex items-center justify-center gap-4 py-16 flex-col">
        <h1 className="font-bold text-5xl">{decodedTags}</h1>
        <div className="flex flex-row gap-1 items-center">
          <Link href="/" className="text-gray-500">
            Home
          </Link>
          <p className="text-md font-extrabold">
            <ChevronRight className="size-4" />
          </p>
          <p>{`Posts tagged "${decodedTags.toLowerCase()}"`}</p>
        </div>
      </div>
       <section className="flex gap-8 px-4 sm:px-7 py-14">
          <ul className="w-full flex flex-col gap-4 ">
            {tagBlogs.map((blog) => (
              <BlogList blog={blog} key={blog.id} />
            ))}
          </ul>
          <div className="w-[35vw] lg:block hidden">
          <SideBlog blogs={blogs} menu={menu} /></div>
        </section>
    </main>
  );
}
