import React, { useRef, useEffect } from 'react';
import { Template } from '../types';
import TemplateSection from './TemplateSection';
import TemplateHeader from './TemplateHeader';
import {
  DndContext,
  DragOverlay,
  useSensor,
  useSensors,
  PointerSensor,
  KeyboardSensor,
  closestCenter,
  DragStartEvent,
  DragEndEvent,
} from '@dnd-kit/core';
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy,
} from '@dnd-kit/sortable';
import TemplateDragOverlay from './TemplateDragOverlay';

interface TemplateContentProps {
  template: Template;
  onTemplateSectionsChange: (newSections: Template['sections']) => void;
}

const TemplateContent: React.FC<TemplateContentProps> = ({
  template,
  onTemplateSectionsChange,
}) => {
  const [activeId, setActiveId] = React.useState<string | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const autoScrollIntervalRef = useRef<number | null>(null);

  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 8,
      },
    }),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );
  const activeSection = activeId
    ? template.sections.find((section) => section.id === activeId)
    : null;

  const handleDragStart = (event: DragStartEvent) => {
    setActiveId(event.active.id as string);
  };

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    
    if (over && active.id !== over.id) {
      const oldIndex = template.sections.findIndex((section) => section.id === active.id);
      const newIndex = template.sections.findIndex((section) => section.id === over.id);
      
      const newSections = arrayMove(template.sections, oldIndex, newIndex);
      onTemplateSectionsChange(newSections);
    }
    
    setActiveId(null);

    if (autoScrollIntervalRef.current !== null) {
      clearInterval(autoScrollIntervalRef.current);
      autoScrollIntervalRef.current = null;
    }
  };

  const handleDragMove = (event: any) => {
    if (!containerRef.current) return;
    
    const container = containerRef.current;
    const containerRect = container.getBoundingClientRect();
    const cursorY = event.clientY;
    
    const bottomThreshold = containerRect.bottom - 100;
    const topThreshold = containerRect.top + 100;
    
    if (autoScrollIntervalRef.current !== null) {
      clearInterval(autoScrollIntervalRef.current);
      autoScrollIntervalRef.current = null;
    }

    if (cursorY > bottomThreshold) {
      autoScrollIntervalRef.current = window.setInterval(() => {
        container.scrollBy({ top: 10, behavior: 'smooth' });
      }, 10) as unknown as number;
    } 
    
    else if (cursorY < topThreshold) {
      autoScrollIntervalRef.current = window.setInterval(() => {
        container.scrollBy({ top: -10, behavior: 'smooth' });
      }, 10) as unknown as number;
    }
  };

  useEffect(() => {
    return () => {
      if (autoScrollIntervalRef.current !== null) {
        clearInterval(autoScrollIntervalRef.current);
      }
    };
  }, []);

  return (
    <div className="fixed max-w-[calc(100%-30px)] right-[30px] h-[836px] top-[88px] left-[427px] rounded-[8px] flex flex-col justify-between font-urbanist bg-[#e3e3e3]">
      <TemplateHeader title={template.name} />
      
      <div 
        ref={containerRef}
        className="flex-1 overflow-y-auto p-4"
      >
        <DndContext
          sensors={sensors}
          collisionDetection={closestCenter}
          onDragStart={handleDragStart}
          onDragEnd={handleDragEnd}
          onDragMove={handleDragMove}
        >
          <SortableContext
            items={template.sections.map((section) => section.id)}
            strategy={verticalListSortingStrategy}
          >
            {template.sections.map((section) => (
              <TemplateSection 
                key={section.id} 
                section={section} 
              />
            ))}
          </SortableContext>
          
          <DragOverlay>
            {activeSection ? (
              <TemplateDragOverlay section={activeSection} />
            ) : null}
          </DragOverlay>
        </DndContext>
      </div>
      
      <div className="p-4 border-t border-gray-200 flex justify-end space-x-2">
        <button className="px-6 py-2 text-black border border-black rounded-full hover:bg-blue-50 transition-colors font-semibold">
          Send Referral
        </button>
        <button className="px-6 py-2 bg-black text-white rounded-full hover:bg-gray-900 transition-colors font-semibold">
          Save Note
        </button>
      </div>
    </div>
  );
};

export default TemplateContent;