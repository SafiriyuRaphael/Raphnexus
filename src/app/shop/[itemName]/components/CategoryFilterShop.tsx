"use client";
import Link from "next/link";
import { useState, Dispatch, SetStateAction, useEffect, ChangeEvent } from "react";
import Image from "next/image";
import { Search } from "lucide-react";
import { useRouter } from "next/navigation";


type FilterProps = {
  menu: MenuData | null;
  setMenu: Dispatch<SetStateAction<MenuData | null>>;
  setSideFilter: Dispatch<SetStateAction<boolean>>;
};

export default function CategoryFilterShop({ menu, setMenu, setSideFilter }: FilterProps) {
  const [price, setPrice] = useState<number>(50);
  const [originalMenu, setOriginalMenu] = useState<MenuData | null>(null);
  const [search, setSearch] = useState("");

  const router = useRouter();

  useEffect(() => {
    if (menu && !originalMenu) {
      setOriginalMenu(menu);
    }
  }, [menu, originalMenu]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const formattedSearch = search.trim().replace(/\s+/g, "-");
    if (formattedSearch) {
      router.push(`/shop/search/${formattedSearch}`);
      setSearch("");
    }
  };

  const handleFilter = () => {
    if (originalMenu) {
      if (price === 50) {
        setMenu(originalMenu); // Reset if no filtering is needed
      } else {
        const filteredMenu = {
          ...originalMenu,
          categories: originalMenu.categories.map((category) => ({
            ...category,
            items: category.items.filter((item) => (item.on_sale ?? item.price) <= price),
          })),
        };
        setMenu(filteredMenu);
      }
    }
    setSideFilter(false);
  };

  if (!menu) return <h3>Loading menu...</h3>;
  if (!originalMenu) return <h3>No Deals Available, come again later</h3>;

  return (
    <div className="flex flex-col gap-10">
      {/* Category List */}
      <div className="ring-1 ring-gray-200 rounded-2xl px-2 py-[0.5px]">
        <h3 className="font-bold pl-3 py-4">Categories</h3>
        <ul className="rounded-2xl px-5 py-3 bg-[#FBF7E8]">
          {menu.categories.map((cat, i) => (
            <Link key={i} href={`/shop/${cat.name.toLowerCase().replace(/\s+/g, "-")}`}>
              <li className="flex justify-between border-b border-dashed pb-1">
                <p className="hover:text-amber-400">{cat.name}</p>
                <p>({cat.items?.length ?? 0})</p>
              </li>
            </Link>
          ))}
        </ul>
      </div>

      {/* Search Bar */}
      <form
        className="w-full border-2 border-amber-400 flex justify-between items-center px-5 rounded-full py-2"
        onSubmit={handleSubmit}
      >
        <input
          type="search"
          className="w-full h-full focus:outline-none"
          placeholder="Search products ..."
          onChange={(e) => setSearch(e.target.value)}
          value={search}
        />
        <button type="submit">
          <Search className="hover:text-amber-400 cursor-pointer" />
        </button>
      </form>

      {/* Price Filter */}
      <div className="flex flex-col gap-3">
        <h3 className="py-2 text-xl font-bold border-dashed border-b">Filter by price</h3>
        <input
        className="w-full h-2 bg-amber-400 rounded-lg appearance-none cursor-pointer 
        [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-6 [&::-webkit-slider-thumb]:h-6 
        [&::-webkit-slider-thumb]:bg-amber-600 [&::-webkit-slider-thumb]:rounded-full 
        [&::-webkit-slider-thumb]:border-2 [&::-webkit-slider-thumb]:border-white 
        [&::-webkit-slider-thumb]:shadow-md"
          type="range"
          min="5"
          max="50"
          step="5"
          value={price}
          onChange={(e: ChangeEvent<HTMLInputElement>) => setPrice(Number(e.target.value))}
        />
        <label className="text-gray-500">Price: ₤0 - ₤{price}</label>
        <button
          className="bg-amber-400 self-start text-sm hover:text-white font-bold px-4 py-1"
          onClick={handleFilter}
        >
          FILTER
        </button>
      </div>

      {/* Best Deals */}
      {originalMenu.categories.some((cat) => cat.items.some((item) => item.on_sale)) && (
        <div className="flex flex-col gap-3">
          <h3 className="py-2 text-xl font-bold border-dashed border-b">Best Deals</h3>
          <div className="flex flex-col gap-3">
            {originalMenu.categories
              .reduce<MenuItem[]>((acc, cat) => {
                return acc.concat(cat.items.filter((item) => item.on_sale)).slice(0, 6);
              }, [])
              .map((item, index) => (
                <div key={index} className="border flex gap-5 w-full rounded-3xl px-2 py-2">
                  <div className="bg-[#F7F4EF] rounded-3xl">
                    <Image
                      src={`/menu/${item.image}.png`}
                      alt={`image of ${item.name}`}
                      height={150}
                      width={150}
                    />
                  </div>
                  <div className="flex flex-col gap-3">
                    <Link
                      href={`/products/${item.name.replace(/\s+/g, "-").toLowerCase()}`}
                      className="hover:text-amber-400"
                    >
                      <p className="font-bold">{item.name}</p>
                    </Link>
                    <p className="font-bold text-amber-400">₤{item.on_sale}</p>
                  </div>
                </div>
              ))}
          </div>
        </div>
      )}
    </div>
  );
}
