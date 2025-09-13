"use client"
import Image from "next/image";
import { motion } from "framer-motion";

const skillsData = [
  {
    category: "Languages",
    color: "blue",
    skills: [
      "JavaScript",
      "TypeScript",
      "Python",
      "C/C++",
      "Java",
      "PHP",
      "Solidity",
    ],
  },
  {
    category: "Frameworks",
    color: "green",
    skills: [
      "ReactJS",
      "Next.js",
      "Angular",
      "React Native",
      "ExpressJS",
      "Flask",
      "Django",
      "Spring Boot",
      "Symfony",
      "NestJs",
    ],
  },
  {
    category: "Backend",
    color: "purple",
    skills: [
      "Node.js",
      "REST APIs",
      "Microservices",
      "Smart Contracts",
      "GraphQL",
    ],
  },
  {
    category: "Databases",
    color: "red",
    skills: ["Postgres", "SQL", "MongoDB"],
  },
  {
    category: "Practices",
    color: "yellow",
    skills: ["Microservices", "Microfrontend", "Agile", "Git"],
  },
];

const colorClassMap = {
  blue: "bg-blue-950 text-blue-300 border border-blue-700",
  green: "bg-green-950 text-green-300 border border-green-700",
  purple: "bg-purple-950 text-purple-300 border border-purple-700",
  red: "bg-red-950 text-red-300 border border-red-700",
  yellow: "bg-yellow-950 text-yellow-300 border border-yellow-700",
};

const fadeIn = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 1, delay: 0.2 } },
};

// 2. A container variant for staggering the skills
const skillsContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1, 
    },
  },
};

// 3. A variant for each individual skill tag
const skillItem = {
  initial: { opacity: 0, x: -20 },
  animate: { opacity: 1, x: 0 },
};

function AboutMe() {
  return (
    <div className="relative py-24 px-3 container mx-auto flex max-md:flex-col items-start justify-center gap-10 w-full">
      <Image
        src="/Gradient.webp"
        height={500}
        width={385}
        alt=""
        className="absolute select-none -z-50 md:right-0 right-[10%] bottom-0"
        draggable={false}
      />
      <div className="flex flex-col justify-center items-center gap-12">
        <motion.div
          animate={{ translateY: ["-3%", "3%"] }}
          transition={{
            duration: 3,
            repeat: Infinity,
            repeatType: "mirror",
            ease: "easeInOut",
          }}
        >
          <Image
            src="/me.webp"
            alt="logo image"
            height={400}
            width={300}
            className="select-none rounded-full aspect-square object-cover border-[12px] border-[#5b0097] drop-shadow-[#5b0097] drop-shadow-2xl"
            draggable={false}
          />
        </motion.div>
        <motion.div
          className="flex flex-col gap-6 text-center z-10 max-w-5xl"
          initial="initial"
          whileInView="animate"
          viewport={{ once: false }}
          variants={fadeIn}
        >
          <h1 className="text-4xl font-bold text-[#5b0097]">About Me</h1>
          <p className="z-10 lg:text-base text-sm">
            As a full-stack developer, I build high-quality, user-centric web
            applications by architecting robust back-end systems and creating
            intuitive, pixel-perfect front-end experiences. My process is rooted
            in a deep appreciation for both the technical details and the
            end-user's needs. I thrive in collaborative environments where the
            shared goal is to create something truly impactful. When I'm not at
            the keyboard, I'm recharging in nature or giving back to the
            open-source projects that power our industry.
          </p>
        </motion.div>
      </div>
      <div className="flex flex-col gap-6 md:text-start text-center z-10">
        <h1 className="text-4xl font-bold text-[#5b0097]">Skills</h1>
        <div className="flex flex-col gap-8">
          {skillsData.map((categoryItem) => (
            <div key={categoryItem.category} className="flex flex-col gap-4">
              <h2 className="text-2xl font-bold text-white">
                {categoryItem.category}
              </h2>
              <motion.div
                initial="initial"
                whileInView="animate"
                viewport={{ once: false, amount: 0.2 }}
                variants={skillsContainer}
                className="flex flex-wrap gap-2 max-md:justify-center"
              >
                {categoryItem.skills.map((skill) => (
                  <motion.span
                    key={skill}
                    variants={skillItem}
                    className={`rounded-full px-4 py-1 text-sm font-medium ${
                      colorClassMap[
                        categoryItem.color as keyof typeof colorClassMap
                      ]
                    }`}
                  >
                    {skill}
                  </motion.span>
                ))}
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
