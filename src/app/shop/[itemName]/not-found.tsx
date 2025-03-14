import Link from "next/link";
import { ChevronRight } from "lucide-react";

export default function NotFound() {
  return (
    <section className="min-h-screen">
      <div className="bg-[#F8F5F0] flex items-center justify-center gap-6 py-16 flex-col">
        <h1 className="font-bold text-5xl"> Category Not Found</h1>
        <div className="flex flex-row gap-1 items-center">
          <Link href="/" className="text-gray-500">
            Home
          </Link>{" "}
          <p className="text-md font-extrabold">
            <ChevronRight className="size-4" />
          </p>{" "}
          <p> Category Not Found</p>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center h-[60vh]">
        <h1 className="text-6xl font-bold text-red-600">404</h1>
        <p className="text-lg text-gray-700 mt-2">Oops! Category not found.</p>
        <Link
          href="/"
          className="mt-4 px-4 py-2 bg-amber-400 text-white rounded-lg hover:bg-amber-400"
        >
          Go Home
        </Link>
      </div>
    </section>
  );
}
