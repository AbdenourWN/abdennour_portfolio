import Image from "next/image";

function AboutMe() {
  return (
    <div className="relative py-24 px-3 container mx-auto flex max-md:flex-col items-center justify-center gap-10">
      <Image
        src="/Gradient.webp"
        height={500}
        width={385}
        alt=""
        className="absolute select-none -z-50 right-[10%] top-0"
        draggable={false}
      />
      <Image
        src="/me.webp"
        alt="logo image"
        height={400}
        width={300}
        className="select-none rounded-full aspect-square object-cover border-[12px] border-[#5b0097] drop-shadow-[#5b0097] drop-shadow-2xl"
        draggable={false}
      />
      <div className="flex flex-col gap-6 md:w-1/2 md:text-start text-center z-10">
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
      </div>
    </div>
  );
}

export default AboutMe;
