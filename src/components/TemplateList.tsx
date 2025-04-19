import React, { useState } from 'react';
import { Search, Pencil } from 'lucide-react';
import { categories } from '../data/templates';

interface TemplateListProps {
  onCategorySelect: (category: string) => void;
  selectedCategory: string | null;
}

const TemplateList: React.FC<TemplateListProps> = ({
  onCategorySelect,
  selectedCategory,
}) => {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredCategories = categories.filter((category) =>
    category.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="fixed w-[315px] h-[835px] top-[89px] left-[88px] bg-[#e3e3e3] rounded-[8px] overflow-hidden flex flex-col justify-between font-urbanist z-10">
      <div>
      <div className="p-4">
        <h2 className="text-center text-[36px] font-bold mb-4">Template</h2>

        <div className="relative bg-[#f2f2f2] rounded-xl border border-gray-200 px-3 py-2 mb-4">
          <input
            type="text"
            placeholder="Search Templates"
            className="w-full pl-7 pr-2 outline-none text-sm bg-transparent"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <Search size={16} className="absolute right-6 top-3 text-gray-400" />
        </div>

        <div className="overflow-y-auto max-h-[600px] space-y-3 pr-1">
          {filteredCategories.map((category) => (
            <div
              key={category.id}
              className={`w-full text-center bg-[#f2f2f2] rounded-lg py-3 cursor-pointer text-[16px] font-medium transition-colors ${
                selectedCategory === category.id ? 'bg-gray-300' : ''
              }`}
              onClick={() => onCategorySelect(category.id)}
            >
              {category.name}
            </div>
          ))}
        </div>
      </div>
    </div>
      <div className="bg-black text-white py-3 flex justify-center items-center space-x-2 cursor-pointer w-[315px] h-[63px]">
        <span className="text-[16px] font-semibold">Edit</span>
        <Pencil size={18} />
      </div>
    </div>
  );
};

export default TemplateList;
