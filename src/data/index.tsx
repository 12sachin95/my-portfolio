import {
  Code2,
  Database,
  Server,
  FileCode,
  Cpu,
  Palette,
  Figma,
  Terminal,
} from "lucide-react";

export const skillsData = {
  frontend: [
    {
      name: "Javascript",
      level: 65,
      icon: <Code2 className="h-8 w-8 text-blue-500" />,
    },
    {
      name: "React",
      level: 95,
      icon: <Code2 className="h-8 w-8 text-blue-500" />,
    },
    {
      name: "TypeScript",
      level: 90,
      icon: <FileCode className="h-8 w-8 text-blue-500" />,
    },
    {
      name: "HTML/CSS",
      level: 95,
      icon: <Code2 className="h-8 w-8 text-blue-500" />,
    },
    {
      name: "Tailwind CSS",
      level: 85,
      icon: <Palette className="h-8 w-8 text-blue-500" />,
    },
    {
      name: "Redux",
      level: 80,
      icon: <Cpu className="h-8 w-8 text-blue-500" />,
    },
    {
      name: "Next.js",
      level: 85,
      icon: <Server className="h-8 w-8 text-blue-500" />,
    },
    {
      name: "Zustand",
      level: 70,
      icon: <Code2 className="h-8 w-8 text-blue-500" />,
    },
  ],
  backend: [
    {
      name: "Node.js",
      level: 85,
      icon: <Server className="h-8 w-8 text-blue-500" />,
    },
    {
      name: "Express",
      level: 80,
      icon: <Server className="h-8 w-8 text-blue-500" />,
    },
    {
      name: "MongoDB",
      level: 75,
      icon: <Database className="h-8 w-8 text-blue-500" />,
    },
    {
      name: "PostgreSQL",
      level: 70,
      icon: <Database className="h-8 w-8 text-blue-500" />,
    },
    {
      name: "RESTful APIs",
      level: 90,
      icon: <Server className="h-8 w-8 text-blue-500" />,
    },
    {
      name: "GraphQL",
      level: 75,
      icon: <Server className="h-8 w-8 text-blue-500" />,
    },
    {
      name: "Docker",
      level: 65,
      icon: <Cpu className="h-8 w-8 text-blue-500" />,
    },
    {
      name: "AWS",
      level: 60,
      icon: <Server className="h-8 w-8 text-blue-500" />,
    },
  ],
  tools: [
    {
      name: "Git",
      level: 90,
      icon: <Terminal className="h-8 w-8 text-blue-500" />,
    },
    {
      name: "Jest",
      level: 80,
      icon: <Terminal className="h-8 w-8 text-blue-500" />,
    },
    {
      name: "Webpack/Vite",
      level: 75,
      icon: <Cpu className="h-8 w-8 text-blue-500" />,
    },
    {
      name: "Figma",
      level: 85,
      icon: <Figma className="h-8 w-8 text-blue-500" />,
    },
    {
      name: "CI/CD",
      level: 70,
      icon: <Terminal className="h-8 w-8 text-blue-500" />,
    },
    {
      name: "Agile/Scrum",
      level: 85,
      icon: <Terminal className="h-8 w-8 text-blue-500" />,
    },
    {
      name: "VS Code",
      level: 95,
      icon: <FileCode className="h-8 w-8 text-blue-500" />,
    },
    {
      name: "Postman",
      level: 70,
      icon: <Palette className="h-8 w-8 text-blue-500" />,
    },
  ],
};

export const projectsData = [
  {
    title: "Eshop app",
    description:
      "A comprehensive Eshop App for managing online store products, orders, and customer data with real-time analytics.",
    image:
      "https://images.pexels.com/photos/8347499/pexels-photo-8347499.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    technologies: [
      "Nextjs",
      "TypeScript",
      "Node.js",
      "MongoDB",
      "Tailwind CSS",
      "WebSocket",
    ],
    category: "web",
    github: "https://github.com/12sachin95/eshop-app",
  },
  {
    title: "Expense Tracker",
    description:
      "A mobile(PWA) and web application for tracking expenses, we can explore expenses using charts.",
    image:
      "https://images.pexels.com/photos/20500268/pexels-photo-20500268/free-photo-of-calculator.jpeg",
    technologies: ["React js", "Graphql", "expressjs", "MongoDB", "chart.js"],
    category: "mobile",
    github: "https://github.com/12sachin95/expense-tracker/",
  },
  {
    title: "TODO CLI App",
    description:
      "TODO CLI app build using Go, gin and Reactjs with JWT authentication.",
    image:
      "https://images.pexels.com/photos/6956183/pexels-photo-6956183.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    technologies: ["GO", "Gin", "JWT", "React", "MongoDB"],
    category: "web",
    github: "https://github.com/12sachin95/go-todo-cli-app/",
  },
  {
    title: "Movie app",
    description:
      "A Movie app to view movies, add movies, update movies, delete movies. This is only for learning purpose",
    image:
      "https://plus.unsplash.com/premium_photo-1709384733835-1628e7ea2aa3?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bW92aWUlMjBhcHBzfGVufDB8fDB8fHww",
    technologies: ["React js", "expressjs", "MongoDB"],
    category: "web",
    github: "https://github.com/12sachin95/movie-app",
  },
];
