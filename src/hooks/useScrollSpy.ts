import { useState, useEffect } from 'react';

export const useScrollSpy = (sectionIds: string[], offset: number = 100) => {
  const [activeSection, setActiveSection] = useState<string>(sectionIds[0] || '');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        // Find the section that's most visible
        let maxVisibility = 0;
        let mostVisibleSection = '';

        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const visibility = entry.intersectionRatio;
            if (visibility > maxVisibility) {
              maxVisibility = visibility;
              mostVisibleSection = entry.target.id;
            }
          }
        });

        if (mostVisibleSection) {
          setActiveSection(mostVisibleSection);
        }
      },
      {
        threshold: [0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0],
        rootMargin: `-${offset}px 0px -${offset}px 0px`,
      }
    );

    // Observe all sections
    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, [sectionIds, offset]);

  return activeSection;
};