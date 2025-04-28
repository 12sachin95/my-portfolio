import { Code, Lightbulb, Search, Users } from 'lucide-react';

const About = () => {
  const valueProps = [
    {
      icon: <Code className="h-8 w-8 text-blue-500" />,
      title: 'Clean Code',
      description: 'I write maintainable, scalable code following best practices and industry standards.'
    },
    {
      icon: <Search className="h-8 w-8 text-blue-500" />,
      title: 'Problem Solver',
      description: 'I enjoy tackling complex challenges and finding elegant solutions.'
    },
    {
      icon: <Users className="h-8 w-8 text-blue-500" />,
      title: 'Team Player',
      description: 'I collaborate effectively, communicate clearly, and share knowledge with my peers.'
    },
    {
      icon: <Lightbulb className="h-8 w-8 text-blue-500" />,
      title: 'Innovative',
      description: 'I stay current with emerging technologies and bring creative ideas to the table.'
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white">
            About <span className="text-blue-500">Me</span>
          </h2>
          <div className="w-16 h-1 bg-blue-500 mx-auto mb-8"></div>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
            I'm a passionate software developer with 5+ years of experience building web applications.
            I specialize in front-end development using React, TypeScript, and modern CSS frameworks.
            My background in computer science gives me a strong foundation in algorithms and data structures.
          </p>
          <p className="text-lg text-gray-700 dark:text-gray-300">
            When I'm not coding, you can find me hiking in the mountains, reading science fiction,
            or experimenting with new cooking recipes. I believe in continuous learning and constantly
            push myself to explore new technologies and approaches.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {valueProps.map((prop, index) => (
            <div 
              key={index} 
              className="bg-white dark:bg-gray-700 rounded-lg p-8 shadow-md hover:shadow-lg transition-shadow duration-300 text-center"
            >
              <div className="flex justify-center mb-4">
                {prop.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">{prop.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{prop.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;