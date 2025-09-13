import clsx from "clsx";
import Image from "next/image";

const experiences = [
  {
    id: 1,
    title: "Front-End Development Intern",
    company: "DunDill",
    location: "Sousse, Tunisia",
    imgSrc: "/dundill_logo.webp",
    date: "June 2023 – September 2023",
    description: [
      "Achievement: Developed the entire front end of the company's official website, leading to increased client acquisition and positive feedback on performance and efficiency.",
      "Action: Learned various technologies, including the MERN stack and GraphQL, with a primary focus on mastering Next.js to build a responsive and efficient website.",
      "Result: Enhanced the company's online presence and user engagement.",
    ],
    skills: [
      "React.js",
      "Next.js",
      "MERN Stack",
      "GraphQL",
      "Express.js",
      "TailwindCSS",
      "MaterialUI",
    ],
  },
  {
    id: 2,
    title: "Freelance Web Developer",
    company: "Self-Employed",
    location: "Remote",
    imgSrc: "/ll.webp",
    date: "October 2023 - Present (Project-Based)",
    description: [
      "Delivered custom web solutions for a diverse range of clients on a project-by-project basis, focusing on creating high-quality, responsive user interfaces.",
      "Specialized in front-end development using modern frameworks like React and Next.js, while also handling back-end tasks with Node.js to provide comprehensive solutions.",
      "Continued a professional relationship with DunDill post-internship, contributing to new features and maintenance on a contract basis.",
    ],
    skills: [
      "Freelancing",
      "Client Communication",
      "React",
      "Next.js",
      "Node.js",
      "Angular",
      "Spring Boot",
      "ShadcnUI",
    ],
  },
  {
    id: 3,
    title: "Full-Stack Developer Intern",
    company: "DunDill",
    imgSrc: "/dundill_logo.webp",
    location: "Sousse, Tunisia",
    date: "July 2024 – August 2024",
    description: [
      "Achievement: Delivered a full-stack e-commerce application for a clothing store.",
      "Action: Worked on backend architecture and implemented robust security measures using NestJS while designing a rich and user-friendly admin dashboard with Next.js.",
      "Result: Streamlined business operations and improved product management efficiency.",
    ],
    skills: [
      "Full-Stack",
      "NestJS",
      "Next.js",
      "E-commerce",
      "Security",
      "RestAPI",
    ],
  },
];

const words = ["Achievement:", "Action:", "Result:"];

function Experience() {
  return (
    <div className="container mx-auto py-20 px-4 h-full">
      <h1 className="text-4xl font-bold text-[#5b0097] mb-12 md:text-start text-center">
        Experiences & Interships
      </h1>
      <div className="flex flex-col h-full gap-12">
        {experiences.map((exp) => (
          <div key={exp.id} className="flex h-full sm:gap-12 gap-5">
            <div className="w-0.5 bg-zinc-700 rounded-full" />
            <div className="flex flex-col">
              <div className="flex gap-5">
                <img
                  src={exp.imgSrc}
                  alt=""
                  className={clsx("w-16 h-16 rounded-full object-cover ", {
                    "bg-white p-2": exp.id !== 2,
                  })}
                />
                <div className="flex flex-col">
                  <h3 className="text-xl font-bold text-white">{exp.title}</h3>
                  <p className="text-md text-zinc-400">
                    {exp.company}, {exp.location}
                  </p>
                  <p className="text-sm text-zinc-500 mt-1">{exp.date}</p>
                </div>
              </div>
              <div className="flex flex-col">
                <ul className="mt-4 space-y-2 list-disc list-inside text-zinc-300">
                  {exp.description.map((point, index) => {
                    const targetWord = words.find((word) =>
                      point.startsWith(word)
                    );

                    if (targetWord) {
                      const restOfSentence = point.substring(targetWord.length);
                      return (
                        <li key={index}>
                          <strong className="font-black text-white">
                            {targetWord}
                          </strong>
                          {restOfSentence}
                        </li>
                      );
                    }
                    return <li key={index}>{point}</li>;
                  })}
                </ul>
                <div className="mt-6 flex flex-wrap gap-2">
                  {exp.skills.map((skill, index) => (
                    <span
                      key={index}
                      className="rounded-full bg-indigo-600 px-3 py-1 text-xs font-medium text-primary"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Experience;
