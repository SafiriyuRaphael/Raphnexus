"use client"
import { Heart } from "lucide-react";
import { useState, useEffect } from "react";


export default function WishList() {
  const [wishList, setWishList] = useState<number>(0);

  useEffect(() => {
    const updateWishList = () => {
      const favorite = JSON.parse(localStorage.getItem("favorite") || "[]");
      setWishList(favorite.length);
    };

    updateWishList(); 
    const originalSetItem = localStorage.setItem;
    localStorage.setItem = function (key: string, value: string) {
      originalSetItem.call(this, key, value);
      if (key === "favorite") {
        updateWishList();
      }
    };

    window.addEventListener("storage", updateWishList);
    return () => {
      window.removeEventListener("storage", updateWishList);
      localStorage.setItem = originalSetItem; 
    };
  }, []);
  

  return (
    <div className="relative flex items-center">
      <Heart className="w-6 h-6 fill-black" />
      {wishList > 0 && (
        <p className="absolute -top-2 -right-2 bg-amber-400 px-2 rounded-full text-xs text-white font-bold">
          {wishList}
        </p>
      )}
    </div>
  );
}
