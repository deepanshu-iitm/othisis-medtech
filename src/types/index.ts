export interface TemplateSectionItem {
    text: string;
  }
  
  export interface TemplateSection {
    id: string;
    title: string;
    items: TemplateSectionItem[];
  }
  
  export interface Template {
    id: string;
    name: string;
    sections: TemplateSection[];
  }
  
  export interface SidebarCategory {
    id: string;
    name: string;
  }