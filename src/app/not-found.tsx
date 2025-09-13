// app/not-found.tsx
"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { SparklesCore } from "@/components/ui/sparkles";
import Image from "next/image";


import { useState, useEffect } from "react";

export default function NotFound() {

  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  } as const;

  return (
    <div className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden bg-black text-center">
      <div className="pointer-events-none absolute inset-0 h-full w-full">
        {isClient && (
          <SparklesCore
            id="tsparticles"
            background="#11071f"
            minSize={0.2}
            maxSize={1.2}
            particleDensity={50}
            className="h-full w-full"
            particleColor="#FFFFFF"
          />
        )}
      </div>

      {/* Main Content with Staggered Animation */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="z-10 flex flex-col items-center gap-4 px-4 relative"
      >
        {/* Gently bobbing avatar */}
        <motion.div
          animate={{ translateY: ["-5%", "5%"] }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            repeatType: "mirror",
            ease: "easeInOut",
          }}
          className="relative"
        >
          <Image
            src="/confused_me.webp"
            height={150}
            width={150}
            alt="Confused avatar"
            className="select-none drop-shadow-2xl z-10"
            draggable={false}
          />
        </motion.div>
        <Image
          src="/Gradient.webp"
          height={500}
          width={275}
          alt=""
          className="absolute -top-5 -z-10 select-none"
          draggable={false}
        />
        <motion.h1
          variants={itemVariants}
          className="text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-white to-zinc-400 md:text-7xl"
        >
          404
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="text-lg font-semibold text-white"
        >
          Oops! You've ventured off the map.
        </motion.p>

        <motion.p variants={itemVariants} className="max-w-md text-zinc-400">
          The page you're looking for seems to have taken a different path.
          Let's get you back home.
        </motion.p>

        <motion.div variants={itemVariants} className="mt-6">
          <Button
            asChild
            size="lg"
            className="!bg-[#a950e4] cursor-pointer !text-white font-boldtransition-transform hover:scale-105"
          >
            <Link href="/">Go Back Home</Link>
          </Button>
        </motion.div>
      </motion.div>
    </div>
  );
}
