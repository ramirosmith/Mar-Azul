
import React, { useState, useEffect } from 'react';
import type { Section } from '../types';

interface SectionCardProps {
  section: Section;
  isEditing: boolean;
  onContentChange: (sectionId: string, newTitle: string, newItems: string[]) => void;
}

const EditableTextarea: React.FC<{
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  className?: string;
  focusRingClass: string;
}> = ({ value, onChange, className, focusRingClass }) => (
  <textarea
    value={value}
    onChange={onChange}
    className={`w-full p-2 border rounded-md bg-white shadow-inner focus:ring-2 ${focusRingClass} focus:border-transparent transition ${className}`}
    rows={value.split('\n').length + 1}
  />
);

const EditableInput: React.FC<{
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  focusRingClass: string;
}> = ({ value, onChange, className, focusRingClass }) => (
  <input
    type="text"
    value={value}
    onChange={onChange}
    className={`w-full p-2 border rounded-md bg-white shadow-inner focus:ring-2 ${focusRingClass} focus:border-transparent transition ${className}`}
  />
);


const SectionCard: React.FC<SectionCardProps> = ({ section, isEditing, onContentChange }) => {
  const [title, setTitle] = useState(section.title);
  const [items, setItems] = useState(section.items.join('\n'));

  useEffect(() => {
    setTitle(section.title);
    setItems(section.items.join('\n'));
  }, [section]);

  const handleSave = () => {
    onContentChange(section.id, title, items.split('\n').filter(item => item.trim() !== ''));
  };

  const parseItem = (item: string) => {
    const parts = item.split(/(\*\*.*?\*\*)/g);
    return parts.map((part, index) => {
      if (part.startsWith('**') && part.endsWith('**')) {
        return <strong key={index} className="font-semibold text-slate-900">{part.slice(2, -2)}</strong>;
      }
      return part;
    });
  };

  return (
    <section id={section.id} className="bg-white rounded-xl shadow-md scroll-mt-20">
      <div className="p-6">
        <div className="flex items-center space-x-4 mb-4">
          <div className={`${section.color.bg} ${section.color.text} rounded-full p-3`}>
            <section.icon className="h-6 w-6" />
          </div>
          {isEditing ? (
            <EditableInput value={title} onChange={(e) => setTitle(e.target.value)} className="text-2xl font-bold" focusRingClass={section.color.ring}/>
          ) : (
            <h3 className="text-2xl font-bold text-slate-900">{section.title}</h3>
          )}
        </div>

        {isEditing ? (
          <EditableTextarea value={items} onChange={(e) => setItems(e.target.value)} focusRingClass={section.color.ring} />
        ) : (
          <ul className="space-y-3 list-disc list-inside text-slate-600">
            {section.items.map((item, index) => (
              <li key={index} className="leading-relaxed">{parseItem(item)}</li>
            ))}
          </ul>
        )}

        {isEditing && (
          <div className="mt-4 flex justify-end">
            <button
              onClick={handleSave}
              className="px-4 py-2 bg-teal-600 text-white font-semibold rounded-md hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 transition-colors"
            >
              Guardar Cambios
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default SectionCard;
