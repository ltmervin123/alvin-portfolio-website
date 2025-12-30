"use client";

import { motion } from "framer-motion";

export default function Hero() {
  const handleClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    const targetId = href.replace("#", "");
    const element = document.getElementById(targetId);

    if (element) {
      const offset = 80; // Height of the header
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };
  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl w-full grid md:grid-cols-2 gap-12 items-center">
        {/* Left: Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="space-y-6 text-center md:text-left"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight "
          >
            Alvincent Sangco
            <br />
            <span className="text-emerald-600">Full Stack Developer</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-600 leading-relaxed"
          >
            Let&apos;s build your idea into reality. I specialize in creating
            modern, scalable web applications that solve real-world problems.
            From concept to deployment, I bring technical expertise and creative
            problem-solving to every project, ensuring your vision comes to life
            with clean code and exceptional user experiences.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap gap-4 pt-4 justify-center md:justify-start"
          >
            <a
              href="#projects"
              onClick={(e) => handleClick(e, "#projects")}
              className="px-8 py-3 bg-emerald-600 text-white rounded-lg font-medium hover:bg-emerald-700 transition-all hover:scale-105"
            >
              View Projects
            </a>
            <a
              href="/Alvincent Sangco Resume.pdf"
              className="px-8 py-3 bg-white text-gray-900 border-2 border-gray-300 rounded-lg font-medium hover:border-emerald-600 hover:text-emerald-600 transition-all hover:scale-105"
            >
              Download Resume
            </a>
          </motion.div>
        </motion.div>

        {/* Right: Terminal-Style Visual */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="hidden md:block"
        >
          <div className="bg-gray-900 rounded-xl shadow-2xl overflow-hidden border border-gray-800">
            {/* Terminal Header */}
            <div className="bg-gray-800 px-4 py-3 flex items-center gap-2">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <span className="text-gray-400 text-sm ml-4">backend-api.js</span>
            </div>

            {/* Terminal Content */}
            <div className="p-6 font-mono text-sm space-y-2">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.8 }}
                className="text-gray-500"
              >
                <span className="text-purple-400">const</span>{" "}
                <span className="text-blue-400">express</span> ={" "}
                <span className="text-yellow-300">require</span>
                <span className="text-gray-400">(</span>
                <span className="text-green-400">&apos;express&apos;</span>
                <span className="text-gray-400">);</span>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4, delay: 1.0 }}
                className="text-gray-500"
              >
                <span className="text-purple-400">const</span>{" "}
                <span className="text-blue-400">app</span> ={" "}
                <span className="text-yellow-300">express</span>
                <span className="text-gray-400">();</span>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4, delay: 1.2 }}
                className="text-gray-500 pt-2"
              >
                <span className="text-gray-400">{"//"}</span>{" "}
                <span className="text-gray-600">AI-powered API endpoint</span>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4, delay: 1.4 }}
                className="text-gray-500"
              >
                <span className="text-blue-400">app</span>
                <span className="text-gray-400">.</span>
                <span className="text-yellow-300">post</span>
                <span className="text-gray-400">(</span>
                <span className="text-green-400">&apos;/api/analyze&apos;</span>
                <span className="text-gray-400">,</span>{" "}
                <span className="text-purple-400">async</span>{" "}
                <span className="text-gray-400">(</span>
                <span className="text-blue-400">req</span>
                <span className="text-gray-400">,</span>{" "}
                <span className="text-blue-400">res</span>
                <span className="text-gray-400">
                  ) {"=>"} {"{"}
                </span>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4, delay: 1.6 }}
                className="text-gray-500 pl-4"
              >
                <span className="text-purple-400">const</span>{" "}
                <span className="text-blue-400">result</span> ={" "}
                <span className="text-purple-400">await</span>{" "}
                <span className="text-yellow-300">processWithAI</span>
                <span className="text-gray-400">(</span>
                <span className="text-blue-400">req.body</span>
                <span className="text-gray-400">);</span>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4, delay: 1.8 }}
                className="text-gray-500 pl-4"
              >
                <span className="text-blue-400">res</span>
                <span className="text-gray-400">.</span>
                <span className="text-yellow-300">json</span>
                <span className="text-gray-400">(</span>
                <span className="text-blue-400">result</span>
                <span className="text-gray-400">);</span>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4, delay: 2.0 }}
                className="text-gray-500"
              >
                <span className="text-gray-400">{"}"});</span>
              </motion.div>

              {/* Blinking Cursor */}
              <motion.span
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 1.2, repeat: Infinity }}
                className="inline-block w-2 h-4 bg-emerald-500 ml-1"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
