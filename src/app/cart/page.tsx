"use client";
import dynamic from "next/dynamic";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import CartProps from "./components/CartProps";
import { useAuth } from "@/context/AuthContext";


// Dynamically import Lottie to run only on the client
const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

import animationData from "../../assets/animations/Animation - 1741006882553.json";


export default function CartPage() {
  const { cart = [] } = useAuth();

  return (
    <main>
      <div className="bg-[#F8F5F0] flex items-center justify-center gap-4 py-16 flex-col">
        <h1 className="font-bold text-5xl">Cart</h1>
        <div className="flex flex-row gap-1 items-center">
          <Link href="/" className="text-gray-500">
            Home
          </Link>
          <ChevronRight className="size-4 text-md font-extrabold" />
          <p>Cart</p>
        </div>
      </div>

      {cart.length ? (
        <CartProps />
      ) : (
        <div className="flex flex-col gap-6 items-center justify-center py-14">
          <Lottie
            animationData={animationData}
            loop
            className="h-[60vh] w-screen"
            aria-hidden="true"
          />
          <h3 className="text-center text-lg">Your cart is currently empty</h3>
          <Link href="/shop">
            <button className="bg-amber-400 font-bold hover:text-white px-9 py-3 rounded-md transition">
              RETURN TO SHOP
            </button>
          </Link>
        </div>
      )}
    </main>
  );
}
