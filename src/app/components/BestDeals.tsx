import Link from "next/link";

export default function BestDeals() {
  return (
    <section
      className="py-6 px-7 pb-16 grid lg:grid-cols-[2fr_1fr_1fr] md:grid-cols-2 lg:grid-rows-[450px] gap-3 text-white sm:grid-cols-1 md:grid-rows-[450px_450px] grid-rows-[450px_450px_450px]"
      aria-labelledby="best-deals-heading"
      role="region" // Section landmark for screen readers
    >
      {/* Hidden heading for screen reader users */}
      <h2 id="best-deals-heading" className="sr-only">
        Today’s Best Deals
      </h2>

      {/* Main pizza deal section - largest grid item */}
      <div
        className="flex flex-col gap-5 items-center justify-start pt-10 bg-[#33BFC4] rounded-3xl lg:col-auto md:col-span-3 bg-[url('/pizzabg.jpg')] bg-blend-multiply hover:bg-center transform transition-all duration-700 cursor-pointer"
        role="button"
        tabIndex={0}
        aria-label="Today's Best Deal: Delicious Pizza - The best options of the day in your town"
      >
        {/* Decorative text - hidden from screen readers */}
        <p className="fantasy text-amber-400 text-xl" aria-hidden="true">
          Today&apos;s Best Deal
        </p>
        <div className="text-center w-xs px-4 sm:w-full">
          {/* Visual heading - hidden from screen readers */}
          <h1 className="text-3xl sm:text-4xl font-bold" aria-hidden="true">DELICIOUS PIZZA</h1>
          <p aria-hidden="true">The best options of the day in your town</p>
        </div>
      </div>

      {/* Fried chicken deal section - right top grid item */}
      <div
        className="flex flex-col gap-5 items-center justify-end pb-10 bg-[#F04E30] rounded-3xl bg-[url('/chickenbg.jpg')] bg-blend-multiply hover:bg-center transform transition-all duration-700 cursor-pointer"
        role="button"
        tabIndex={0}
        aria-label="Spicy Delicious Fried Chicken - Available this weekend only"
      >
        <div className="text-center flex flex-col gap-2">
          {/* Visual text elements - hidden from screen readers */}
          <p className="fantasy text-xl" aria-hidden="true">Spicy Delicious</p>
          <h1 className="text-3xl font-bold" aria-hidden="true">FRIED CHICKEN</h1>
          <p aria-hidden="true">This weekend only</p>
        </div>
        {/* Shop now button for fried chicken */}
        <Link href="/shop"> <button
          className="bg-amber-400 px-5 py-2 text-black hover:text-white font-bold"
          aria-label="Shop now for Fried Chicken"
        >
          SHOP NOW
        </button></Link>
      </div>

      {/* Pasta deal section - right bottom grid item */}
      <div
        className="flex flex-col gap-5 items-center justify-start pt-10 bg-[#9B71C1] rounded-3xl bg-[url('/pastabg.jpg')] bg-blend-multiply hover:bg-center transform transition-all duration-700 cursor-pointer"
        role="button"
        tabIndex={0}
        aria-label="Pasta Menu - Super Delicious"
      >
        <div className="text-center">
          {/* Visual pasta menu heading */}
          <h1 className="text-3xl font-bold" aria-hidden="true">PASTA MENU</h1>
          <p aria-hidden="true">Super Delicious</p>
        </div>
        {/* Shop now button for pasta */}
        <Link href="/shop">
        <button
          className="bg-amber-400 px-5 py-2 text-black hover:text-white font-bold"
          aria-label="Shop now for Pasta Menu"
        >
          SHOP NOW
        </button></Link>
      </div>
    </section>
  );
}