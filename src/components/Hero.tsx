import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { useEffect, useState } from "react";
import ProfileImg from "../assets/profile_image.png";
const Hero = () => {
  const [displayText, setDisplayText] = useState("");
  const fullText = "Sooftware Developer";
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index < fullText.length) {
        setDisplayText((prev) => prev + fullText.charAt(index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 200);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);

    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-white dark:from-gray-900 dark:to-gray-800 -z-10"></div>

      {/* Animated shapes */}
      <div className="absolute -z-5 inset-0 overflow-hidden">
        <div className="animate-float absolute top-1/4 left-1/4 w-64 h-64 bg-blue-300 dark:bg-blue-700 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-3xl opacity-20"></div>
        <div className="animate-float-delayed absolute bottom-1/4 right-1/4 w-64 h-64 bg-teal-300 dark:bg-teal-700 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-3xl opacity-20"></div>
      </div>

      <div className="container mx-auto px-4 flex flex-col items-center text-center z-10">
        <div className="mb-6 relative overflow-hidden rounded-full border-4 border-blue-500 p-1 shadow-xl">
          <img
            src={ProfileImg}
            alt="Profile"
            className="w-48 h-48 rounded-full object-cover"
          />
        </div>

        <h1 className="text-4xl md:text-6xl font-bold mb-4 tracking-tight">
          <span className="text-blue-500">Hello, I'm</span>{" "}
          <span className="dark:text-white">Sachin Rathore</span>
        </h1>

        <div className="h-8 mb-6">
          <h2 className="text-xl md:text-2xl font-medium text-gray-700 dark:text-gray-300">
            {displayText}
            <span
              className={`${
                showCursor ? "opacity-100" : "opacity-0"
              } transition-opacity duration-100 text-blue-500`}
            >
              |
            </span>
          </h2>
        </div>

        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mb-8">
          I craft elegant solutions to complex problems with clean, maintainable
          code. Passionate about creating meaningful user experiences.
        </p>

        <div className="flex space-x-4 mb-12">
          <a
            href="https://github.com/12sachin95"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 text-gray-700 hover:text-blue-500 dark:text-gray-300 dark:hover:text-blue-400 transition-colors duration-300"
          >
            <Github className="h-6 w-6" />
          </a>
          <a
            href="https://in.linkedin.com/in/sachin-rathore-642400113"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 text-gray-700 hover:text-blue-500 dark:text-gray-300 dark:hover:text-blue-400 transition-colors duration-300"
          >
            <Linkedin className="h-6 w-6" />
          </a>
          <a
            href="mailto:12sachin95@gmail.com"
            className="p-3 text-gray-700 hover:text-blue-500 dark:text-gray-300 dark:hover:text-blue-400 transition-colors duration-300"
          >
            <Mail className="h-6 w-6" />
          </a>
        </div>

        <a
          href="#about"
          className="animate-bounce p-2 rounded-full bg-blue-500 text-white hover:bg-blue-600 transition-colors duration-300"
        >
          <ArrowDown className="h-6 w-6" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
