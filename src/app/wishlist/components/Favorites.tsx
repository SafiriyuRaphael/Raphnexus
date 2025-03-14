"use client";
import { useEffect } from "react";
import { Heart } from "lucide-react";
import { useAuth } from "@/context/AuthContext";

type FavoriteProps = {
  data: MenuItem | null;
};

export default function Favorites({ data }: FavoriteProps) {
  const { favoritesList, setFavoritesList,setNewFav, setShowFavoritesView } = useAuth();
  
  // Check if the current item is in the favorites list
  const isFavorite = data ? favoritesList.some((item) => item.name === data.name) : false;

  useEffect(() => {
    if (!data) return;
    
    const existingFavorite: FavoriteState[] = JSON.parse(
      localStorage.getItem("favorite") || "[]"
    );
    
    setFavoritesList(existingFavorite); // Set global favorite list from local storage
  }, [data,setFavoritesList]);

  const setFavourites = (data: MenuItem | null) => {
    if (!data) return;
    setNewFav(data)
    const { name, price, on_sale, image } = data;

    const existingFavorite: FavoriteState[] = JSON.parse(
      localStorage.getItem("favorite") || "[]"
    );

    let updatedFavorite: FavoriteState[];

    if (existingFavorite.some((item) => item.name === name)) {
      return
    } else {
      // Add new favorite
      const newId = existingFavorite.length > 0
        ? existingFavorite[existingFavorite.length - 1].id + 1
        : 1;

      const currentDate = new Date().toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      });

      updatedFavorite = [
        ...existingFavorite,
        { name, id: newId, currentDate, price, on_sale, image },
      ];
    }

    localStorage.setItem("favorite", JSON.stringify(updatedFavorite));
    setFavoritesList(updatedFavorite);
  };

 const handleFavorites=()=>{
  setFavourites(data)
  setShowFavoritesView(true)
  }

  return (
    <div onClick={handleFavorites}>
      <Heart
        className={`hover:fill-black hover:text-black cursor-pointer ${
          isFavorite ? "fill-black" : "fill-gray-300 text-gray-300"
        }`}
      />
    </div>
  );
}
