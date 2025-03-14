import Link from "next/link";
import { ChevronRight } from "lucide-react";
import Menu from "./components/Shopping";

export default function Page() {
  


  return (
    <main>
      <div className="bg-[#F8F5F0] flex items-center justify-center gap-4 py-16 flex-col">
        <h1 className="font-bold text-5xl">Shop</h1>
        <div className=" flex flex-row gap-1 items-center">
          <Link href="/" className="text-gray-500">
            Home
          </Link>{" "}
          <p className="text-md font-extrabold">
            <ChevronRight className="size-4" />
          </p>{" "}
          <p>Shop</p>
        </div>
      </div>
          <Menu  />
    
    </main>
  );
}
