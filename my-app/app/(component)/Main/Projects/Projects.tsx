"use client";

import Image from "next/image";
import projects from "@/app/(constants)/projectlist";
import { useState } from "react";
import Link from "next/link";
import { FaDocker } from "react-icons/fa";
import { SiOpenai } from "react-icons/si";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<any>(null);
  return (
    <div className="py-16">
      <h1 className="text-center text-2xl md:text-4xl xl:text-5xl font-bold text-white">
        A small collection of recent <br />{" "}
        <span className="text-cyan-300">Projects</span>
      </h1>
      <div className="w-[60%] mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 mt-16">
        {projects.map((item) => (
          <div
            key={item.id}
            onClick={() => setSelectedProject(item)}
            className="group cursor-pointer max-w-175"
          >
            <img
              src={item.image}
              alt={item.title}
              className="rounded-lg w-full h-auto transition-transform duration-300 group-hover:scale-105"
            />

            <h2 className="mt-4 text-xl sm:text-2xl font-semibold text-white">
              {item.title}
            </h2>

            <p className="pt-2 text-white/70 text-sm sm:text-base">
              {item.shortDescription}
            </p>

            <div className="flex flex-wrap gap-2 mt-3">
              {item.techStack.slice(0, 3).map((tech, index) => (
                <span
                  key={index}
                  className="text-xs bg-white/10 px-2 py-1 rounded-md text-white/80"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
      {selectedProject && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
          <div className="bg-[#111] max-w-2xl w-full p-6 rounded-lg relative">
            {/* Close Button */}
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 text-white text-xl"
            >
              ✕
            </button>

            {/* Content */}
            <img
              src={selectedProject.image}
              alt={selectedProject.title}
              className="rounded-lg mb-4"
            />

            <h2 className="text-2xl font-semibold text-white">
              {selectedProject.title}
            </h2>

            <p className="text-white/70 mt-2">{selectedProject.description}</p>

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-2 mt-4">
              {selectedProject.techStack.map((tech: string, i: number) => (
                <span
                  key={i}
                  className="bg-white/10 px-2 py-1 rounded text-sm text-white/80"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Buttons */}
            <div className="flex gap-4 mt-6">
              <a
                href={selectedProject.liveFrontend}
                target="_blank"
                className="bg-blue-600 px-4 py-2 rounded text-white"
              >
                Live
              </a>

              <a
                href={selectedProject.github}
                target="_blank"
                className="border border-white px-4 py-2 rounded text-white"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>
      )}
      <h1 className="text-center mt-10 text-2xl md:text-4xl xl:text-5xl font-bold text-white">
        Concepts & Practical <span className="text-cyan-300">Explorations</span>
      </h1>
      <div className="w-[60%] mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 mt-16">
        <div className="bg-gray-900 rounded-2xl p-6 shadow-lg hover:scale-105 transition duration-300 text-center">
          <FaDocker className="text-5xl text-cyan-400 mx-auto mb-4" />
          <h2 className="text-xl font-semibold text-white mb-2">
            Docker Notes
          </h2>
          <p className="text-gray-400 mb-4">
            My personal notes and hands-on learning about containerization.
          </p>
          <Link
            href="https://github.com/RishavRoushan108/Docker"
            className="bg-cyan-400 text-black px-4 py-2 rounded-lg hover:bg-cyan-300 transition"
          >
            View Notes
          </Link>
        </div>
        <div className="bg-gray-900 rounded-2xl p-6 shadow-lg hover:scale-105 transition duration-300 text-center">
          <SiOpenai className="text-5xl text-cyan-400 mx-auto mb-4" />
          <h2 className="text-xl font-semibold text-white mb-2">GenAI Notes</h2>
          <p className="text-gray-400 mb-4">
            Notes on LLMs, function calling, and generative AI concepts.
          </p>
          <Link
            href="https://github.com/RishavRoushan108/generative-ai-fundamentals"
            className="bg-cyan-400 text-black px-4 py-2 rounded-lg hover:bg-cyan-300 transition"
          >
            View Notes
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Projects;
