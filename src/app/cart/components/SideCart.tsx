"use client";
import { useAuth } from "@/context/AuthContext";
import Image from "next/image";
import Link from "next/link";

import {  useRouter } from "next/navigation"; 

export default function SideCart() {
  const { cart, setCart, sideCart, setSideCart,setShowFavoritesView } = useAuth();
  const router = useRouter(); 

  const subtotal = cart
    .reduce(
      (acc, item) => acc + item.quantity * (item.on_sale ?? item.price),
      0
    )
    .toFixed(2);

  const removeFromCart = (itemName: string) => {
    setCart((prevCart) => {
      const updatedCart = prevCart.filter((item) => item.name !== itemName);
      sessionStorage.setItem("cart", JSON.stringify(updatedCart));
      return updatedCart;
    });
  };

  const closeSideCart = () => {
    setSideCart(false);
  };

  const handleViewCart = () => {
    router.push("/cart")
    setSideCart(false);
    setShowFavoritesView(false)
  };
  const handleViewCheckOut = () => {
    router.push("/cart/checkout")
    setSideCart(false);
    setShowFavoritesView(false)
  };

  return (
    <section className="w-screen">
      <div
        className={`bg-white border-b border-gray-400 fixed top-0 right-0 z-[90] h-screen transition-transform duration-700 ease-in-out ${
          sideCart ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between font-bold border-b border-gray-400 px-5 py-5 items-center right-0 sm:w-[20rem] w-[19rem]">
          <h3 className="text-xl">SHOPPING CART</h3>
          <p className="text-sm cursor-pointer group" onClick={closeSideCart}>
            CLOSE <span className="group-hover:text-red-500 ">X</span>
          </p>
        </div>
     {cart.length>0 ? <>  <div className="px-5 ">
          <div className="h-[58vh] overflow-y-scroll scrool">
            <div className="pr-2">
              {cart.map((item) => (
                <div
                  key={item.name}
                  className="flex gap-2   py-2 border-b border-gray-400"
                >
                  <div
                    className="border border-gray-400 text-gray-400 size-4 cursor-pointer items-center justify-center place-self-center flex rounded-full hover:border-red-600 hover:text-red-600"
                    onClick={() => removeFromCart(item.name)}
                  >
                    <p className="text-xs">x</p>
                  </div>
                  <div className="bg-[#F8F5F0] size-16 rounded-full flex items-center justify-center">
                    <Image
                      src={`/menu/${item.image}.png`}
                      width={80}
                      height={100}
                      alt={item.name}
                    />
                  </div>
                  <div className="flex flex-col sm:w-[10rem] w-[9rem]">
                  <Link href={`/products/${item.name.replace(/\s+/g, "-").toLowerCase()}`} className="hover:text-amber-400" onClick={()=>{setShowFavoritesView(false) 
                    setSideCart(false)}}><p>{item.name}</p></Link>
                    <p>
                      {item.quantity} x{" "}
                      <span className="text-amber-400">
                        {item.on_sale ? item.on_sale : item.price}
                      </span>
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-1 px-5">
          <div className="flex justify-between items-center border-t pt-3 border-gray-400 font-bold">
            <h3>SUBTOTAL:</h3>
            <h3 className="font-extrabold">{subtotal}</h3>
          </div>
          <button className="bg-amber-400 py-4 font-bold hover:text-white"
          onClick={handleViewCheckOut}>
            CHECKOUT
          </button>
          <button
            className="ring-1 ring-black font-bold hover:text-amber-400 hover:ring-amber-400 py-4"
            onClick={handleViewCart}
          >
            VIEW CART
          </button>
        </div> </>: <div className="text-gray-500 py-7 text-xl w-full justify-center flex px-6"> <p>No products in the cart</p></div>} 
      </div>
      {sideCart && (
        <div
          className="fixed left-0 top-0 bg-black/60 h-screen w-full z-[85]"
          onClick={closeSideCart}
        ></div>
      )}
    </section>
  );
}
