"use client";

import * as React from "react";
import { useEffect } from "react"; 
import { ThemeProvider as NextThemesProvider } from "next-themes";

const backendUrls = [
  "https://quizcarback.onrender.com",
  "https://car-price-api-vfb0.onrender.com",
];

export function ThemeProvider({
  children,
  ...props
}: React.ComponentProps<typeof NextThemesProvider>) {
  useEffect(() => {
    (async () => {
      console.log("Sending wake-up calls to backend services...");

      await Promise.allSettled(
        backendUrls.map((url) =>
          fetch(url, {
            method: "GET", 
            mode: "no-cors",
          })
        )
      );

      console.log("Wake-up calls sent.");
    })();
  }, []); 

  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}