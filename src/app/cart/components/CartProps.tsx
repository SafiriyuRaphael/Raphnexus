"use client";
import { useAuth } from "@/context/AuthContext";
import Image from "next/image";
import { ChangeEvent, useState, useEffect } from "react";
import Link from "next/link";

export default function ShoppingCart() {
  const { cart, setCart } = useAuth();
  const [updated, setUpdated] = useState(false);
  const [cartState, setCartState] = useState<CartProps[] | []>([]); 
  useEffect(() => {
    setCartState(cart);
  }, [cart]);

  const handleQuantityChange = (
    e: ChangeEvent<HTMLInputElement>,
    name: string
  ) => {
    const value = Number(e.target.value);
  
    // Enforce min and max limits
    const newQuantity = Math.max(1, Math.min(500, value)); // Ensure value is between 1 and 30
  
    setCartState((prevCart) =>
      prevCart.map((item) =>
        item.name === name
          ? { ...item, quantity: isNaN(newQuantity) ? 1 : newQuantity }
          : item
      )
    );
  };

  const removeFromCart = (itemName: string) => {
    setCart((prevCart) => {
      const updatedCart = prevCart.filter((item) => item.name !== itemName);
      sessionStorage.setItem("cart", JSON.stringify(updatedCart));
      setCart(updatedCart);
      return updatedCart;
    });
  };


  const handleUpdateCart = () => {
    setCart(cartState);
    sessionStorage.setItem("cart", JSON.stringify(cart));
    setUpdated(true);
    setTimeout(() => setUpdated(false), 2000); 
  };

  const calculateSubtotal = (item: CartProps) =>
    (item.on_sale ?? item.price) * (item.quantity ?? 1);
  const total = cartState.reduce(
    (acc, item) => acc + calculateSubtotal(item),
    0
  );

  return (
    <div className="px-2 sm:px-7 lg:flex-row flex-col flex py-14 lg:py-20 gap-5">
      {/* Cart Updated Notification */}
      {updated && (
        <div className="bg-green-600 text-white p-3 text-center rounded mb-4">
          Cart updated successfully!
        </div>
      )}

      {/* Cart Table */}
      <div className="bg-white text-xs sm:text-sm  sm:p-6 w-full">
        <table className="w-full text-left">
          <thead className=" sm:text-sm">
            <tr className="border-b">
              <th></th>
              <th className="pb-2">PRODUCT</th>
              <th>PRICE</th>
              <th>QUANTITY</th>
              <th>SUBTOTAL</th>
            </tr>
          </thead>
          <tbody className="font-bold">
            {cartState.map((item) => (
              <tr key={item.name} className="border-b">
                <td>
                  {" "}
                  <p
                    onClick={() => removeFromCart(item.name)}
                    className="text-gray-500   font-normal size-4 border-gray-500 hover:text-amber-400 cursor-pointer hover:border-amber-400  flex items-center border justify-center rounded-full"
                  >
                    &times;
                  </p>
                </td>
                <td className="py-3 flex sm:flex-row flex-col sm:items-center gap-2">
                  <Image
                    src={`/menu/${item.image}.png`}
                    width={80}
                    height={50}
                    alt={item.name}
                    className="place-self-start size-16"
                  />
                  <Link href={`/products/${item.name.replace(/\s+/g, "-").toLowerCase()}`} className="hover:text-amber-400"> <span>{item.name}</span></Link>
                </td>
                <td>£{(item.on_sale??item.price).toFixed(2)}</td>
                <td>
                  <input
                    type="number"
                    value={item.quantity}
                    min="1"
                    max="500"
                    onChange={(e) => handleQuantityChange(e, item.name)}
                    className="w-16 border px-2 py-1 text-center"
                  />
                </td>
                <td>£{calculateSubtotal(item).toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="flex sm:flex-row flex-col-reverse justify-between mt-4 gap-5">
          <div className="flex sm:gap-2 sm:flex-row flex-col sm:border-0 border-dashed border-gray-300 border px-5 py-6">
            <input
              type="text"
              placeholder="Coupon code"
              className="border px-3 py-2 sm:w-2/3 rounded-md"
            />
            <button className="bg-amber-400 px-4 py-2 hover:text-white font-bold whitespace-nowrap text-sm ">
              APPLY COUPON
            </button>
          </div>
          <button
            className="bg-amber-400 px-4 sm:py5 py-2 hover:text-white font-bold transition text-sm whitespace-nowrap sm-fit sm:place-self-center"
            onClick={handleUpdateCart}
          >
            UPDATE CART
          </button>
        </div>
      </div>

      {/* Cart Totals */}
      <div className="border-gray-300 border-4 px-6 pb-6 mt-6">
        <h3 className="font-bold border-gray-300 border-b py-3">CART TOTALS</h3>
        <div className="flex justify-between py-3 border-gray-300 border-b">
          <span className="text-gray-500">Subtotal</span>
          <span className="font-bold">£{total.toFixed(2)}</span>
        </div>
        <div className="flex justify-between  text-gray-500 gap-10 whitespace-break-spaces border-gray-300 border-b py-3">
          <p className="">Shipping</p>
          <p className="">Shipping costs are calculated during checkout.</p>
        </div>
        <div className="flex justify-between py-7 font-bold text-lg border-gray-300 border-b">
          <span className="text-4xl text-gray-500">Total:</span>
          <span
            className="text-amber-500 text-2xl place-self-center
          "
          >
            £{total.toFixed(2)}
          </span>
        </div>
       <Link href="cart/checkout"> <button className="w-full bg-amber-400 py-3 hover:text-white mt-4 font-bold text-sm">
          PROCEED TO CHECKOUT
        </button></Link>
      </div>
    </div>
  );
}
