"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowUp } from "lucide-react";
import { cn } from "@/lib/utils";

export const ScrollToTopButton = () => {

  const [isVisible, setIsVisible] = useState(false);

  // Function to handle scroll event
  const toggleVisibility = () => {
    // Show button if page is scrolled more than 300px
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Function to scroll to the top of the page
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // Add scroll event listener on component mount
  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <Button
      onClick={scrollToTop}
      className={cn(
        "fixed bottom-5 right-5 z-50 rounded-lg p-2 transition-opacity duration-300 cursor-pointer !bg-[#5b0097] hover:scale-110 border-1 border-purple-500  drop-shadow-[#b13cff] drop-shadow-2xl",
        "text-primary-foreground",
        isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
      )}
      title="Scroll to top"
      aria-label="Scroll to top"
      size="icon"
    >
      <ArrowUp className="!h-6 !w-6" color="white" />
    </Button>
  );
};