import { Github, Linkedin, Mail, Twitter } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: <Github className="h-5 w-5" />,
      url: "https://github.com/mr-sachin-rathore",
    },
    {
      icon: <Linkedin className="h-5 w-5" />,
      url: "https://in.linkedin.com/in/sachin-rathore-642400113",
    },
    {
      icon: <Mail className="h-5 w-5" />,
      url: "mailto:12sachin95@gmail.com",
    },
  ];

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <a href="#home" className="text-2xl font-bold">
              <span className="text-blue-500">Portfolio</span>
              <span className="text-white">.</span>
            </a>
            <p className="mt-2 text-gray-400">
              Crafting digital experiences with code.
            </p>
          </div>

          <div className="flex space-x-4">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-gray-400 hover:text-blue-500 transition-colors duration-300"
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            &copy; {currentYear} Sachin Rathore. All rights reserved.
          </p>

          <div className="mt-4 md:mt-0">
            <nav className="flex space-x-6">
              <a
                href="#home"
                className="text-sm text-gray-400 hover:text-blue-500 transition-colors duration-300"
              >
                Home
              </a>
              <a
                href="#about"
                className="text-sm text-gray-400 hover:text-blue-500 transition-colors duration-300"
              >
                About
              </a>
              <a
                href="#skills"
                className="text-sm text-gray-400 hover:text-blue-500 transition-colors duration-300"
              >
                Skills
              </a>
              <a
                href="#projects"
                className="text-sm text-gray-400 hover:text-blue-500 transition-colors duration-300"
              >
                Projects
              </a>
              <a
                href="#contact"
                className="text-sm text-gray-400 hover:text-blue-500 transition-colors duration-300"
              >
                Contact
              </a>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
