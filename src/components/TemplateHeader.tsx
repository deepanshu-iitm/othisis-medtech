import React from 'react';
import { Info, Download, Trash2, Mic } from 'lucide-react';

interface TemplateHeaderProps {
  title: string;
}

const TemplateHeader: React.FC<TemplateHeaderProps> = ({ title }) => {
  return (
    <div className="flex justify-between items-center bg-white p-4 border-b border-gray-200">
      <div className="flex items-center">
        <h1 className="text-[36px] font-bold">{title}</h1>
        <Info size={32} className="ml-3 text-black" />
      </div>
      
      <div className="flex items-center space-x-3">
        <button className="w-[155px] h-[52px] border border-black rounded-full flex items-center space-x-1 text-sm justify-center">
          <Mic size={24} />
          <span className='text-[16px] font-bold'>Resume</span>
        </button>
        <button className="p-2 text-black hover:text-gray-900">
          <Download size={32} />
        </button>
        <button className="p-2 text-[#b00020] hover:text-gray-900">
          <Trash2 size={24} />
        </button>
      </div>
    </div>
  );
};

export default TemplateHeader;