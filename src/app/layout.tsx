import type { Metadata } from "next";
import { Preahvihear } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./Components/theme-provider";
import Navbar from "./Components/Navbar";
import { ScrollToTopButton } from "./Components/ScrollToTopButton";

const preahvihear = Preahvihear({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-preahvihear",
});

export const metadata: Metadata = {
  title: "Abdennour Boukhris",
  description: "A personal portfolio built with Next.js and Tailwind CSS.",
  icons: {
    icon: "/icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${preahvihear.variable} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          disableTransitionOnChange
        >
          <Navbar />
          {children}
          <ScrollToTopButton />
        </ThemeProvider>
      </body>
    </html>
  );
}
