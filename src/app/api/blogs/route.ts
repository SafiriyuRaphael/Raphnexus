// app/api/blogs/route.ts
import { getBlogMeta } from "@/lib/blogPost";
import { NextResponse } from "next/server";

export async function GET() {
  const blogs = await getBlogMeta();
  return NextResponse.json(blogs);
}
