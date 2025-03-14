"use client";
import { useEffect, useState } from "react";
export default function OrderPlacement() {
  const [order, setOrder] = useState<CartProps[] | []>([]);
  useEffect(() => {
    const order: CartProps[] = JSON.parse(
      sessionStorage.getItem("cart") || "[]"
    );
    setOrder(order);
  },[]);
  return (
    <section className="px-7 py-6 border-4 border-gray-400">
      <h3 className="font-bold pb-2 text-xl px-3">Your order</h3>
      <table>
        <thead className="font-bold n py-3 border-b">
          <tr className="flex justify-between">
            <th>Product</th>
            <th>Subtotal</th>
          </tr>
        </thead>
        <tbody>
          {order.map((item) => (
            <tr key={item.name} className=" py-3 border-b justify-between flex">
              <td>
                {item.name}{" "}
                <span className="text-gray-500">x {item.quantity}</span>
              </td>
              <td className="font-bold">
                {((item.on_sale ?? item.price) * (item.quantity ?? 1)).toFixed(
                  2
                )}
              </td>
            </tr>
          ))}
          <tr className="font-bold flex justify-between  py-3 pb-2 items-center">
            <td>Total</td>
            <td className="text-3xl text-amber-400">
              {order
                .reduce(
                  (acc, item) =>
                    acc + (item.on_sale ?? item.price) * (item.quantity ?? 1),
                  0
                )
                .toFixed(2)}
            </td>
          </tr>
        </tbody>
      </table>
      <div className="flex gap-3 font-bold items-center py-3 border-b">
        <input type="radio" name="payment" id="transfer" />
        <label htmlFor="transfer" id="transfer">
          Direct bank transfer
        </label>
      </div>
      <div className="flex gap-3 font-bold items-center py-3 border-b">
        <input type="radio" name="payment" id="check" />
        <label htmlFor="check" id="check">
          Check payments
        </label>
      </div>
      <div className="flex gap-3 font-bold items-center py-3 border-b">
        <input type="radio" name="payment" id="cash" />
        <label htmlFor="cash" id="cash">
          Cash on delivery
        </label>
      </div>
      <div className="flex gap-3 font-bold items-center py-3 border-b">
        <input type="radio" name="payment" id="paypal" />
        <label htmlFor="paypal" id="paypal">
          PayPal{" "}
          <a href="https://paypal.com" className="text-amber-400">
            What is PayPal?
          </a>
        </label>
      </div>
      <p className="text-gray-500 pb-3 pt-4">
        Your personal data will be used to process your order, support your
        experience throughout this website, and for other purposes described in
        our <span className="text-amber-400">privacy policy</span>.
      </p>
      <button
        type="submit"
        className=" w-full bg-amber-400 hover:text-white py-3 font-bold"
      >
        PLACE ORDER
      </button>
    </section>
  );
}
