import { useState } from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import TemplateList from './components/TemplateList';
import TemplateContent from './components/TemplateContent';
import { rootCanalTemplate } from './data/templates';

function App() {
  const [template, setTemplate] = useState(rootCanalTemplate);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  
  const handleTemplateSectionsChange = (newSections: typeof template.sections) => {
    setTemplate({
      ...template,
      sections: newSections,
    });
  };
  
  const handleCategorySelect = (categoryId: string) => {
    setSelectedCategory(categoryId);
  };

  return (
    <div className="h-screen flex flex-col bg-gray-100">
      <Header title="Othisis Medtech" />
      
      <div className="flex flex-1 overflow-hidden">
        <Sidebar />
        
        <div className="flex flex-1 overflow-hidden">
          <TemplateList 
            onCategorySelect={handleCategorySelect}
            selectedCategory={selectedCategory}
          />
          
          <TemplateContent 
            template={template}
            onTemplateSectionsChange={handleTemplateSectionsChange}
          />
        </div>
      </div>
    </div>
  );
}

export default App;