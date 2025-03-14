"use client";

import { ShoppingBasket } from "lucide-react";
import { useAuth } from "@/context/AuthContext";
import { usePathname, useRouter } from "next/navigation";

export default function CartList() {
  const { cart, setSideCart } = useAuth();
  const router = useRouter();
  const pathname = usePathname();

  // Just calculate directly—no need for useState/useEffect
  const cartLength = cart.reduce((acc, item) => acc + item.quantity, 0);

  const handleClick = () => {
    if (pathname === "/cart/checkout") {
      router.push("/cart");
    } else {
      setSideCart(true);
    }
  };

  return (
    <div
      className="relative flex items-center cursor-pointer"
      onClick={handleClick} 
    >
      <ShoppingBasket className="w-6 h-6 fill-black" />
      {cartLength > 0 && (
        <p className="absolute -top-2 -right-2 bg-amber-400 px-2 rounded-full text-xs text-white font-bold">
          {cartLength}
        </p>
      )}
    </div>
  );
}
