
import React from 'react';
import type { Section } from '../types';

interface NavigationProps {
  sections: Section[];
}

const Navigation: React.FC<NavigationProps> = ({ sections }) => {
    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            const yOffset = -80; // offset for the sticky header
            const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
            window.scrollTo({ top: y, behavior: 'smooth' });
        }
    };

  return (
    <nav className="bg-white rounded-xl shadow-md p-4">
      <h3 className="text-lg font-semibold text-slate-900 mb-4 px-2">Navegación</h3>
      <ul className="space-y-1">
        {sections.map(section => (
          <li key={section.id}>
            <button
              onClick={() => scrollToSection(section.id)}
              className={`w-full text-left flex items-center space-x-3 px-2 py-2 rounded-md text-slate-600 ${section.color.hoverBg} ${section.color.hoverText} transition-colors duration-150`}
            >
              <section.icon className="h-5 w-5 flex-shrink-0" />
              <span className="font-medium text-sm">{section.title}</span>
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
