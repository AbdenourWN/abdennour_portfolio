"use client"
import { AnimatedArrow } from "@/components/ui/animated-arrow";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import { Button } from "@/components/ui/button";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";
import Image from "next/image";
import { useRef, useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

function Hero() {
    const containerRef = useRef(null);
      const nameRef = useRef(null);
      const imageRef = useRef(null);
      const [waveKey, setWaveKey] = useState(0);
      return (
        <BackgroundBeamsWithCollision>
          <div
            ref={containerRef}
            className="relative flex flex-col text-center items-center justify-center gap-10 pt-48 pb-20 px-3"
          >
            <AnimatedArrow
              startRef={nameRef}
              endRef={imageRef}
              containerRef={containerRef}
            />
            <div
              onMouseEnter={() => setWaveKey((prev) => prev + 1)}
              className="relative w-full flex flex-col justify-center items-center group"
            >
              <div  className="absolute top-[-18%] left-[15%] z-20 flex items-center gap-2">
                <h2 ref={nameRef} className="text-xl font-bold transition-transform group-hover:-translate-y-1">
                  The Developer
                </h2>
                <img
                src="/hello.webp"
                  key={waveKey}
                  className="text-xl text-yellow-500 origin-bottom animate-wave w-6 aspect-auto h-6"
                />
                <p className="absolute top-1/2 left-1/2 -translate-x-1/2 w-max mt-2 text-base font-black text-zinc-400 opacity-0 group-hover:opacity-100 transition-opacity">
                  That's Me!
                </p>
              </div>
              <Image
                src="/me_animated.webp"
                height={175}
                width={175}
                alt=""
                className="z-40 relative select-none"
                draggable={false}
                ref={imageRef}
              />
              <Image
                src="/Gradient.webp"
                height={500}
                width={385}
                alt=""
                className="absolute -top-28 select-none"
                draggable={false}
              />
            </div>
            <h1 className="text-5xl font-bold z-10 max-w-[800px] flex items-center flex-wrap justify-center">
              Hi, I'm Abdennour, a&nbsp;
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500">
                <TypewriterEffectSmooth
                  words={[
                    {
                      text: "Full",
                    },
                    {
                      text: "Stack",
                    },
                  ]}
                  cursorClassName="bg-violet-500"
                />
              </span>
              &nbsp;Developer
            </h1>
            <p className="z-10 max-w-[750px] text-zinc-400">
              A meticulous developer with a genuine passion for the craft of coding.
              I thrive on transforming complex problems into elegant, high-quality
              digital experiences, paying close attention to every detail along the
              way.
            </p>
            <div className="flex flex-col items-center justify-center gap-3">
              <div className="flex gap-5 justify-center items-center">
                <FaLocationDot />
                <p className="z-10 max-w-[750px] text-zinc-400">Sousse, Tunisia</p>
              </div>
              <div className="flex items-center gap-4 z-10">
                <a
                  href="https://github.com/AbdenourWN"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-zinc-800 rounded-full hover:bg-zinc-700 transition-colors"
                  aria-label="GitHub Profile"
                >
                  <FaGithub size={24} />
                </a>
                <a
                  href="https://www.linkedin.com/in/abdenourboukhris"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-zinc-800 rounded-full hover:bg-zinc-700 transition-colors"
                  aria-label="LinkedIn Profile"
                >
                  <FaLinkedin size={24} />
                </a>
                <Button
                  asChild
                  className="bg-secondary text-primary-foreground hover:bg-primary/90 rounded-full px-6 py-2 font-bold transition-transform hover:scale-105"
                >
                  <a
                    href="/Boukhris Abdennour.pdf"
                    download="Abdennour Boukhris - Resume.pdf"
                  >
                    Download Resume
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </BackgroundBeamsWithCollision>
      );
}

export default Hero;