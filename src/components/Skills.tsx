import { useState } from 'react';
import { skillsData } from '../data';

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('frontend');
  
  const categories = [
    { id: 'frontend', label: 'Frontend' },
    { id: 'backend', label: 'Backend' },
    { id: 'tools', label: 'Tools & Others' }
  ];

  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white">
            My <span className="text-blue-500">Skills</span>
          </h2>
          <div className="w-16 h-1 bg-blue-500 mx-auto mb-8"></div>
          <p className="text-lg text-gray-700 dark:text-gray-300">
            Here are the technologies and tools I use to bring ideas to life.
            I'm constantly learning and expanding my skillset to stay current with industry trends.
          </p>
        </div>

        <div className="flex justify-center mb-10">
          <div className="inline-flex p-1 bg-gray-100 dark:bg-gray-800 rounded-lg">
            {categories.map(category => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-4 py-2 text-sm md:text-base font-medium rounded-md transition-all duration-200 ${
                  activeCategory === category.id
                    ? 'bg-blue-500 text-white shadow-md'
                    : 'text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
          {skillsData[activeCategory].map((skill, index) => (
            <div 
              key={index}
              className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 text-center transform hover:scale-105 transition-transform duration-300"
            >
              <div className="flex justify-center items-center h-16 mb-4">
                {skill.icon}
              </div>
              <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                {skill.name}
              </h3>
              <div className="mt-3 w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                <div 
                  className="bg-blue-500 h-2.5 rounded-full" 
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;