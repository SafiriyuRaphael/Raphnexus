"use client";
import { useAuth } from "@/context/AuthContext";
import { Phone, ChevronDown } from "lucide-react";
import { useState } from "react";
import Link from "next/link";

export default function Nav() {
  const { components } = useAuth();
  const [page, setPage] = useState(false);

  // Handle keyboard navigation for dropdown
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      setPage(!page);
    }
  };

  return (
    <nav
      className={`bg-green-600 px-7 items-center py-3 hidden text-white sticky top-0 z-50 ${
        components ? "lg:flex" : "hidden"
      }`}
      aria-label="Main Navigation"
      role="navigation"
    >
      {/* Left Navigation Links */}
      <div className="flex w-1/2 gap-8 font-extrabold" role="menubar">
        {/* Repeated links converted to array for maintainability */}
        {[
          { path: "/", label: "Home" },
          { path: "/menu", label: "Menu" },
          { path: "/about", label: "About" },
          { path: "/shop", label: "Shop" },
          { path: "/blog", label: "Blog" }
        ].map((link) => (
          <Link 
            key={link.path}
            href={link.path}
            className="hover:text-amber-400 cursor-pointer"
            role="menuitem"
            aria-label={`Go to ${link.label.toLowerCase()} page`}
          >
            {link.label}
          </Link>
        ))}

        {/* Accessible Dropdown Menu */}
        <div
          role="button"
          aria-haspopup="true"
          aria-expanded={page}
          aria-controls="page-menu"
          tabIndex={0}
          className="relative z-40"
          onMouseEnter={() => setPage(true)}
          onMouseLeave={() => setPage(false)}
          onFocus={() => setPage(true)}
          onBlur={() => setPage(false)}
          onKeyDown={handleKeyDown}
        >
          <div className="flex gap-1.5 items-center">
            <span>Page</span>
            <ChevronDown 
              className="size-4"
              aria-hidden="true"
            />
          </div>
          
          {page && (
            <div
              id="page-menu"
              role="menu"
              className="absolute top-full left-0 mt-2 py-2 w-44 bg-white rounded-md shadow-lg"
              onMouseLeave={() => setPage(false)}
            >
              {[
                { path: "/faqs", label: "FAQs" },
                { path: "/our-teams", label: "Our Teams" },
                { path: "/our-history", label: "Our History" }
              ].map((item) => (
                <Link
                  key={item.path}
                  href={item.path}
                  role="menuitem"
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-100 hover:text-amber-400"
                  tabIndex={-1}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          )}
        </div>

        <Link
          href="/contact-us"
          className="hover:text-amber-400 cursor-pointer"
          role="menuitem"
          aria-label="Go to contact page"
        >
          Contact
        </Link>
      </div>

      {/* Right Contact Section */}
      <div className="flex w-1/2 flex-col items-end">
        <div className="flex gap-1 items-center">
          <Phone className="size-5" aria-hidden="true" />
          <span>24/7 Support center</span>
        </div>
        <a
          href="tel:+234800000000"
          className="text-amber-400 hover:text-amber-300 transition-colors"
          aria-label="Call support center"
        >
          +234 80-000-0000
        </a>
      </div>
    </nav>
  );
}