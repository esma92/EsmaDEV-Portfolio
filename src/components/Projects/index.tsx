import { useLanguage } from '../../contexts/LanguageContext';
import { ProjectCard } from './ProjectCard';
import { TranslationProject } from '../../types';

export default function Projects() {
  const { t } = useLanguage();

  const projectImages = [
    "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=800"
  ];

  const projectUrls = [
    { github: "https://github.com", live: "https://example.com" },
    { inDevelopment: true },
    { github: "https://github.com", live: "https://example.com" },
    { inDevelopment: true }
  ];

  const projects = t<TranslationProject[]>('projects.items');

  return (
    <section id="projects" className="relative min-h-[100vh] flex items-center py-16">
      {/* Content */}
      <div className=" relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {t('projects.title')}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            {t('projects.subtitle')}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              image={projectImages[index]}
              technologies={project.technologies}
              githubUrl={projectUrls[index].github}
              liveUrl={projectUrls[index].live}
              inDevelopment={projectUrls[index].inDevelopment}
            />
          ))}
        </div>
      </div>
    </section>
  );
}