import React from 'react';
import { TemplateSection as TemplateSectionType } from '../types';

interface TemplateDragOverlayProps {
  section: TemplateSectionType;
}

const TemplateDragOverlay: React.FC<TemplateDragOverlayProps> = ({ section }) => {
  return (
    <div className="bg-white p-4 rounded-md shadow-lg border-2 border-dashed border-blue-400 w-[500px]">
      <h3 className="font-semibold text-gray-800 mb-2">{section.title}</h3>
      <ul className="space-y-2">
        {section.items.map((item, idx) => (
          <li key={idx} className="flex items-start">
            <span className="mr-2">•</span>
            <span className="text-gray-700">{item.text}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TemplateDragOverlay;