"use client";
import { getRestaurantMenu } from "@/lib/getRestaurantMenu";
import { useEffect, useState } from "react";
import Image from "next/image";
import { ChevronDown, Filter } from "lucide-react";
import { IoGridSharp } from "react-icons/io5";
import { MdViewList } from "react-icons/md";
import FilterShop from "./FilterShop";
import Favorites from "@/app/wishlist/components/Favorites";
import AddToCart from "@/app/cart/components/AddToCart";
import Link from "next/link";

export default function Menu() {
  const [listView, setListView] = useState(false);
  const [menu, setMenu] = useState<MenuData | null>(null);
  const [sortOption, setSortOption] = useState("name"); // Default sorting by name
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);
  const [sideFilter, setSideFilter] = useState<boolean>(false); // For dropdown toggle

  useEffect(() => {
    const fetchMenu = async () => {
      const data = await getRestaurantMenu();
      if (data) {
        setMenu(data);
      }
    };
    fetchMenu();
  }, [setMenu]);

  if (!menu)
    return (
      <p className="text-center my-7 w-full text-amber-400">
        Oops! Menu not available.... Please refresh
      </p>
    );

  const sortedItems = menu.categories
    .flatMap((category) => category.items)
    .sort((a, b) => {
      if (sortOption === "name") return a.name.localeCompare(b.name);
      if (sortOption === "latest") return -1;
      if (sortOption === "price:low-high") return (a.on_sale??a.price)- (b.on_sale??b.price);
      if (sortOption === "price:high-low") return (b.on_sale??b.price) - (a.on_sale??a.price);
      return 0;
    });

  return (
    <section className="px-7 py-16 flex gap-8 ">
      <div className="flex flex-col gap-4">
        <div className="flex justify-between  items-center">
          <div className="flex gap-5">
            {" "}
            <p
              className="font-bold text-sm sm:text-md flex items-center gap-1 lg:hidden cursor-pointer hover:text-black/50"
              onClick={() => setSideFilter(true)}
            >
              <Filter className="size-4" /> FILTER
            </p>
            <p className="text-gray-500 md:block hidden">{`Showing all ${sortedItems.length} results`}</p>
          </div>
          <div className="flex">
            <div className="flex gap-2 sm:w-full w-[50vw] justify-end sm:gap-3 items-center">
              <IoGridSharp
                className={`size-4 hover:fill-black cursor-pointer ${
                  listView ? "fill-gray-500" : "fill-black"
                }`}
                onClick={() => setListView(false)}
              />
              <MdViewList
                className={`size-5 hover:fill-black cursor-pointer ${
                  listView ? "fill-black" : "fill-gray-500"
                }`}
                onClick={() => setListView(true)}
              />

              {/* Sorting Dropdown */}
              <div className="relative">
                <div
                  className="w-full gap-4 sm:gap-6 py-2 sm:py-4 flex justify-between rounded-md items-center bg-[#FBF7E8] px-2 sm:px-4 cursor-pointer"
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                >
                  <p>
                    {sortOption === "name"
                      ? "Default sorting"
                      : sortOption === "latest"
                      ? "Sort by latest"
                      : sortOption === "price:low-high"
                      ? "Sort by price: low to high"
                      : sortOption === "price:high-low"
                      ? "Sort by price: high to low"
                      : "Default sorting"}
                  </p>
                  <ChevronDown className="size-4" />
                </div>

                {isDropdownOpen && (
                  <ul className="absolute bg-[#FBF7E8] border w-full border-black shadow-md mt-1 z-50 text-sm md:text-md  text-gray-700">
                    <li
                      className="px-3 hover:bg-gray-600 hover:text-white pt-1 "
                      onClick={() => {
                        setSortOption("name");
                        setIsDropdownOpen(false);
                      }}
                    >
                      Default sorting
                    </li>
                    <li
                      className="px-3 hover:bg-gray-600 hover:text-white pt-1 "
                      onClick={() => {
                        setSortOption("latest");
                        setIsDropdownOpen(false);
                      }}
                    >
                      Sort by latest
                    </li>
                    <li
                      className="px-3 hover:bg-gray-600 hover:text-white pt-1 "
                      onClick={() => {
                        setSortOption("price:low-high");
                        setIsDropdownOpen(false);
                      }}
                    >
                      Sort by price: low to high
                    </li>
                    <li
                      className="px-3 hover:bg-gray-600 hover:text-white pt-1 "
                      onClick={() => {
                        setSortOption("price:high-low");
                        setIsDropdownOpen(false);
                      }}
                    >
                      Sort by price: high to low
                    </li>
                  </ul>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Menu Grid */}

        <div>
          {sortedItems.length === 0 && (
            <div className="h-screen mt-3">
              {" "}
              <h3 className="sm:px-7 px-2 bg-blue-700  py-3 lg:w-[70vw] w-[85vw] text-white border-l-blue-500 border border-l-[1.3rem]">
                No products were found matching your selection
              </h3>
            </div>
          )}
          <div
            className={`grid  gap-6 ${
              !listView ? "grid-cols-2 md:grid-cols-6" : "grid-cols-1"
            }`}
          >
            {sortedItems.map((item) => (
              <div
                className={`flex justify-between rounded-3xl group  px-2 py-2 border ${
                  listView
                    ? "flex-col sm:flex-row sm:items-center gap-3 md:gap-6"
                    : "flex-col gap-3"
                }`}
                key={item.name}
              >
                <div
                  className={`relative    flex items-end ${
                    !listView
                      ? "h-44 sm:h-72 md:h-28 w-full"
                      : " h-72  flex-nowrap sm:w-[30rem] w-full"
                  }`}
                >
                  {!listView && (
                    <div className="absolute right-2 top-3 z-40">
                      <Favorites data={item} />
                    </div>
                  )}
                  <Image
                    src={`/menu/${item.image}.png`}
                    alt={item.name}
                    width={500}
                    height={200}
                    className={`absolute top-1/2 left-1/2 transform -translate-x-1/2  -translate-y-1/2 z-30  ${
                      !listView
                        ? "group-hover:scale-110 transition-transform duration-500 md:size-20"
                        : "sm:size-65 size-44"
                    }`}
                  />
                  {item.on_sale && (
                    <p className="px-2 bg-black rounded-xl absolute z-40 text-white top-5 left-1 font-bold text-sm">
                      Sale!
                    </p>
                  )}
                  <div
                    className={`bg-amber-100  w-full rounded-3xl group-hover:h-full group-hover:bg-amber-400 transition-all transform duration-500 ease-in-out ${
                      !listView ? "h-24 sm:h-36 md:h-16 " : "h-24 sm:h-44"
                    }`}
                  ></div>
                </div>
                {!listView && (
                  <>
                    <Link href={`/products/${item.name.replace(/\s+/g, "-").toLowerCase()}`} className="hover:text-amber-400"> <h3 className="md:block hidden font-bold px-2">
                      {`${item.name.slice(0, 16)}...`}
                    </h3></Link>
                    <Link href={`/products/${item.name.replace(/\s+/g, "-").toLowerCase()}`} className="hover:text-amber-400"> <h3 className="md:hidden font-bold px-1">{item.name}</h3></Link>
                    <p className="md:block hidden pl-1 text-sm text-gray-500">
                      {`${item.description.slice(0, 26)}...`}
                    </p>
                    <p className="md:hidden pl-1 text-sm text-gray-500">
                      {`${item.description.slice(0, 70)}...`}
                    </p>
                    <div>
                      {item.on_sale ? (
                        <div className="flex justify-between items-end ">
                          <div className="flex md:flex-col pl-1">
                            <p className="line-through text-xl text-gray-500">
                              {item.price}
                            </p>
                            <p className="text-amber-400 font-bold text-xl">
                              {item.on_sale}
                            </p>
                          </div>
                          <AddToCart data={item} />
                        </div>
                      ) : (
                        <div className="flex justify-between items-center">
                          <p className="text-amber-400 font-bold text-xl">
                            {item.price}
                          </p>
                          <AddToCart data={item} />
                        </div>
                      )}
                    </div>
                  </>
                )}
                {listView && (
                  <div className="flex flex-col gap-2 sm:px-7 relative h-full  justify-center">
                   <Link href={`/products/${item.name.replace(/\s+/g, "-").toLowerCase()}`} className="hover:text-amber-400">  <h3 className="text-xl font-bold">{item.name}</h3></Link>
                    <p className="text-gray-500">{item.description}</p>
                    <div className="absolute bottom-0 right-0">
                      <AddToCart data={item} />
                    </div>  
                    <div>
                      {item.on_sale ? (
                        <div className="flex gap-2  font-bold">
                          <p className="line-through text-xl">{item.price}</p>
                          <p className="text-red-600 font-bold text-xl">
                            {item.on_sale}
                          </p>
                        </div>
                      ) : (
                        <p className="text-red-500 font-bold text-xl">
                          {item.price}
                        </p>
                      )}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className={`w-[30rem] hidden lg:block`}>
        <FilterShop
          setSideFilter={setSideFilter}
          menu={menu}
          setMenu={setMenu}
        />
      </div>
      <div
        className={`  flex-nowrap transition-transform bg-white  duration-700 py-5 px-3 w-[19rem] sm:w-[23rem] lg:hidden fixed left-0 top-0   z-[99]    overflow-y-scroll scrool max-h-screen shadow-lg shadow-black  ${
          !sideFilter ? "-translate-x-full " : " translate-x-0 transform    "
        }`}
      >
        <p
          className="flex lg:hidden gap-2 pb-6 text-sm justify-end text-gray-700 cursor-pointer"
          onClick={() => setSideFilter(false)}
        >
          HIDE FILTER <span className="font-extrabold text-black">X</span>
        </p>
        <FilterShop
          menu={menu}
          setMenu={setMenu}
          setSideFilter={setSideFilter}
        />
      </div>

      {sideFilter && (
        <div
          className="fixed right-0 top-0 w-full h-full bg-black/50 z-[90]"
          onClick={() => setSideFilter(false)}
        ></div>
      )}
    </section>
  );
}
