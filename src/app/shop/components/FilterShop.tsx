"use client";
import { getRestaurantMenu } from "@/lib/getRestaurantMenu";
import {
  useState,
  Dispatch,
  SetStateAction,
  useEffect,
  ChangeEvent,
} from "react";
import Image from "next/image";
import { Search } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

type FilterProps = {
  menu: MenuData | null;
  setMenu: Dispatch<SetStateAction<MenuData | null>>;
  setSideFilter: Dispatch<SetStateAction<boolean>>;
};

export default function FilterShop({
  menu,
  setMenu,
  setSideFilter,
}: FilterProps) {
  const [price, setPrice] = useState<number>(50);
  const [originalMenu, setOriginalMenu] = useState<MenuData | null>(null); // Store original data separately
  const [bestDeals, setBestDeals] = useState<MenuData | null>(null);
  const [searchBox, setSearchBox] = useState("");
  const router = useRouter();

  useEffect(() => {
    const fetchMenu = async () => {
      const data = await getRestaurantMenu();
      if (data) {
        setMenu(data);
        setOriginalMenu(data); // Store the original menu separately
        setBestDeals(data);
      }
    };
    fetchMenu();
  }, [setMenu]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const formattedSearch = searchBox.trim().replace(/\s+/g, "-");
    if (formattedSearch.trim()) {
      router.push(`/shop/search/${formattedSearch}`);
      setSearchBox("");
    }
  };

  const handleFilter = () => {
    if (originalMenu) {
      const filteredMenu = {
        ...originalMenu, // Always filter from the original menu
        categories: originalMenu.categories.map((category) => ({
          ...category,
          items: category.items.filter((item) => {
            // Use onSale price if it exists, otherwise use normal price
            const itemPrice = item.on_sale ?? item.price;
            return itemPrice <= price;
          }),
        })),
      };
      setMenu(filteredMenu);
      setBestDeals(filteredMenu);
    }
    setSideFilter(false);
  };

  if (!menu) return <h3>Loading menu...</h3>;
  if (!bestDeals) return <h3>No Deals Available, come again later</h3>;

  return (
    <div className="flex flex-col gap-10">
      <div className="ring-1 ring-gray-200 rounded-2xl px-2 py-[0.5px]">
        <h3 className="font-bold pl-3 py-4">Categories</h3>
        <div>
          <ul className="rounded-2xl px-5 py-3 bg-[#FBF7E8]">
            {menu.categories.map((cat, i) => (
              <Link
                key={i}
                href={`/shop/${cat.name.toLowerCase().replace(/\s+/g, "-")}`}
                
              >
                <li className="flex justify-between border-b border-dashed pb-1">
                  <p className="hover:text-amber-400">{cat.name}</p> <p>{`(${cat.items?.length ?? 0})`}</p>
                </li>
              </Link>
            ))}
          </ul>
        </div>
      </div>

      <form
        className="w-full border-2 border-amber-400 flex justify-between items-center px-5 rounded-full py-2"
        onSubmit={handleSubmit}
      >
        <input
          type="searchBox"
          value={searchBox}
          onChange={(e) => setSearchBox(e.target.value)}
          className="w-full h-full focus:outline-none"
          placeholder="Search products ... "
        />{" "}
        <button type="submit" className="focus:outline-none ">
          <Search />
        </button>
      </form>

      <div className="flex flex-col gap-3">
        <h3 className="py-2 text-xl font-bold border-dashed border-b">
          Filter by price
        </h3>
        <input
          className="w-full h-2 bg-amber-400 rounded-lg appearance-none cursor-pointer 
            [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-6 [&::-webkit-slider-thumb]:h-6 
            [&::-webkit-slider-thumb]:bg-amber-600 [&::-webkit-slider-thumb]:rounded-full 
            [&::-webkit-slider-thumb]:border-2 [&::-webkit-slider-thumb]:border-white 
            [&::-webkit-slider-thumb]:shadow-md"
          id="rangebox"
          type="range"
          min="5"
          max="50"
          step="5"
          value={price}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setPrice(Number(e.target.value))
          }
        />
        <label htmlFor="rangebox" className="text-gray-500">
          Price: ₤0 - ₤{price}
        </label>
        <button
          type="submit"
          id="rangebox"
          className="bg-amber-400 self-start text-sm hover:text-white font-bold px-4 py-1"
          onClick={handleFilter}
        >
          FILTER
        </button>
      </div>

      <div className="flex flex-col gap-3">
        <h3 className="py-2 text-xl font-bold border-dashed border-b">
          Best Deals
        </h3>
        <div className="flex flex-col gap-3">
          {bestDeals.categories
            .flatMap((cat) => cat.items)
            .slice(0, 6)
            .map((item, index) => (
              <div key={index} className="">
                {item.on_sale && (
                  <div className="border flex gap-5 w-full  rounded-3xl px-2  py-2">
                    <div className="bg-[#F7F4EF] rounded-3xl ">
                      <Image
                        src={`/menu/${item.image}.png`}
                        alt={`image of ${item.name}`}
                        height={150}
                        width={150}
                      />
                    </div>
                    <div className="flex flex-col gap-3">
                    <Link href={`/products/${item.name.replace(/\s+/g, "-").toLowerCase()}`} className="hover:text-amber-400"> <p className=" font-bold">{item.name}</p></Link>
                      <p className="font-bold text-amber-400">{item.on_sale}</p>
                    </div>
                  </div>
                )}
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
