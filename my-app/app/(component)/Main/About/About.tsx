const About = () => {
  return (
    <section className="w-full py-16 px-6 md:px-16 bg-linear-to-b from-[#0d0d1f]  via-[#14142b] to-[#0d0d1f] text-white">
      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-5xl font-bold">
          About <span className="text-blue-500">Me</span>
        </h2>
        <div className="w-20 h-1 bg-blue-500 mx-auto mt-4 rounded-full"></div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto bg-white/5 backdrop-blur-md p-6 md:p-10 rounded-2xl shadow-lg border border-white/10">
        <p className="text-gray-300 text-base md:text-lg leading-relaxed mb-6">
          Hi, I'm{" "}
          <span className="text-white font-semibold">Rishav Roushan</span>, a
          Full-Stack Developer who enjoys building real-world web applications
          from frontend to backend. I work with technologies like React,
          Node.js, and Next.js to create user-friendly interfaces and reliable
          backend systems, focusing on features like authentication, APIs, and
          data handling.
        </p>

        <p className="text-gray-400 text-base md:text-lg leading-relaxed">
          I also explore{" "}
          <span className="text-blue-400 font-medium">
            Generative AI Projects (LLMs, RAG)
          </span>{" "}
          and{" "}
          <span className="text-blue-400 font-medium">
            deployment workflows
          </span>
          . I have built projects using LLMs, including a RAG-based application
          with vector embeddings. I’ve worked with Docker, GitHub Actions, and
          deployed applications on AWS, focusing on understanding real-world
          development and deployment practices.
        </p>
      </div>
    </section>
  );
};

export default About;
