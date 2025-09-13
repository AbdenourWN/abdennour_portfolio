"use client";

import React from "react";

import { FollowerPointerCard } from "@/components/ui/following-pointer";
import ProjectCard from "@/components/ui/ProjectCard";

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

function Projects() {
  return (
    <div className="container mx-auto py-16 px-4 h-full">
      <h1 className="text-4xl font-bold text-[#5b0097] mb-12 md:text-start text-center">
        Projects
      </h1>
      <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mx-auto">
        {projectsData.map((project, index) => (
          <FollowerPointerCard key={index} title={<TitleComponent />}>
            <ProjectCard
              title={project.title}
              description={project.description}
              imageUrl={project.imageUrl}
              link={project.link}
            />
          </FollowerPointerCard>
        ))}
      </div>
    </div>
  );
}

export default Projects;
