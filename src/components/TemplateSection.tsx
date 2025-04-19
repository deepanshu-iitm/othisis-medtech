import React from 'react';
import { TemplateSection as TemplateSectionType } from '../types';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';

interface TemplateSectionProps {
  section: TemplateSectionType;
  isDragging?: boolean;
}

const TemplateSection: React.FC<TemplateSectionProps> = ({ 
  section,
  isDragging = false
}) => {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging: isSectionDragging,
  } = useSortable({ id: section.id });
  
  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      className={`bg-gray-100 p-4 rounded-md mb-4 ${
        isSectionDragging ? 'opacity-50 cursor-grabbing' : 'cursor-grab'
      }`}
    >
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

export default TemplateSection;