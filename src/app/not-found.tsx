"use client";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";


export default function NotFound() {
    const router=useRouter()
  return (
    <section className="bg-[#fbf7e8] h-full w-full flex items-center justify-center flex-col gap-5 text-center py-24 px-7">
      <Image src="/pizza404.png" width={700} height={500} alt="404 pizza" />
      <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold">Oop, that link is broken. </h1>
      <p className="max-w-lg text-xl text-gray-600"> 
        Page doesn&#39;t exist or some other error occured. Go to our<Link href="/" className="text-green-500 hover:text-amber-500 "> Home page </Link>or
        go back to <span className="text-amber-500 cursor-pointer hover:text-amber-300" onClick={()=>router.back()}>Previous page</span>
      </p>
    </section>
  );
}
