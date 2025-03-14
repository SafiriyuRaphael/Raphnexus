"use client";
import {
  Facebook,
  Linkedin,
  ShoppingBasket,
  Twitter,
} from "lucide-react";
import { FaGoogle, FaWhatsapp } from "react-icons/fa6";
import { FaPinterest } from "react-icons/fa";
import Image from "next/image";
import { useState } from "react";
import Favorites from "@/app/wishlist/components/Favorites";
import Link from "next/link";
import { useAuth } from "@/context/AuthContext";

type MealProps = {
  mealItem: MenuItem;
  category: Category;
};

export default function Meal({ mealItem, category }: MealProps) {
  const { cart } = useAuth();
  const [count, setCount] = useState<number>(1);
  const [AddedCartModal, setAddedCartModal] = useState(false);
  const [countModal, setCountModal] = useState(0);

  const handleAddCart = () => {
    const existingItem = cart.find((item) => item.name === mealItem.name);
    if (existingItem) {
      existingItem.quantity += count;
    } else {
      cart.push({
        name: mealItem.name,
        quantity: count,
        image: mealItem.image,
        price: mealItem.price,
        on_sale: mealItem.on_sale,
      });
    }
    sessionStorage.setItem("cart", JSON.stringify(cart));
    setCountModal(count);
    setAddedCartModal(true);
    window.scrollTo(0, 0);
  };

  const removeCount = () => {
    if (count > 1) setCount(count - 1);
  };

  const addCount = () => {
    setCount(count + 1);
  };

  return (
    <section className="sm:px-7 px-3 py-20 ">
      {AddedCartModal && (
        <div className="flex justify-between items-center px-2 sm:px-7 py-3 text-white border-l-8 border-l-green-800 bg-green-700 sm:text-lg gap-3 text-sm  rounded-md mb-8">
          <p>
            <span className="font-bold">
              {countModal > 1 ? `${countModal}x` : ""} {mealItem.name}
            </span>{" "}
            has been added to your cart
          </p>
          <Link
            href="/cart"
            className="pl-3 border-l font-bold hover:text-amber-400"
          >
            VIEW CART
          </Link>
        </div>
      )}
      <div className="flex gap-10 md:flex-row flex-col">
        <div className="flex flex-col gap-3 ">
          <div className="bg-[#F8F5F0] flex items-center justify-center  lg:h-full w-full  rounded-2xl">
            <Image
              src={`/menu/${mealItem.image}.png`}
              alt={mealItem.name}
              height={400}
              width={700}
              className="w-full  md:p-8"
            />
          </div>
          <div className="bg-[#F8F5F0] hidden md:block lg:hidden md:h-full w-full  rounded-2xl">
            <Image
              src={`/menu/${mealItem.image}.png`}
              alt={mealItem.name}
              height={400}
              width={700}
              className="w-full h-full"
            />
          </div>
        </div>
        <div className="flex flex-col gap-3 pb-8">
          <h1 className="text-3xl font-bold">{mealItem.name}</h1>
          <p className="text-gray-600">{mealItem.description}</p>
          <h3 className="text-amber-400 font-bold text-2xl">
            {mealItem.on_sale ?? mealItem.price}
          </h3>
          <div className="flex justify-between gap-2 border-y py-1">
            <div className="flex gap-2 items-center font-bold w-full">
              <p
                onClick={removeCount}
                className="font-bold size-7 rounded-full flex items-center justify-center text-2xl cursor-pointer hover:text-amber-400 bg-[#F8F5F0]"
              >
                -
              </p>{" "}
              <p>{count}</p>{" "}
              <p
                onClick={addCount}
                className="font-bold size-7 rounded-full flex items-center justify-center text-2xl cursor-pointer hover:text-amber-400 bg-[#F8F5F0]"
              >
                +
              </p>
            </div>
            <div className="flex items-center gap-5 w-full">
              <button
                className="bg-amber-400 font-bold text-sm w-full py-3 hover:text-white gap-1 items-center flex justify-center whitespace-nowrap px-3"
                onClick={handleAddCart}
              >
                <ShoppingBasket /> ADD TO CART
              </button>
              <div className="p-2.5 bg-[#F8F5F0] rounded-md">
                <Favorites data={mealItem} />
              </div>
            </div>
          </div>
          <div className="text-sm flex flex-col justify-between gap-2 border-b pt-4 pb-7 text-gray-600">
            <p>
              Category:{" "}
              <Link
                href={`/shop/${category.name
                  .replace(/\s+/g, "-")
                  .toLowerCase()}`}
                className=" hover:text-amber-400 font-bold hover:underline"
              >
                {category.name}
              </Link>
            </p>
            <p className="flex gap-1 items-center">
              Share:{" "}
              <span className="flex items-center gap-2">
                <a
                  href={`https://www.facebook.com/sharer/sharer.php?u=https://ralphnexus.com/products/${mealItem.name
                    .replace(/\s+/g, "-")
                    .toLowerCase()}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-amber-400"
                >
                  {" "}
                  <Facebook size={16} />
                </a>{" "}
                <a
                  href={`https://twitter.com/intent/tweet?url=https://ralphnexus.com/products/${mealItem.name
                    .replace(/\s+/g, "-")
                    .toLowerCase()}&text=Check%20out%20this%20product!`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-amber-400"
                >
                  <Twitter size={16} />
                </a>{" "}
                <a
                  href={`https://www.linkedin.com/sharing/share-offsite/?url=https://ralphnexus.com/products/${mealItem.name
                    .replace(/\s+/g, "-")
                    .toLowerCase()}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-amber-400"
                >
                  <Linkedin size={16} />
                </a>
                <a
                  href={`mailto:?subject=Check%20this%20out!&body=Hey,%20check%20out%20this%20product:%20https://ralphnexus.com/products/${mealItem.name
                    .replace(/\s+/g, "-")
                    .toLowerCase()}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-amber-400"
                >
                  <FaGoogle size={16} />
                </a>{" "}
                <a
                  href={`https://www.pinterest.com/pin/create/button/?url=https://ralphnexus.com/products/${mealItem.name
                    .replace(/\s+/g, "-")
                    .toLowerCase()}&media=https://ralphnexus.com/images/${
                    mealItem.image
                  }&description=Check%20out%20this%20amazing%20product!`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-amber-400"
                >
                  <FaPinterest size={16} />
                </a>{" "}
                <a
                  href={`https://wa.me/?text=Check%20out%20this%20amazing%20product:%20https://ralphnexus.com/products/${mealItem.name
                    .replace(/\s+/g, "-")
                    .toLowerCase()}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-amber-400"
                >
                  <FaWhatsapp size={16} />
                </a>
              </span>
            </p>
          </div>
          <ul className="pt-4 text-gray-600 list-disc pl-7 pb-7  border-b">
            <li>Free global shipping on all orders</li>
            <li>30 days returns if you change your mind</li>
            <li>Order before noon for same day dispatch</li>
          </ul>
          <div className="text-sm lg:items-center font-bold  flex-col lg:flex-row flex gap-5 pt-4">
            <p>Guaranteed Safe Checkout</p>
            <div>
              <Image
                src="/americanexpress.png"
                alt="payment"
                width={250}
                height={100}
              ></Image>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
