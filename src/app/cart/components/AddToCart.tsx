"use client";
import { useCart } from "@/hooks/useCart";
import { ShoppingBasket } from "lucide-react";

type AddToCartProps = {
  data: MenuItem;
};

export default function AddToCart({ data }: AddToCartProps) {
  const { addToCart } = useCart();

  return (
    <div
      onClick={() => addToCart(data)}
      className="size-9 rounded-2xl group flex items-center justify-center bg-amber-400 hover:bg-amber-600 transition-colors duration-500 ease-in-out"
    >
      <ShoppingBasket className="group-hover:fill-white cursor-pointer" />
    </div>
  );
}
