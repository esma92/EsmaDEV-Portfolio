import React from 'react';

interface SkillCardProps {
  icon: React.ElementType;
  title: string;
  skills: string[];
}

export const SkillCard = ({ icon: Icon, title, skills }: SkillCardProps) => (
  <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md h-full">
  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 mb-4">
    <Icon className="h-8 w-8 text-gray-700 dark:text-gray-300 flex-shrink-0" />
    <h3 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white break-words sm:break-normal">
      {title}
    </h3>
  </div>
  <ul className="space-y-2">
    {skills.map((skill, index) => (
      <li key={index} className="text-gray-600 dark:text-gray-400">{skill}</li>
    ))}
  </ul>
  </div>
);