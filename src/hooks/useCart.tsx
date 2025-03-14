"use client";
import { useAuth } from "@/context/AuthContext";


export function useCart() {
  const { setCart, setSideCart } = useAuth();

  function addToCart(data: MenuItem | FavoriteState | null) {
    if (!data) return;

    const { name, price, on_sale, image } = data;

    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.name === name);

      if (existingItem) {
        return prevCart.map((item) =>
          item.name === name ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...prevCart, { name, quantity: 1, price, on_sale, image }];
      }
    });

    setSideCart(true);
  }

  return { addToCart };
}
