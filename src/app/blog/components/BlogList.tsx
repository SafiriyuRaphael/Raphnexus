"use client";
import Image from "next/image";
import Link from "next/link";
import getFormattedDate from "@/lib/getFormattedDate";


type Props = {
  blog: Blog;

};

export default function BlogList({ blog }: Props) {
  const { id, title, summary, date, tags, image, author } = blog;
  const formattedDate = getFormattedDate(date);
  const encodedTags = tags.map(tag => tag.replace(/\s+/g, "-"));
 
  
  
  return (
    <div>
    <li className="flex flex-col border rounded-t-xl">
      <div>
        <Image
          alt={title}
          width={900}
          height={500}
          src={`/blog/${image}.jpg`}
          className="w-full rounded-t-xl"
        />
      </div>
      <div className="flex flex-col px-7 gap-3 py-7 max-w-4xl">
        <div className="text-gray-600 gap-2 flex text-sm whitespace-nowrap flex-wrap">
          <Link className="hover:text-amber-500" href={`/blog/tags/${encodedTags[0]}`}>{tags[0]}</Link>/{" "}
          <p>{formattedDate}</p>/{" "}
          <p>
            Post by{" "}
            <Link  href={`/blog/author/${author}`} className="text-black hover:text-amber-500">
              {author}
            </Link>
          </p>
        </div>
        <Link
          href={`/blog/${id}`}
          className="text-3xl hover:text-amber-400 font-bold "
        >
          <h3>{title}</h3>
        </Link>
        <p className=" text-gray-600">{summary}</p>
        <Link href={`/blog/${id}`}>
          <button className="bg-amber-400 px-5 font-semibold text-sm hover:text-white py-3">
            READ MORE
          </button>
        </Link>
      </div>
    </li>
 
    </div>
  );
}
