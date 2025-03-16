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
  params: Promise<{ author: string }>;
};

export async function generateStaticParams() {
    const blogs= await getBlogMeta()
    if(!blogs) return[]

    const authors= new Set(blogs.map(blog=>blog.author).flat())

    return Array.from(authors).map((author)=>({author}))
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const decodedAuthor = (await params).author.replace(/-/g, " ");
  const toProperCase = (name: string): string => {
    return name
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join(" ");
  };

  const formattedAuthor = toProperCase(decodedAuthor);

  return {
    title: `Posts by ${formattedAuthor} | RaphNexus`,
    description: `Browse all blog posts written by ${formattedAuthor} on our platform. Discover insights, ideas, and expertise from ${formattedAuthor}.`,
    openGraph: {
      title: `Posts by ${formattedAuthor}`,
      description: `Explore blog posts authored by ${formattedAuthor}. Stay updated with expert opinions and insights.`,
      url: `/blog/author/${(await params).author}`,
      type: "website",
      images: [
        {
          url: "https://raphnexus.vercel.app/og-image.jpg", 
          width: 1200,
          height: 630,
          alt: `Author ${formattedAuthor}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `Posts by ${formattedAuthor}`,
      description: `Read articles by ${formattedAuthor} on our blog.`,
      images: ["https://raphnexus.vercel.app/og-image.jpg"],
    },
  };
}

export default async function TagPostList({ params }: Params) {
  const blogs = await getBlogMeta();
   const menu = await getRestaurantMenu();
  if (!blogs) return <p>sorry, no post</p>;
  if (!menu) return <>no content</>;

  const decodedAuthor = (await params).author.replace(/-/g, " ");
  const toProperCase=(letter:string):string=>{
    const firstWord=letter[0].toUpperCase()
    const remainingWord=letter.slice(1).toLowerCase()
    const properCase=firstWord+remainingWord
    return properCase
  }

  const authorBlogs = blogs.filter((blog) => blog.author.includes(decodedAuthor));

  if (!authorBlogs.length) return notFound()

  return (
    <main>
      <div className="bg-[#F8F5F0] flex items-center justify-center gap-4 py-16 flex-col">
        <h1 className="font-bold text-3xl md:text-5xl">{`Author: ${toProperCase(decodedAuthor)}`}</h1>
        <div className="flex flex-row gap-1 items-center">
          <Link href="/" className="text-gray-500">
            Home
          </Link>
          <p className="text-md font-extrabold">
            <ChevronRight className="size-4" />
          </p>
          <p>{`Author: ${decodedAuthor}`}</p>
        </div>
      </div>
       <section className="flex gap-8 px-4 sm:px-7 py-14">
          <ul className="w-full flex flex-col gap-4 ">
            {authorBlogs.map((blog) => (
              <BlogList blog={blog} key={blog.id} />
            ))}
          </ul>
          <div className="w-[35vw] lg:block hidden">
          <SideBlog blogs={blogs} menu={menu} /></div>
        </section>
    </main>
  );
}
