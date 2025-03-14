"use client";
import { useAuth } from "@/context/AuthContext";
import { Facebook, Twitter, Youtube, Linkedin } from "lucide-react";

export default function TopFooter() {
  const { components } = useAuth();

  return (
    <section
      className={`bg-[#131212] text-white py-16 relative ${
        components ? "hidden" : ""
      }`}
      aria-label="Footer Section"
      role="contentinfo"
    >
      {/* Brand Logo */}
      <h3
        className="text-green-600 font-extrabold whitespace-nowrap text-3xl bg-[#131212] left-1/2 transform -translate-x-1/2 absolute top-11 z-20"
        aria-label="RaphNexus"
      >
        RaphNexus
      </h3>

      {/* Footer Content */}
      <div className="text-center lg:h-[50vh] px-7 border-t-2 border-t-gray-600/20 md:pt-10 pt-14 grid lg:grid-cols-4 md:grid-cols-2 place-content-center gap-11">
        {/* Address Section */}
        <div className="flex flex-col gap-4 lg:mb-0 md:mb-16">
          <h3 className="text-xl lg:text-2xl font-bold whitespace-nowrap">
            ADDRESS
          </h3>
          <address className="not-italic">
            <p className="text-gray-400">570 8th Ejigbo,</p>
            <p className="text-gray-400">Lagos 10001 Nigeria</p>
          </address>
        </div>

        {/* Book a Table Section */}
        <div className="flex flex-col gap-4">
          <h3 className="text-xl lg:text-2xl font-bold whitespace-nowrap">
            BOOK A TABLE
          </h3>
          <p className="text-gray-400">
            Enjoy delicious meals from RaphNexus Food Truck. <br /> Call the
            Customer care section to learn more.
          </p>
          <a
            href="tel:+2340000000000"
            className="text-xl text-amber-400 hover:text-amber-300 transition-colors"
            aria-label="Call us at (234) 000-0000"
          >
            (234) 000-0000
          </a>
        </div>

        {/* Opening Hours and Social Media Section */}
        <div className="flex flex-col gap-4">
          <h3 className="text-xl lg:text-2xl font-bold whitespace-nowrap">
            OPENING HOURS
          </h3>
          <div>
            <p className="text-gray-400">
              Monday - Friday: <span className="text-white">8am - 4pm</span>
            </p>
            <p className="text-gray-400">
              Saturday: <span className="text-white">9am - 5pm</span>
            </p>
          </div>
          <div className="flex gap-2 justify-center" aria-label="Social media links">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit our Facebook page"
            >
              <Facebook className="bg-white text-black hover:bg-amber-400 cursor-pointer transition-colors duration-300 p-2 size-8 rounded-full" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit our Twitter profile"
            >
              <Twitter className="bg-white fill-black hover:bg-amber-400 cursor-pointer transition-colors duration-300 p-2 size-8 rounded-full" />
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit our YouTube channel"
            >
              <Youtube className="bg-white fill-black hover:bg-amber-400 cursor-pointer transition-colors duration-300 p-2 size-8 rounded-full" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit our LinkedIn profile"
            >
              <Linkedin className="bg-white text-black hover:bg-amber-400 cursor-pointer transition-colors duration-300 p-2 size-8 rounded-full" />
            </a>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="flex flex-col gap-4">
          <h3 className="text-xl lg:text-2xl font-bold whitespace-nowrap">
            NEWSLETTER
          </h3>
          <p className="text-gray-400">
            Subscribe to the weekly newsletter for all the latest updates
          </p>
          <form
            className="ring-1 ring-gray-500 flex gap-2 px-2"
            onSubmit={(e) => {
              e.preventDefault();
              // Add subscription logic here
            }}
            aria-label="Newsletter subscription form"
          >
            <label htmlFor="newsletter-email" className="sr-only">
              Enter your email
            </label>
            <input
              id="newsletter-email"
              type="email"
              placeholder="Your Email ..."
              className="w-full bg-transparent focus:outline-none"
              aria-required="true"
              required
            />
            <button
              type="submit"
              className="bg-amber-400 text-black p-2.5 hover:bg-amber-500 transition-colors"
              aria-label="Subscribe to newsletter"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}