// app/about/page.tsx
"use client"; // Animations require this to be a client component

import Image from "next/image";
import { Check } from "lucide-react";
import { motion } from "framer-motion"; // 1. Import motion
import { FaLocationDot } from "react-icons/fa6";

// --- Data (unchanged) ---
const personalInfo = {
  name: "Abdennour Boukhris",
  title: "Full Stack Developer",
  location: "Sousse, Tunisia",
  imageUrl: "/me.webp",
};

const bioData = [
  {
    title: "Biography",
    content:
      "As a full-stack developer, I build high-quality, user-centric web applications by architecting robust back-end systems and creating intuitive, pixel-perfect front-end experiences. My process is rooted in a deep appreciation for both the technical details and the end-user's needs.",
  },
  {
    title: "Interests",
    content:
      "I believe in a balanced approach to life and work. Outside of coding, you can find me recharging in nature, staying active with football and basketball, or diving into a competitive gaming session. This blend of focus and fun helps me stay creative, energized, and ready for any challenge.",
  },
  {
    title: "Values",
    content:
      "I value collaboration, continuous learning, and delivering high-quality work. I believe in clear communication and working closely with teams to achieve shared goals. My aim is to build solutions that are not only functional but also user-friendly and aesthetically pleasing.",
  },
];

const personalSkillsData = {
  languages: [
    { skill: "Arabic", level: "Native" },
    { skill: "English", level: "Fluent" },
    { skill: "French", level: "Conversational" },
  ],
  softSkills: [
    "Attention to Detail",
    "Problem Solving",
    "Adaptability",
    "Continuous Learning",
  ],
};

const skillsData = [
  {
    category: "Frontend",
    color: "text-blue-400",
    items: [
      "React",
      "Next.js",
      "JavaScript (ES6+)",
      "TypeScript",
      "Tailwind CSS",
      "Angular",
    ],
  },
  {
    category: "Backend",
    color: "text-green-400",
    items: [
      "Node.js",
      "Express",
      "NestJS",
      "GraphQL",
      "Spring Boot",
      "Flask",
      "Django",
    ],
  },
  {
    category: "DevOps & Tools",
    color: "text-purple-400",
    items: ["Git & GitHub", "Docker", "VS Code", "Figma"],
  },
  {
    category: "Databases",
    color: "text-pink-400",
    items: ["MongoDB", "PostgreSQL", "SQL"],
  },
];

// 2. Define animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, // Each card will animate 0.2s after the one before
    },
  },
} as const;

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeInOut",
    },
  },
} as const;

const headerVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
} as const;

function About() {
  return (
    <div className="container mx-auto py-32 px-4 h-full text-white sm:text-start text-center">
      <div className="max-w-6xl mx-auto flex flex-col items-center gap-12">
        {/* Main Header */}
        <motion.div
          variants={headerVariants}
          initial="hidden"
          animate="visible"
          className="text-center"
        >
          <h1 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">
            A Little Bit About Me
          </h1>
          <p className="mt-2 text-lg text-zinc-400">
            Developer, Creator, and Lifelong Learner
          </p>
        </motion.div>

        {/* --- Cards Section --- */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="w-full flex flex-col gap-8"
        >
          {/* Profile Card */}
          <motion.div variants={cardVariants}>
            <div className="bg-[#2e193b] p-8 rounded-xl border border-zinc-800 flex sm:flex-row flex-col items-center gap-8 w-full">
              <Image
                src={personalInfo.imageUrl}
                alt={personalInfo.name}
                width={128}
                height={128}
                className="rounded-full object-cover aspect-square border-4 border-zinc-700"
              />
              <div>
                <h2 className="text-3xl font-bold text-white">
                  {personalInfo.name}
                </h2>
                <p className="text-lg text-purple-400 font-semibold">
                  {personalInfo.title}
                </p>
                <p className=" flex items-center gap-2 text-md text-zinc-400 mt-1 sm:justify-start justify-center">
                  <FaLocationDot />
                  {personalInfo.location}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Biography Card */}
          <motion.div variants={cardVariants}>
            <div className="bg-[#2e193b] p-8 rounded-xl border border-zinc-800 space-y-6">
              {bioData.map((section) => (
                <div key={section.title}>
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {section.title}
                  </h3>
                  <p className="text-zinc-300 leading-relaxed">
                    {section.content}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Skills Card */}
          <motion.div variants={cardVariants}>
            <div className="bg-[#2e193b] p-8 rounded-xl border border-zinc-800">
              <h2 className="text-3xl font-bold text-center mb-8 text-white">
                My Skills
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {skillsData.map((category) => (
                  <div key={category.category}>
                    <h3 className={`text-xl font-bold mb-4 ${category.color}`}>
                      {category.category}
                    </h3>
                    <ul className="space-y-2 flex flex-col">
                      {category.items.map((skill) => (
                        <li
                          key={skill}
                          className="flex items-center gap-2 sm:mx-0 mx-auto"
                        >
                          <Check size={16} className="text-green-500" />
                          <span className="text-zinc-300">{skill}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Languages & Soft Skills Card */}
          <motion.div variants={cardVariants}>
            <div className="bg-[#2e193b] p-8 rounded-xl border border-zinc-800">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {/* Languages Column */}
                <div>
                  <h3 className="text-xl font-bold mb-4 text-orange-400">
                    Languages
                  </h3>
                  <ul className="space-y-2 flex flex-col">
                    {personalSkillsData.languages.map((lang) => (
                      <li
                        key={lang.skill}
                        className="flex items-center gap-2 sm:mx-0 mx-auto"
                      >
                        <Check size={16} className="text-green-500" />
                        <span className="text-zinc-300">
                          {lang.skill} - {lang.level}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
                {/* Soft Skills Column */}
                <div>
                  <h3 className="text-xl font-bold mb-4 text-cyan-400">
                    Soft Skills
                  </h3>
                  <ul className="space-y-2 flex flex-col">
                    {personalSkillsData.softSkills.map((skill) => (
                      <li
                        key={skill}
                        className="flex items-center gap-2 sm:mx-0 mx-auto"
                      >
                        <Check size={16} className="text-green-500" />
                        <span className="text-zinc-300">{skill}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

export default About;
