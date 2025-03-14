"use client";
import { useAuth } from "@/context/AuthContext";
import Link from "next/link";
import { X, ChevronDown } from "lucide-react";
import { useState } from "react";

export default function SideBar() {
  const { sideBar, setSideBar } = useAuth();
  const [dropdown, setDropdown] = useState<boolean>(false);

  // Close sidebar and dropdown
  const handleClosingBar = (): void => {
    setSideBar(false);
    setDropdown(false);
  };

  // Handle keyboard events for dropdown
  const handleDropdownKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" || e.key === " ") {
      setDropdown(!dropdown);
    }
  };

  return (
    <>
      {/* Sidebar Navigation */}
      <nav
        className={`h-screen z-[99] fixed left-0 top-0 w-screen text-white ${
          sideBar ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-700`}
        aria-label="Main Navigation"
        role="navigation"
      >
        {/* Sidebar Content */}
        <div className="sm:w-[17rem] w-[15rem] bg-black relative h-screen pt-16 z-50">
          {/* Close Button */}
          <button
            className="absolute right-3 top-4 cursor-pointer"
            onClick={handleClosingBar}
            aria-label="Close sidebar"
          >
            <X className="size-5 cursor-pointer z-50" />
          </button>

          {/* Navigation Links */}
          <ul className="flex gap-2.5 flex-col">
            {[
              { path: "/", label: "Home" },
              { path: "/menu", label: "Menu" },
              { path: "/about", label: "About" },
              { path: "/shop", label: "Shop" },
              { path: "/blog", label: "Blog" },
            ].map((link) => (
              <li key={link.path}>
                <Link
                  href={link.path}
                  className="font-bold h-full w-full hover:text-amber-400 px-7 border-b-[1px] border-b-gray-500/30 pb-2 block"
                  onClick={handleClosingBar}
                  aria-label={`Go to ${link.label}`}
                >
                  {link.label}
                </Link>
              </li>
            ))}

            {/* Dropdown Menu */}
            <li className="font-bold w-full px-7 border-b-[1px] border-b-gray-500/30">
              <div
                className="flex justify-between items-center h-fit cursor-pointer"
                onClick={() => setDropdown(!dropdown)}
                onKeyDown={handleDropdownKeyDown}
                tabIndex={0}
                role="button"
                aria-expanded={dropdown}
                aria-label={`${dropdown ? "Collapse" : "Expand"} page menu`}
              >
                <span className="hover:text-amber-500">Page</span>
                <ChevronDown
                  className={`hover:text-amber-500 cursor-pointer size-5 transition-transform duration-1000 ${
                    dropdown ? "rotate-180" : "rotate-0"
                  }`}
                  aria-hidden="true"
                />
              </div>
              <ul
                className={`flex flex-col transition-all ease-in-out duration-1000 overflow-hidden ${
                  dropdown ? "max-h-64" : "max-h-0"
                }`}
                role="menu"
              >
                {[
                  { path: "/faqs", label: "FAQs" },
                  { path: "/our-teams", label: "Our Teams" },
                  { path: "/our-history", label: "Our History" },
                ].map((item) => (
                  <li key={item.path} role="menuitem">
                    <Link
                      href={item.path}
                      className="border-b-[1px] pt-3 border-b-gray-500/30 px-3 pb-2 font-bold h-full w-full hover:text-amber-400 block"
                      onClick={handleClosingBar}
                      aria-label={`Go to ${item.label}`}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>

            {/* Contact Link */}
            <li>
              <Link
                href="/contact-us"
                className="font-bold h-full w-full hover:text-amber-400 px-7 block"
                onClick={handleClosingBar}
                aria-label="Go to Contact page"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Overlay */}
        <div
          className="fixed right-0 top-0 z-10 w-full h-screen"
          onClick={handleClosingBar}
          role="button"
          tabIndex={0}
          aria-label="Close sidebar"
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              handleClosingBar();
            }
          }}
        />
      </nav>

      {/* Backdrop */}
      {sideBar && (
        <div
          className="fixed inset-0 bg-black/60 transition-opacity z-50"
          onClick={handleClosingBar}
          role="button"
          tabIndex={0}
          aria-label="Close sidebar"
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              handleClosingBar();
            }
          }}
        />
      )}
    </>
  );
}