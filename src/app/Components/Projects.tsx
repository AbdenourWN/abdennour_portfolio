"use client";

import React from "react";
import { motion } from "framer-motion"; // 1. Import motion
import { FollowerPointerCard } from "@/components/ui/following-pointer";
import ProjectCard from "@/components/ui/ProjectCard";
import clsx from "clsx";

const projectsData = [
  {
    id: 1,
    title: "AI-Powered Car Quiz",
    description:
      "A dynamic web app that uses a custom AI model to provide real-time car pricing insights based on user quiz responses.",
    imageUrl: "/quizcars.webp",
    link: "/projects/1",
  },
  {
    id: 2,
    title: "Company Portfolio Website (Dundill)",
    description:
      "The complete front-end for a corporate website, designed for optimal user experience and client acquisition.",
    imageUrl: "/dundill.webp",
    link: "/projects/2",
  },
  {
    id: 3,
    title: "Decentralized Crowdfunding Platform",
    description:
      "A proof-of-concept decentralized application (dApp) that enables transparent and secure crowdfunding campaigns using Ethereum smart contracts written in Solidity.",
    imageUrl: "/crowdfunding.webp",
    link: "/projects/3",
  },
  {
    id: 4,
    title: "E-commerce Clothing Store",
    description:
      "A full-stack e-commerce platform with a rich admin dashboard, built with Next.js and NestJS for robust performance and security.",
    imageUrl: "/e-commerce.webp",
    link: "projects/4",

  },
  {
    id: 5,
    title: "Blockchain & Crypto News Blog",
    description:
      "A dynamic content platform dedicated to the world of cryptocurrency and blockchain, built on WordPress with a custom, responsive theme developed from scratch.",
    imageUrl: "/crybitz.webp",
    link: "/projects/5",
  },
];

const TitleComponent = () => (
  <div className="flex items-center space-x-2">
    <img
      src="/me.webp"
      height="30"
      width="30"
      alt="thumbnail"
      className="rounded-full border-2 border-white aspect-square object-cover"
    />
    <p className="font-black text-base">Recruiter</p>
  </div>
);

// 2. Define animation variants for the container and the items
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, // Each card will appear 0.2s after the previous one
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
    },
  },
};

function Projects() {
  return (
    <div className="container mx-auto py-16 px-4 h-full">
      <h1 className="text-4xl font-bold text-[#5b0097] mb-12 md:text-start text-center">
        Projects
      </h1>
      {/* 3. Wrap the grid in a motion.div to act as the animation container */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        className="relative grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-8 mx-auto"
      >
        {projectsData.map((project, index) => (
          // 4. Wrap each project card in a motion.div to be the animated item
          <motion.div
            key={project.id} // Use a stable key like project.id
            variants={itemVariants}
            className={clsx("md:col-span-2 h-full", {
              "lg:col-start-2": index === 3,
            }, {
              "md:col-start-2 lg:col-start-4": index === 4,
            })}
          >
            <FollowerPointerCard className="h-full max-h-[600px]" title={<TitleComponent />}>
              <ProjectCard
                title={project.title}
                description={project.description}
                imageUrl={project.imageUrl}
                link={project.link}
              />
            </FollowerPointerCard>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

export default Projects;