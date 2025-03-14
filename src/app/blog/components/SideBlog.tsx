"use client";
import Link from "next/link";
import { Search } from "lucide-react";

import getFormattedDate from "@/lib/getFormattedDate";
import Image from "next/image";

type Props = {
  blogs: Blog[];
  menu: MenuData | null;
};

export default function SideBlog({ blogs, menu }: Props) {
  return (
    <div className="flex flex-col gap-10">
      <div className="flex flex-col gap-10">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            const input = e.currentTarget.query.value.trim();
            if (input) {
              const formattedQuery = input.toLowerCase().replace(/\s+/g, "-");
              window.location.href = `/shop/search/${formattedQuery}`;
            }
          }}
          className="flex border border-amber-400 rounded-3xl justify-between px-5 w-full py-1 items-center"
        >
          <input
            type="text"
            name="query"
            placeholder="Search..."
            className="w-full focus:outline-none"
            required
          />
          <button type="submit">
            <Search />
          </button>
        </form>
      </div>
      <div className="ring-1 ring-gray-200 rounded-2xl px-2 py-[0.5px]">
        <h3 className="font-bold pl-3 py-4">Categories</h3>
        <div>
          <ul className="rounded-2xl px-5 py-3 bg-[#FBF7E8]">
            {menu?.categories.map((cat, i) => (
              <Link
                className="hover:text-amber-500"
                key={i}
                href={`/shop/${cat.name.toLowerCase().replace(/\s+/g, "-")}`}
              >
                <li className="flex justify-between border-b border-dashed pb-1">
                  <p>{cat.name}</p> <p>{`(${cat.items?.length ?? 0})`}</p>
                </li>
              </Link>
            ))}
          </ul>
        </div>
      </div>
      <div className="flex flex-col gap-5">
        <h3 className="pb-3 border-b border-dashed font-bold text-lg">
          Recent Posts
        </h3>
        <ul className="flex flex-col gap-3">
          {blogs
            ?.sort((a, b) => (a.date < b.date ? 1 : -1))
            .slice(0, 5)
            .map((post) => {
              const formattedDate = getFormattedDate(post.date);
              return (
                <li key={post.id}>
                  <Link
                    href={`/blog/${post.id}`}
                    key={post.id}
                    className="flex gap-2"
                  >
                    <Image
                      src={`/blog/${post.image}.jpg`}
                      alt={`${post.title}`}
                      height={700}
                      width={125}
                      className="rounded-md "
                    />
                    <div className="flex gap-2 flex-col ">
                      <h3 className="font-semibold text-sm">
                        {post.title.slice(0, 50)}...
                      </h3>
                      <p className="text-sm text-gray-600">{formattedDate}</p>
                    </div>
                  </Link>
                </li>
              );
            })}
        </ul>
      </div>
      <div className="flex flex-col gap-4">
        <h3 className="pb-3 border-b border-dashed font-bold text-lg">
          Popular tags
        </h3>
        <div className="flex flex-wrap w-64  whitespace-nowrap gap-2">
          {blogs
            ?.flatMap((blog) => blog.tags)
            .slice(0, 9)
            .map((tag, i) => {
              const encodedTag = tag.replace(/\s+/g, "-");
              return (
                <Link
                  key={i}
                  href={`/blog/tags/${encodedTag}`}
                  className="rounded-3xl border px-3 place-content-center hover:text-amber-500 hover:border-amber-500 place-self-start gap-0  py-2"
                >
                  <p>{tag}</p>
                </Link>
              );
            })}
        </div>
      </div>

      <div className="bg-[#FFC222] flex flex-col pt-12 text-center gap-2 rounded-md">
        <p className="fantasy text-white text-2xl">Super Delicious</p>
        <h3 className="text-green-800 text-5xl font-bold">Chicken</h3>
        <p className="text-sm text-white font-bold">call us now:</p>
        <p className="text-red-600 font-bold">+234-800-000-0000</p>

        <Image
          src="/adblog.png"
          alt="advertisement"
          height={400}
          width={800}
          className=""
        />
      </div>
    </div>
  );
}
