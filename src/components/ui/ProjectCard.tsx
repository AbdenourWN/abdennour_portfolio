import Link from "next/link";
import { Button } from "./button";

interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl: string;
  link: string;
}

export default function ProjectCard({
  title,
  description,
  imageUrl,
  link,
}: ProjectCardProps) {
  return (
    <div className="group relative h-full max-h-[600px] overflow-hidden  rounded-xl transition duration-300 bg-zinc-800 border border-zinc-800 border-opacity-50 shadow-2xl shadow-purple-950 scale-95 hover:scale-105 ">
      <img src={imageUrl} alt={title} className="w-full h-52 object-cover" />
      <div className="p-6 flex flex-col h-full">
        <h2 className="text-xl font-semibold mb-2 text-white">{title}</h2>
        <p className="text-zinc-400">{description}</p>
        <Button asChild>
          <Link
            href={link}
            rel="noopener noreferrer"
            className="mt-4 hover:underline cursor-none !bg-[#a950e4] !text-white !font-bold transition-transform hover:scale-110 w-fit"
          >
            Learn More
          </Link>
        </Button>
      </div>
    </div>
  );
}
