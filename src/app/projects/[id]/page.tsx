"use client";
import { notFound, useParams } from "next/navigation";
import Image from "next/image";
import { CircleCheck, ExternalLink, Code } from "lucide-react";
import FloatingLaptop from "@/components/ui/floating-laptop";

const projectsData = [
  {
    id: "1",
    title: "AI-Powered Car Quiz",
    imageUrl: "/quizcars.webp",
    overview:
      "This project is a dynamic web application that uses a custom-built AI model. It provides users with real-time car pricing insights based on their answers to a short quiz, demonstrating a powerful integration of front-end interactivity with machine learning.",
    features: [
      "Interactive multi-step quiz interface.",
      "Real-time price prediction from a custom AI model.",
      "Comprehensive dashboard for visualizing quiz results and data.",
      "For Admin access you can check the backend code for cerdentials.",
    ],
    technologies: [
      "Angular.js",
      "Express.js",
      "Node.js",
      "MongoDB",
      "TailwindCSS",
      "AI/ML",
      "Data Visualization",
    ],
    liveDemoUrl: "https://quiz-car-front.vercel.app",
    repositoryUrlFront: "https://github.com/AbdenourWN/quizCarFront",
    repositoryUrlBack: "https://github.com/AbdenourWN/quizCarBack",
    repositoryUrlAI: "https://github.com/AbdenourWN/CarPricePredictModel",
  },
  {
    id: "2",
    title: "Company Portfolio Website (Dundill)",
    imageUrl: "/dundill.webp",
    overview:
      "A complete front-end build for a corporate client. The focus was on creating a highly polished, professional, and responsive website to enhance their online presence and attract new customers, leading to positive feedback on performance and user experience.",
    features: [
      "Fully responsive design for all devices.",
      "Optimized for performance and fast load times.",
      "Clean and modern UI/UX for professional branding.",
    ],
    technologies: ["Next.js", "MaterialUI", "TailwindCSS", "Framer Motion"],
    liveDemoUrl: "https://dundill.tn",
  },
  {
    id: "3",
    title: "Decentralized Crowdfunding Platform",
    imageUrl: "/crowdfunding.webp",
    overview:
      "A proof-of-concept decentralized application (dApp) built on the Ethereum testnet blockchain. This platform allows for transparent and secure crowdfunding campaigns, where all transactions are handled by immutable smart contracts.",
    features: [
      "Interaction with Ethereum smart contracts.",
      "Users can create and contribute to campaigns.",
      "Secure and transparent transaction history on the blockchain.",
    ],
    technologies: [
      "Solidity",
      "Hardhat",
      "ThirdWeb",
      "Next.js",
      "Smart Contracts",
    ],
    liveDemoUrl: "https://crowdfunding-web3-coral.vercel.app",
    repositoryUrlFront: "https://github.com/AbdenourWN/CrowdfundingWeb3Front",
    repositoryUrlBack: "https://github.com/AbdenourWN/CrowdfundingWeb3",
  },
  {
    id: "4",
    title: "E-commerce Clothing Store",
    imageUrl: "/e-commerce.webp",
    overview:
      "A full-stack e-commerce platform designed to provide a seamless online shopping experience. It features a secure payment system, robust product management, and a rich, user-friendly admin dashboard for store management.",
    features: [
      "User authentication and authorization.",
      "Product catalog with search and filtering.",
      "Secure payment gateway integration with Stripe.",
    ],
    technologies: [
      "Next.js",
      "NestJS",
      "MongoDB",
      "TailwindCSS",
      "MaterialUI",
      "RestAPI",
      "Swagger",
      "Admin Dashboard",
    ],
    repositoryUrlFront: "https://github.com/AbdenourWN/e-commerce",
    repositoryUrlBack: "https://github.com/AbdenourWN/E-commerce-Back-Nestjs",
  },
  {
    id: "5",
    title: "Blockchain & Crypto News Blog",
    imageUrl: "/crybitz.webp",
    overview:
      "A content-focused platform built on WordPress, but with a completely custom theme developed from scratch. This project demonstrates the ability to create bespoke, high-performance front-ends within a popular CMS environment.",
    features: [
      "Custom WordPress theme development.",
      "Responsive design optimized for content readability.",
      "Dynamic content fetching and display.",
    ],
    technologies: ["WordPress", "Custom Theming", "SEO", "UI/UX"],
    liveDemoUrl: "https://crybitz.com",
  },
];

export default function ProjectPage() {
  const params = useParams<{ id: string }>();
  const project = projectsData.find((p) => p.id === params.id);

  if (!project) {
    notFound();
  }

  return (
    <div className="container mx-auto pb-28 px-4 text-white sm:text-start text-center">
      <FloatingLaptop imgSrc={project.imageUrl} />
      <h1 className="sm:text-4xl md:text-5xl text-3xl font-bold mb-8">{project.title}</h1>
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="max-w-[1000px] flex flex-col gap-8">
          <div>
            <h2 className="text-2xl font-bold mb-4">Project Overview</h2>
            <p className="text-zinc-400 leading-relaxed">{project.overview}</p>
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-4">Key Features</h2>
            <ul className="space-y-3 flex flex-col items-center sm:items-start">
              {project.features.map((feature, index) => (
                <li key={index} className="flex items-center gap-3">
                  <CircleCheck className="h-5 w-5 text-blue-500 flex-shrink-0" />
                  <span className="text-zinc-300">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="space-y-8">
          <div>
            <h2 className="text-2xl font-bold mb-4">Technologies Used</h2>
            <div className="flex flex-wrap gap-2 justify-center sm:justify-start">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="bg-zinc-800 text-zinc-300 px-3 py-1 rounded-full text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-4">Project Links</h2>
            <div className="space-y-3">
              {project.liveDemoUrl && (
                <a
                  href={project.liveDemoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded-lg transition-colors"
                >
                  <ExternalLink size={18} />
                  Live Demo
                </a>
              )}
              {project.repositoryUrlFront && (
                <a
                  href={project.repositoryUrlFront}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full bg-zinc-800 hover:bg-zinc-700 text-zinc-300 font-semibold py-3 px-4 rounded-lg transition-colors"
                >
                  <Code size={18} />
                  Repository (FrontEnd)
                </a>
              )}
              {project.repositoryUrlBack && (
                <a
                  href={project.repositoryUrlBack}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full bg-zinc-800 hover:bg-zinc-700 text-zinc-300 font-semibold py-3 px-4 rounded-lg transition-colors"
                >
                  <Code size={18} />
                  Repository (Backend)
                </a>
              )}
              {project.repositoryUrlAI && (
                <a
                  href={project.repositoryUrlAI}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full bg-zinc-800 hover:bg-zinc-700 text-zinc-300 font-semibold py-3 px-4 rounded-lg transition-colors"
                >
                  <Code size={18} />
                  Repository (AI)
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
