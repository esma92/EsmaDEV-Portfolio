import { Code2, Users, Languages, /*Database, Cloud,*/ Wrench } from 'lucide-react';

export const getSkillsets = (t: (key: string) => string) => [
  {
    icon: Code2,
    title: t('skills.frontend'),
    skills: [
      'JavaScript/TypeScript',
      'HTML/CSS',
      'React',
      'Angular',
      'Node.js/Node-RED'
    ]
  },
  {
    icon: Users,
    title: t('skills.softSkills'),
    skills: [
      t('skills.analyticalThinking'),
      t('skills.teamwork'),
      t('skills.cognitiveFlex'),
      t('skills.receptiveToChanges')
    ]
  },
  {
    icon: Languages,
    title: t('skills.languages'),
    skills: [
      t('skills.spanish'),
      t('skills.english')
    ]
  },
  // {
  //   icon: Database,
  //   title: t('skills.backend'),
  //   skills: ['Node.js', 'Python', 'PostgreSQL', 'RESTful APIs']
  // },
  // {
  //   icon: Cloud,
  //   title: t('skills.cloud'),
  //   skills: ['AWS', 'Docker', 'CI/CD', 'Microservices']
  // },
  {
    icon: Wrench,
    title: t('skills.tools'),
    skills: ['Git', 'VS Code', 'PostgreSQL']
  }
];