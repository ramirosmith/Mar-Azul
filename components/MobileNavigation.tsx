
import React from 'react';
import type { Section } from '../types';
import { XIcon } from './icons';

interface MobileNavigationProps {
  isOpen: boolean;
  onClose: () => void;
  sections: Section[];
}

const MobileNavigation: React.FC<MobileNavigationProps> = ({ isOpen, onClose, sections }) => {
  const scrollToSection = (id: string) => {
    onClose();
    setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
            const yOffset = -80; // offset for the sticky header
            const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
            window.scrollTo({ top: y, behavior: 'smooth' });
        }
    }, 300); // Wait for menu to close before scrolling
  };

  return (
    <>
      {/* Overlay */}
      <div 
        className={`fixed inset-0 bg-black bg-opacity-50 z-30 transition-opacity duration-300 ease-in-out ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={onClose}
        aria-hidden="true"
      ></div>

      {/* Navigation Panel */}
      <div
        className={`fixed top-0 left-0 h-full w-full max-w-xs bg-white z-40 shadow-xl transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}
        role="dialog"
        aria-modal="true"
        aria-labelledby="mobile-nav-title"
      >
        <div className="p-4">
          <div className="flex justify-between items-center mb-6">
            <h3 id="mobile-nav-title" className="text-lg font-semibold text-slate-900">Navegación</h3>
            <button
              onClick={onClose}
              className="p-2 rounded-md text-slate-500 hover:text-slate-800 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-teal-500"
              aria-label="Cerrar menú de navegación"
            >
              <XIcon className="h-6 w-6" />
            </button>
          </div>
          <ul className="space-y-1">
            {sections.map(section => (
              <li key={section.id}>
                <button
                  onClick={() => scrollToSection(section.id)}
                  className={`w-full text-left flex items-center space-x-3 px-2 py-3 rounded-md text-slate-600 ${section.color.hoverBg} ${section.color.hoverText} transition-colors duration-150`}
                >
                  <section.icon className="h-5 w-5 flex-shrink-0" />
                  <span className="font-medium text-sm">{section.title}</span>
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default MobileNavigation;
