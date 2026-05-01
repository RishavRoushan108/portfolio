"use client";

import Image from "next/image";
import Typewriter from "typewriter-effect";
import { BsArrowRight } from "react-icons/bs";
import Particlebg from "./Particlebg";

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center text-white overflow-hidden flex-col">
      <Particlebg />
      <div className="relative z-10 flex flex-col items-center">
        <Image
          src="/profile.jpg"
          alt="heroimage"
          width={250}
          height={250}
          className="rounded-[20%] border-8 border-[#0c0c48aa]"
        />
        <div className="text-center md:text-left space-y-4">
          <h1 className="text-3xl md:text-5xl font-bold text-gray-600 leading-tight">
            Hi, I'm <span className="text-blue-800">Rishav Roushan</span>
          </h1>

          <h2 className="text-xl md:text-2xl text-blue-600 font-medium">
            <Typewriter
              options={{
                strings: [
                  "Full Stack Developer (React, Node.js, Next.js)",
                  "Building Real-World Projects & Deployments",
                  "Learning Generative AI (LLMs , Function Calling , Rag)",
                  "Docker & AWS Deployment Enthusiast",
                ],
                autoStart: true,
                loop: true,
                delay: 75,
                deleteSpeed: 50,
                wrapperClassName: "pl-2",
              }}
            />
          </h2>

          <p className="text-gray-600 max-w-xl">
            I build full-stack web applications using modern technologies,
            focusing on clean design and real-world problem solving.
          </p>
        </div>
        <div>
          <a href="#projects">
            <button className="mt-6 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-all shadow-md hover:shadow-lg">
              <span>See My Work</span>
              <BsArrowRight className="w-5 h-5 ml-2 inline-block" />
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
