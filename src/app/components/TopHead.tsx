import { MapPinCheck, Truck, Facebook, Twitter, Linkedin, Github } from "lucide-react";

export default function TopHead() {
  return (
    <div
      className="bg-black text-white flex items-center justify-between px-7 py-3 sta"
      role="banner"
      aria-label="Top Header"
    >
      {/* Left Section: Store Finder and Order Tracking */}
      <div className="md:grid lg:grid-cols-2 md:grid-cols-1 gap-1 lg:gap-7 hidden">
        {/* Find a Store */}
        <a
          href="/store-locator"
          className="flex gap-2 hover:text-amber-400 cursor-pointer"
          aria-label="Find a store"
        >
          <MapPinCheck className="size-5" aria-hidden="true" />
          <p>Find a store</p>
        </a>

        {/* Order Tracking */}
        <a
          href="/order-tracking"
          className="flex gap-2 hover:text-amber-400 cursor-pointer"
          aria-label="Track your order"
        >
          <Truck className="size-5" aria-hidden="true" />
          <p>Order Tracking</p>
        </a>
      </div>

      {/* Center Section: Secure Delivery Message */}
      <p className="md:w-fit flex w-full place-content-center text-center">
        100% Secure delivery without contacting the courier
      </p>

      {/* Right Section: Social Media Links */}
      <div className="md:flex gap-2 hidden" aria-label="Social media links">
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Visit our Facebook page"
        >
          <Facebook className="fill-white size-5 hover:fill-amber-400 cursor-pointer" />
        </a>
        <a
          href="https://twitter.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Visit our Twitter profile"
        >
          <Twitter className="fill-white size-5 hover:fill-amber-400 cursor-pointer" />
        </a>
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Visit our LinkedIn profile"
        >
          <Linkedin className="fill-white size-5 hover:fill-amber-400 cursor-pointer" />
        </a>
        <a
          href="https://github.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Visit our GitHub repository"
        >
          <Github className="fill-white size-5 hover:fill-amber-400 cursor-pointer" />
        </a>
      </div>
    </div>
  );
}