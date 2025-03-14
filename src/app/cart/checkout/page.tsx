"use client";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { useState,useEffect } from "react";
import Details from "./components/Details";
import { useRouter } from "next/navigation";





export default function CartPage() {
  const [coupon, setCoupon] = useState(false);
  const router = useRouter();
  
  useEffect(()=>{
    const cart = JSON.parse(sessionStorage.getItem("cart") || "[]");
    if (cart.length===0) router.push("/cart");
  },[router])

  return (
    <main>
      <div className="bg-[#F8F5F0] flex items-center justify-center gap-4 py-16 flex-col">
        <h1 className="font-bold text-5xl">Checkout</h1>
        <div className=" flex flex-row gap-1 items-center">
          <Link href="/" className="text-gray-500">
            Home
          </Link>{" "}
          <p className="text-md font-extrabold">
            <ChevronRight className="size-4" />
          </p>{" "}
          <p>Checkout</p>
        </div>
      </div>
      <div className="px-7 py-16">
        <div className="flex flex-col gap-6 overflow-hidden">
          <h3 className="py-3 text-white px-4 w-full bg-[#3D9CD2] border-l-8 border border-l-[#20648b] rounded-md ">
            Have a coupon code?{" "}
            <span
              className="hover:opacity-70 cursor-pointer"
              onClick={() => setCoupon(!coupon)}
            >
              Click here to enter your code
            </span>
          </h3>
          <div
            className={`flex transition-all duration-700 ease-in-out gap-4 flex-col overflow-hidden ${
              coupon ? "max-h-[200px] opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <p className="text-gray-500">
              If you have a coupon code, please apply it below
            </p>
            <div className=" w-full md:w-[70vw] md:items-center flex flex-col md:flex-row gap-2 md:gap-4 ">
              <input
                type="text"
                placeholder="Coupon code"
                className="px-5 active:outline-amber-400 border w-full rounded-md h-12"
              />{" "}
              <button className="bg-amber-400 px-8 py-4 whitespace-nowrap font-bold hover:text-white text-sm w-44 md:w-fit flex justify-center items-center">
                APPLY COUPON
              </button>
            </div>
          </div>
        </div>
        <Details />
      </div>
    </main>
  );
}
