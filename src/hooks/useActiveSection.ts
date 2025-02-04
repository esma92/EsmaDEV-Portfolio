import { useState, useEffect } from 'react';

export function useActiveSection() {
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        // Filtrar solo las secciones que están intersectando
        const visibleSections = entries.filter(entry => entry.isIntersecting);
        
        if (visibleSections.length > 0) {
          // Si hay múltiples secciones visibles, tomar la que tiene mayor ratio de intersección
          const mostVisible = visibleSections.reduce((prev, current) => {
            return prev.intersectionRatio > current.intersectionRatio ? prev : current;
          });
          
          setActiveSection(mostVisible.target.id);
        }
      },
      {
        // Ajustar el rootMargin para mejorar la detección
        rootMargin: '-20% 0px -20% 0px',
        threshold: [0, 0.25, 0.5, 0.75, 1],
      }
    );

    const sections = document.querySelectorAll('section[id]');
    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return activeSection;
}