'use client';

import React from 'react';

interface ExperienceItem {
  title: string;
  company: string;
  period: string;
  achievements: string[];
}

const Experience = () => {
  const experiences: ExperienceItem[] = [
    {
      title: 'Senior Product Manager',
      company: 'Company Name',
      period: '2021 - Present',
      achievements: [
        'Led the development and launch of [specific product], resulting in 40% revenue growth',
        'Managed a $X million product budget and coordinated with teams across 3 continents',
        'Implemented new user research methodologies that improved product-market fit by 25%',
      ],
    },
    // Add more experiences here
  ];

  return (
    <section className="py-20 bg-white" id="experience">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Work Experience</h2>
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div 
              key={index}
              className="bg-gray-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <h3 className="text-2xl font-semibold text-blue-600">{exp.title}</h3>
              <p className="text-lg font-medium text-gray-700 mt-2">{exp.company}</p>
              <p className="text-gray-500 mt-1">{exp.period}</p>
              <ul className="mt-4 space-y-2">
                {exp.achievements.map((achievement, i) => (
                  <li key={i} className="flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    <span className="text-gray-700">{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience; 