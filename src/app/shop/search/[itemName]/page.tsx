"use client";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import CategoryShopping from "../../[itemName]/components/CategoryShopping";
import CategoryFilterShop from "../../[itemName]/components/CategoryFilterShop";
import { getRestaurantMenu } from "@/lib/getRestaurantMenu";
import { useState, useEffect } from "react";

type Params = {
  params: Promise<{ itemName: string }>;
};
export default function SearchPage({ params }: Params) {
  const [menu, setMenu] = useState<MenuData | null>(null);
  const [notfound, setNotfound] = useState<boolean>(false);
  const [page, setPage] = useState("");
  const [fakeMenu, setFakeMenu] = useState<MenuData | null>(null);
  const [fakeFilter, setFakeFilter] = useState(false);

  useEffect(() => {
    const fetchMenu = async () => {
      const data = await getRestaurantMenu();
      const { itemName } = await params;
      const decodedItemName = itemName.replace(/-/g, " ");
      setPage(decodedItemName);
      

      if (!data) return;

      const findCategory = (menuData: MenuData, searchTerm: string) => {
        const fakePropcat: MenuData = { categories: data.categories }; // ✅ This works
        setFakeMenu(fakePropcat);

        setNotfound(false);
        const lowerCaseSearch = searchTerm.toLowerCase();

        // Search for a category by name
        const category = menuData.categories.find((cat: Category) =>
          cat.name.toLowerCase().includes(lowerCaseSearch)
        );

        if (category) {
          setMenu({ categories: [category] }); // ✅ Found category, update state
          return;
        }

        // If no category name matches, search inside menu items
        const matchingCategories: Category[] = menuData.categories
          .map((cat) => {
            // Filter items inside the category that match the search term
            const matchingItems = cat.items.filter(
              (item) =>
                item.name.toLowerCase().includes(lowerCaseSearch) ||
                item.description.toLowerCase().includes(lowerCaseSearch)
            );

            // If there are matching items, return a new category with only those items
            if (matchingItems.length > 0) {
              return { ...cat, items: matchingItems };
            }

            return null;
          })
          .filter(Boolean) as Category[]; // Remove null values

        if (matchingCategories.length > 0) {
          setMenu({ categories: matchingCategories }); // ✅ Found items, update state
          return;
        }

        // If nothing is found, set not found
        setNotfound(true);
      };

      findCategory(data, decodedItemName); // ✅ Search for category, not item
    };

    fetchMenu();
  }, [params]); // ✅ Dependency on params.itemName

  return (
    <main>
      <div className="bg-[#F8F5F0] flex items-center justify-center gap-4 py-16 flex-col text-center">
        <h1 className="font-bold text-3xl px-6 lg:text-5xl">Search Results: &quot;{page}&quot;</h1>
        <div className=" flex flex-row px-2 gap-1 items-center">
          <Link href="/" className="text-gray-500">
            Home
          </Link>{" "}
          <p className="text-md font-extrabold">
            <ChevronRight className="size-4" />
          </p>
          <Link href="/shop" className="text-gray-500">
            Shop
          </Link>{" "}
          <p className="text-md font-extrabold">
            <ChevronRight className="size-4" />
          </p>
          <p>Search results for &quot;{page}&quot;</p>
        </div>
      </div>
      <CategoryShopping menu={menu} setMenu={setMenu} />

      {notfound && (
        <div className={`flex gap-7 px-7 py-14 ${fakeFilter}`}>
          <div className="w-full pl-3 mt-3 lg:mt-0  text-white">
            <p className=" bg-[#3D9CD2] border-l-8 rounded-md py-3 px-2 md:px-7   border border-l-[#2b749e]">No products were found matching your selection</p>
          </div>
          <div className="w-[40vw] lg:block hidden">
          <CategoryFilterShop
            menu={fakeMenu}
            setMenu={setFakeMenu}
            setSideFilter={setFakeFilter}
          /></div>
        </div>
      )}
    </main>
  );
}
