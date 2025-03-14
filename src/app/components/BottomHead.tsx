"use client";
import { useAuth } from "@/context/AuthContext";
import CartList from "../cart/components/CartList";
import {
  Gift,
  Truck,
  User,
  Search,
  Logs,
  PhoneCall,
  ChevronDown,
} from "lucide-react";
import { useState } from "react";
import { RiEBike2Fill } from "react-icons/ri";
import Link from "next/link";
import WishList from "../wishlist/components/WishList";
import { useRouter } from "next/navigation";

export default function BottomHead() {
  const router = useRouter();
  const { components, setSideBar } = useAuth();
  const [page, setPage] = useState(false);
  const [search, setSearch] = useState("");
  const [inputSearch, setInputSearch] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const formattedSearch = search.trim().replace(/\s+/g, "-");
    if (formattedSearch.trim()) {
      router.push(`/shop/search/${formattedSearch}`);
      setInputSearch(false);
      setSearch("");
    }
  };

  return (
    <section
      className={`md:py-5 py-3 flex flex-col gap-1.5 top-0 z-[70] bg-white sticky ${
        components ? "lg:static" : "drop-shadow-xs"
      }`}
      role="navigation" 
      aria-label="Main navigation" 
    >
      <div className="flex items-center px-7 justify-between z-30 sta w-full">
        <Logs
          className="size-9 cursor-pointer hover:text-amber-400 lg:hidden"
          onClick={() => setSideBar(true)}
          role="button"
          aria-label="Open sidebar" 
          tabIndex={0}
        />
        <h1
          className={`text-green-600 font-extrabold whitespace-nowrap ${
            components ? "text-2xl" : "text-2xl md:text-4xl pb-3"
          }`}
          aria-label="RalphNexus" 
        >
          RalphNexus
        </h1>
        <form
          className={`ring-1 ring-amber-400 hidden justify-between items-center px-7 rounded-full ${
            components ? "lg:flex" : ""
          }`}
          onSubmit={handleSubmit}
          role="search" 
        >
          <label htmlFor="search" className="sr-only">
            Search products
          </label>
          <input
            type="search"
            id="search" 
            placeholder="Search products"
            className="focus:outline-none h-6"
            onChange={(e) => setSearch(e.target.value)}
            value={search}
            aria-label="Search products" 
          />
          <button type="submit" aria-label="Submit search">
            <Search className="hover:text-amber-400 cursor-pointer" />
          </button>
        </form>
        <div
          className={`items-center gap-3 hidden ${
            components ? "lg:flex" : ""
          }`}
          aria-label="Free delivery information" 
        >
          <Truck className="size-10" aria-hidden="true" /> 
          <div>
            <h6>Free Delivery</h6>
            <p className="text-gray-800">Details & restrictions</p>
          </div>
        </div>
        <div
          className={`items-center gap-3 hidden ${
            components ? "lg:flex" : ""
          }`}
          aria-label="Daily offers information" 
        >
          <Gift className="size-10" aria-hidden="true" /> 
          <div>
            <h6 className="">Daily Offers</h6>
            <p className="text-gray-800">Discount 20% off</p>
          </div>
        </div>
        <div
          className={`items-center gap-3 hidden ${
            components ? "lg:flex" : ""
          }`}
          aria-label="User actions" 
        >
          <div
            className="border-2 rounded-full p-1.5 hover:bg-amber-400 cursor-pointer"
            role="button" 
            aria-label="User profile" 
            tabIndex={0} 
          >
            <User className="fill-black" aria-hidden="true" /> 
          </div>
          <Link href="/wishlist">
            <div
              className="border-2 rounded-full p-1.5 hover:bg-amber-400 cursor-pointer relative"
              role="button" 
              aria-label="Wishlist" 
              tabIndex={0} 
            >
              <WishList />
            </div>
          </Link>
          <div
            className="border-2 rounded-full p-1.5 hover:bg-amber-400 cursor-pointer relative"
            role="button" 
            aria-label="Cart" 
            tabIndex={0} 
          >
            <CartList />
          </div>
        </div>
        {!components && (
          <>
            <nav className="lg:flex items-center hidden" aria-label="Main menu">
              <div className="flex xl:flex-wrap md:pt-3 xl:gap-5 gap-6 font-extrabold">
                <Link href="/">
                  <h6 className="hover:text-amber-400 cursor-pointer">Home</h6>
                </Link>
                <Link href="/menu">
                  <h6 className="hover:text-amber-400 cursor-pointer">Menu</h6>
                </Link>
                <Link href="/about">
                  <h6 className="hover:text-amber-400 cursor-pointer">About</h6>
                </Link>
                <Link href="/shop">
                  <h6 className="hover:text-amber-400 cursor-pointer">Shop</h6>
                </Link>
                <Link href="/blog">
                  <h6 className="hover:text-amber-400 cursor-pointer">Blog</h6>
                </Link>
                <div
                  className="relative size-11 z-40"
                  onMouseEnter={() => setPage(true)}
                  onMouseLeave={() => setPage(false)}
                  role="button" 
                  aria-label="More pages" 
                  tabIndex={0} 
                >
                  {page && (
                    <div
                      className="absolute top-12 flex pt-4 text-black rounded-md z-50 bg-white shadow-xs shadow-black"
                      onMouseLeave={() => setPage(false)}
                      role="menu" 
                      aria-label="Page menu" 
                    >
                      <ul>
                        <Link href="/faqs">
                          <li
                            className="pl-5 hover:bg-black/10 py-1 hover:text-amber-400 w-44"
                            role="menuitem"  
                            tabIndex={0} 
                          >
                            Faq
                          </li>
                        </Link>
                        <Link href="/our-teams">
                          <li
                            className="pl-5 hover:bg-black/10 py-1 hover:text-amber-400 w-full"
                            role="menuitem"  
                            tabIndex={0} 
                          >
                            Our Teams
                          </li>
                        </Link>
                        <Link href="/our-history">
                          <li
                            className="pl-5 hover:bg-black/10 py-1 hover:text-amber-400 w-full"
                            role="menuitem"  
                            tabIndex={0} 
                          >
                            Our History
                          </li>
                        </Link>
                      </ul>
                    </div>
                  )}
                  <h6 className="hover:text-amber-400 cursor-pointer flex gap-1.5">
                    Page <ChevronDown className="size-5 self-center" />
                  </h6>
                </div>
                <Link href="/contact-us">
                  <h6 className="hover:text-amber-400 cursor-pointer">Contact</h6>
                </Link>
              </div>
            </nav>
            <div className="xl:flex-row hidden lg:flex lg:flex-col xl:gap-4 lg:gap-2">
              <div className="flex items-center gap-2">
                <RiEBike2Fill className="size-12 xl:block hidden fill-green-600" aria-hidden="true" /> 
                <div>
                  <p>Call and Order In</p>
                  <h3 className="text-amber-400 text-xl xl:text-2xl font-bold">
                    +234 000-000-0000
                  </h3>
                </div>
              </div>
              <div className="flex gap-3 xl:self-center self-end">
                <div
                  className="border-gray-300 border rounded-full p-1.5 size-10 hover:bg-amber-400 cursor-pointer"
                  onClick={() => setInputSearch(true)}
                  role="button" 
                  aria-label="Open search" 
                  tabIndex={0} 
                >
                  <Search 
                  onClick={()=>setInputSearch(true)} /> 
                </div>
                <div
                  className="border-gray-300 border rounded-full p-1.5 size-10"
                  role="button" 
                  aria-label="User profile" 
                  tabIndex={0} 
                >
                  <User aria-hidden="true" /> 
                </div>
                <Link href="/wishlist">
                  <div
                    className="border-gray-300 border rounded-full p-1.5 size-10 hover:bg-amber-400 cursor-pointer"
                    role="button" 
                    aria-label="Wishlist" 
                    tabIndex={0} 
                  >
                    <WishList />
                  </div>
                </Link>
                <div
                  className="border-gray-300 border rounded-full p-1.5 size-10 hover:bg-amber-400"
                  role="button" 
                  aria-label="Cart" 
                  tabIndex={0} 
                >
                  <CartList />
                </div>
              </div>
            </div>
          </>
        )}
        <PhoneCall
          className="size-9 lg:hidden"
          role="button" 
          aria-label="Call us" 
          tabIndex={0} 
        />
      </div>
      <div className="md:hidden items-center justify-end gap-3 flex text-center px-3">
        <div>
          <p className="text-xs sm:text-md">Call and Order In</p>
          <h3 className="text-amber-400 font-bold text-xl sm:text-2xl">
            +234 000-000-0000
          </h3>
        </div>
        <div
          className="border-gray-300 border rounded-full p-1.5 size-10 hover:bg-amber-400 cursor-pointer"
          onClick={() => setInputSearch(true)}
          role="button" 
          aria-label="Open search" 
          tabIndex={0} 
        >
          <Search aria-hidden="true"  aria-label="open Searchbox"/> 
        </div>
        <div
          className="border-gray-300 border rounded-full p-1.5 size-10"
          role="button" 
          aria-label="Cart" 
          tabIndex={0} 
        >
          <CartList />
        </div>
      </div>
      <form
        className={`w-full bg-white ${components?"md:hidden flex":"md:hidden lg:flex flex"} absolute top-0 inset-0 z-40 text-2xl items-center transition-opacity duration-300 pr-3 ${
          inputSearch
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onSubmit={handleSubmit}
        role="search" 
      >
        <input
          type="text"
          className="w-full h-full px-7 focus:outline-none"
          placeholder="Search products..."
          onChange={(e) => setSearch(e.target.value)}
          value={search}
          aria-label="Search products" 
         
        />
        <p
          className="text-3xl pr-5 text-amber-400 cursor-pointer hover:text-black"
          onClick={() => setInputSearch(false)}
          role="button" 
          aria-label="Close search" 
          tabIndex={0} 
        >
          X
        </p>
        <button type="submit" className="bg-amber-400 py-3 px-4 hover:text-white" >submit</button>
      </form>
    </section>
  );
}