"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
  SheetTitle,
} from "@/components/ui/sheet";
import Image from "next/image";
import Link from "next/link";
import { Menu, Download } from "lucide-react";
import clsx from "clsx";
import { usePathname } from "next/navigation";

function Navbar() {
  // 1. State to track scroll position
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      // Set state to true if scrolled more than 50px, otherwise false
      setIsScrolled(window.scrollY > 50);
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Cleanup function to remove the event listener
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/projects", label: "Projects" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <div
      className={clsx(
        "fixed top-0 left-0 right-0 transition-all duration-300 z-50 max-sm:px-3",
        { "top-5": isScrolled }
      )}
    >
      <div
        className={clsx(
          "container mx-auto transition-all duration-300 flex justify-between items-center z-50 border-purple-500 rounded-xl",
          {
            "bg-[#1A0B2E]/80 backdrop-blur-sm shadow-lg p-4 border-1":
              isScrolled,
            "p-4": !isScrolled,
          }
        )}
      >
        <Link href="/" className="flex items-center justify-center">
          <Image src="/ll.webp" alt="logo image" height={60} width={60} />
          <div className="flex-col items-center justify-center mt-1 flex">
            <h1 className="font-extrabold sm:text-lg text-[#cfa6eb]">
              Abdennour Boukhris
            </h1>
            <h2 className="font-bold sm:text-sm text-xs text-white">Portfolio</h2>
          </div>
        </Link>

        {/* 3. Desktop Navigation (hidden on small screens) */}
        <ul className="hidden md:flex items-center lg:space-x-8 space-x-4 text-white">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className={clsx("transition-colors duration-300", {
                  "text-[#cfa6eb] font-bold": ( item.href !== "/" &&  pathname.includes(item.href) ) || pathname === item.href,
                  "hover:text-[#cfa6eb]/80": pathname !== item.href,
                })}
              >
                {item.label}
              </Link>
            </li>
          ))}
          <li>
            <Button
              asChild
              className="!bg-[#a950e4] cursor-pointer !text-white font-bold transition-transform hover:scale-110 flex items-center gap-2"
            >
              <a
                href="/Boukhris Abdennour.pdf"
                download="Abdennour Boukhris - Resume.pdf"
              >
                Resume <img src="/download.webp" className="w-5" alt="" />
              </a>
            </Button>
          </li>
        </ul>

        {/* 4. Mobile Navigation (Hamburger Menu) */}
        <div className="md:hidden">
          <Sheet>
            <SheetTitle></SheetTitle>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="!h-6 !w-6 text-white" />
              </Button>
            </SheetTrigger>
            <SheetContent
              side="left"
              className="bg-[#1A0B2E] text-white border-l-violet-800"
            >
              <div className="flex flex-col h-full p-6">
                <ul className="flex flex-col items-start space-y-6 text-lg mt-10">
                  {navItems.map((item) => (
                    <li key={item.href}>
                      <SheetClose asChild>
                        <Link
                          href={item.href}
                          className={clsx("transition-colors duration-300", {
                            "text-[#cfa6eb] font-bold": pathname === item.href, // Active state style
                            "hover:text-[#cfa6eb]/80": pathname !== item.href, // Hover state style
                          })}
                        >
                          {item.label}
                        </Link>
                      </SheetClose>
                    </li>
                  ))}
                </ul>
                <div className="my-10">
                  <Button
                    asChild
                    className="w-full !bg-[#a950e4] cursor-pointer !text-white font-bold flex items-center gap-2"
                  >
                    <a
                      href="/Boukhris Abdennour.pdf"
                      download="Abdennour Boukhris - Resume.pdf"
                    >
                      Resume <img src="/download.webp" className="w-5" alt="" />
                    </a>
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
