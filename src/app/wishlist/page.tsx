"use client";
import { useEffect, useState } from "react";
import React from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import AddToCartButton from "../cart/components/AddToCartButton";








export default function WishList() {
  const [favoriteData, setFavoriteData] = useState<FavoriteState[]>([]);

  useEffect(() => {
    const favorite: FavoriteState[] = JSON.parse(
      localStorage.getItem("favorite") || "[]"
    );
    setFavoriteData(favorite);
  }, []);

  const deleteFavorite = (itemName: string) => {
    const updatedFavorites = favoriteData.filter(
      (fav) => fav.name !== itemName
    );
    setFavoriteData(updatedFavorites);
    localStorage.setItem("favorite", JSON.stringify(updatedFavorites));
  };

  return (
    <main>
      <div className="bg-[#F8F5F0] flex items-center justify-center gap-4 py-16 flex-col">
        <h1 className="font-bold text-5xl">Wishlist</h1>
        <div className="flex flex-row gap-1 items-center">
          <Link href="/" className="text-gray-500">
            Home
          </Link>
          <p className="text-md font-extrabold">
            <ChevronRight className="size-4" />
          </p>
          <p>Wishlist</p>
        </div>
      </div>

      <section className="pt-20 pb-9  px-7">
        {favoriteData.length === 0 ? (
          <p className=" text-gray-500 ">
            There are no products on the Wishlist!
          </p>
        ) : (
          favoriteData.map((fav, i) => (
            <div
              key={fav.name}
              className={`grid grid-cols-[30px_100px_2fr_2fr] md:grid-cols-[50px_150px_2fr_2fr] ring-1 ring-gray-200 border-collapse hover:bg-black/10 ${
                i % 2 !== 0 ? "bg-black/10" : ""
              }`}
            >
              <div className="border-r border-gray-300 flex items-center justify-center">
                <p
                  className="text-black/70 hover:text-red-600 cursor-pointer text-sm"
                  onClick={() => deleteFavorite(fav.name)}
                >
                  X
                </p>
              </div>
              <div className="border-r border-gray-300 py-4 flex justify-center items-center">
                <Image
                  alt={fav.name}
                  src={`/menu/${fav.image}.png`}
                  className=""
                  width={100}
                  height={100}
                />
              </div>
              <div className="py-4 pl-3 border-r border-gray-300 flex flex-col gap-1">
                <Link
                  href={`/products/${fav.name
                    .replace(/\s+/g, "-")
                    .toLowerCase()}`}
                  className="hover:text-amber-200"
                >
                  {" "}
                  <p className="text-amber-400 font-bold">{fav.name}</p>
                </Link>
                {fav.on_sale ? (
                  <div className="text-black/70 flex gap-1">
                    <p className="line-through">{fav.price}</p>
                    <p className="font-bold">{fav.on_sale}</p>
                  </div>
                ) : (
                  <p className="text-black/70">{fav.price}</p>
                )}
                <p className="text-black/70">{fav.currentDate}</p>
              </div>
              <div className="flex items-center px-3">
                <AddToCartButton data={fav} />
              </div>
            </div>
          ))
        )}
      </section>
    </main>
  );
}
