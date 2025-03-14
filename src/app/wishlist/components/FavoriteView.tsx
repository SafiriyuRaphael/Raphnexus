"use client";
import Link from "next/link";
import Image from "next/image";
import AddToCartButton from "@/app/cart/components/AddToCartButton";
import { useAuth } from "@/context/AuthContext";
import { useEffect, useState } from "react";

export default function FavoriteView() {
  const {
    newFav,
    favoritesList,
    showFavoritesView,
    setShowFavoritesView,
    setFavoritesList,
  } = useAuth();
  const [newFavProps, setNewFavProps] = useState<boolean>(false);
  const [deleteModal, setDeleteModal] = useState<string | null>(null);

  useEffect(() => {
    if (newFav) {
      setNewFavProps(true);
      setTimeout(() => {
        setNewFavProps(false);
      }, 1500);
    }
  }, [newFav]);

  const deleteFavorite = (itemName: string) => {
    const updatedFavorites = favoritesList.filter(
      (fav) => fav.name !== itemName
    );
    setFavoritesList(updatedFavorites);
    localStorage.setItem("favorite", JSON.stringify(updatedFavorites));
    setDeleteModal("PRODUCT HAS BEEN REMOVED FROM THE WISHLIST");
    setTimeout(() => {
      setDeleteModal(null);
    }, 1500);
  };

  return (
    <section>
      <div
        className={`fixed top-1/2 left-1/2 transform transition-all duration-700 -translate-x-1/2 bg-white ${
          showFavoritesView
            ? "-translate-y-1/2 opacity-100 z-[75] pointer-events-auto"
            : "-translate-y-full pointer-events-none opacity-0 z-0"
        }`}
      >
        <div className="bg-[#222222] flex justify-between py-3 text-white px-5">
          <h3 className="text-sm">Wishlist ({favoritesList.length})</h3>
          <p
            className="text-gray-300 cursor-pointer"
            onClick={() => setShowFavoritesView(false)}
          >
            X
          </p>
        </div>
        {favoritesList.length > 0 ? (
          <div className="flex flex-col max-h-[30rem] overflow-y-scroll px-5 scrool">
            {favoritesList.map((item) => (
              <div
                key={item.name}
                className="grid grid-cols-[30px_80px_1fr_1fr] border-t border-dashed border-gray-300 py-3 gap-2"
              >
                <p
                  className="place-self-center text-gray-500 cursor-pointer hover:text-red-500"
                  onClick={() => deleteFavorite(item.name)}
                >
                  X
                </p>
                <Image
                  src={`/menu/${item.image}.png`}
                  height={100}
                  width={100}
                  alt={item.name}
                  className="size-16 place-self-center"
                />
                <div className="flex flex-col text-gray-500 text-sm">
                <Link href={`/products/${item.name.replace(/\s+/g, "-").toLowerCase()}`} className="hover:text-amber-400 justify-self-end">   <h3 className="text-amber-500  pr-2">
                    {item.name}
                  </h3></Link>
                  {item.on_sale ? (
                    <div className="flex gap-1">
                      <p className="line-through">{item.price}</p>
                      <p className="font-bold">{item.on_sale}</p>
                    </div>
                  ) : (
                    <p>{item.price}</p>
                  )}
                  <p>{item.currentDate}</p>
                </div>
                <div className="justify-self-center whitespace-nowrap place-self-center">
                  <AddToCartButton data={item} />
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="py-8 flex items-center justify-center whitespace-nowrap px-12 md:px-24">
            <p className="text-sm text-gray-500">
              There are no products on the Wishlist!
            </p>
          </div>
        )}
        <div className="flex justify-between px-5 py-3 relative gap-8 pt-5">
          <Link
            href="/wishlist"
            className="border-b border-black hover:text-green-500 hover:border-green-500 text-sm text-amber-400 whitespace-nowrap"
            onClick={() => setShowFavoritesView(false)}
          >
            <p>OPEN WISHLIST PAGE</p>
          </Link>
          <p className="border-b border-black hover:text-green-500 text-amber-400 hover:border-green-500 cursor-pointer text-sm whitespace-nowrap"  onClick={() => setShowFavoritesView(false)}>
            CONTINUE SHOPPING
          </p>
          {(newFavProps || deleteModal) && (
            <div className="absolute inset-0 bg-green-500 transition-all duration-500 flex items-center justify-center text-xs  sm:text-sm opacity-100 px-2">
              <h3 className="text-white">
                {newFavProps ? (
                  <>
                    {" "}
                    <span className="font-bold">
                      {`${newFav?.name.toUpperCase()} `} 
                    </span>  
                    HAS BEEN ADDED TO THE WISHLIST
                  </>
                ) : (
                  deleteModal
                )}
              </h3>
            </div>
          )}
        </div>
      </div>
      {showFavoritesView && (
        <div
          className="w-full h-full fixed top-0 left-0 bg-black/60 z-[70]"
          onClick={() => setShowFavoritesView(false)}
        ></div>
      )}
    </section>
  );
}
