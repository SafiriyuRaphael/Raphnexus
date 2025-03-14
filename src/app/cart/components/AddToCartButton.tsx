"use client";
import { useCart } from "@/hooks/useCart";

type AddToCartProps = {
    data: FavoriteState|MenuItem|null;
  };

export default function AddToCartButton({data}: AddToCartProps) {
const{addToCart}=useCart()
  return (
    <button className="bg-amber-400 px-3 text-sm md:text-md md:px-6 font-bold hover:text-white py-2  md:py-3" onClick={()=>addToCart(data)}>
    ADD TO CART
  </button>
  );
}
