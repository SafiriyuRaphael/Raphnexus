"use client";
import WishList from "../wishlist/components/WishList";
import Link from "next/link";
import Image from "next/image";
import {
  Facebook,
  Twitter,
  Linkedin,
  Github,
  User,
  Search,
  Store,
} from "lucide-react";
import TopFooter from "./TopFooter";
import { useAuth } from "@/context/AuthContext";
import CartList from "../cart/components/CartList";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Footer() {
  const { components } = useAuth();
  const year: number = new Date().getFullYear();
  const [search, setSearch] = useState("");
  const [inputSearch, setInputSearch] = useState(false);
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const formattedSearch = search.trim().replace(/\s+/g, "-");
    if (formattedSearch.trim()) {
      router.push(`/shop/search/${formattedSearch}`);
      setInputSearch(false)
      setSearch("");
    }
  };
const handleClosure=()=>{
  setInputSearch(false)
}
  return (
    <footer className={`${components ? "bg-white" : "bg-green-500"} lg:py-0`}>
      <TopFooter />
      <div className="fixed bottom-0 z-50 w-full hidden lg:hidden md:block bg-white">
        <form
          action=""
          className={`justify-between py-1 mx-5 rounded-full items-center border border-amber-400 my-2 px-8 ${
            inputSearch ? "flex" : "hidden"
          }`}
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            name=""
            id=""
            value={search}
            className="w-full h-full text-xl focus:outline-none"
            onChange={(e) => setSearch(e.target.value)}
          />
          <button type="submit" className="focus:outline-none ">
            <Search />
          </button>
        </form>
        <div className=" grid-cols-5   border-t border-t-gray-300 grid ">
          <Link href="/shop">
            <div className="text-center border-l border-l-gray-300 py-2 flex flex-col font-semibold gap-1 items-center" onClick={handleClosure}>
              <Store />
              <p>Shop</p>
            </div>
          </Link>
          <div className="text-center border-l border-l-gray-300 py-2 flex flex-col font-semibold gap-1 items-center" onClick={handleClosure}>
            <User className="fill-black" />
            <p>My Account</p>
          </div>
          <div
            className="text-center border-l border-l-gray-300 py-2 flex flex-col font-semibold gap-1 items-center cursor-pointer"
            onClick={() => setInputSearch(!inputSearch)}
          >
            <Search />
            <p>Search</p>
          </div>
          <Link href="/wishlist" onClick={handleClosure}>
            {" "}
            <div className="text-center border-l border-l-gray-300 py-2 flex flex-col font-semibold gap-1 items-center">
              <WishList />
              <p>WishList</p>
            </div>
          </Link>
          <div className="text-center border-l border-l-gray-300 py-2 flex flex-col font-semibold gap-1 items-center" onClick={handleClosure}>
            <CartList />
            <p>Cart</p>
          </div>
        </div>
      </div>

      <section
        className={`px-7 lg:py-6 md:pb-24 md:pt-7  py-6 flex md:flex-row flex-col justify-between border-t-2  items-center gap-4 ${
          components ? "border-t-gray-200" : ""
        }`}
      >
        <div className={`flex lg:gap-9 gap-5 ${!components ? "hidden" : ""}`}>
          <Facebook className="bg-gray-300 rounded-full p-2 lg:size-8 size-7 fill-black" />
          <Twitter className="bg-gray-300 rounded-full p-2 lg:size-8 size-7 fill-black" />
          <Linkedin className="bg-gray-300 rounded-full p-2 lg:size-8 size-7 fill-black" />
          <Github className="bg-gray-300 rounded-full p-2 lg:size-8 size-7 fill-black" />
        </div>

        <p className="whitespace-nowrap text-center">
          Copyright &copy; {year}{" "}
          <span className="text-amber-300">RaphNexusfood</span>.{" "}
          <span className="sm:inline block"> All Right Reserved</span>
        </p>
        <div>
          <Image
            src="/americanexpress.png"
            alt=""
            className=""
            width={300}
            height={150}
          />
        </div>
      </section>
    </footer>
  );
}
