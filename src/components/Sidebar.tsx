import React from 'react';
import newicon from '../assets/newicon.png';
import calendar from '../assets/calendar.png';
import folder from '../assets/folder.png';
import userside from '../assets/userside.png';
import settings from '../assets/settings.png';
import icon from '../assets/icon.png';

interface SidebarProps {
  className?: string;
}

const Sidebar: React.FC<SidebarProps> = ({ className = '' }) => {
  return (
    <div
      className={`
        absolute z-10 
        top-[32px] left-0 
        w-[64px] h-[892px] 
        bg-[#151515] 
        rounded-tr-[12px] rounded-br-[12px] 
        flex flex-col items-center py-4
        ${className}
      `}
    >
      
      <div className="flex flex-col gap-6 items-center w-full h-full">
        <IconButton src={icon} alt="Icon" />
        <IconButton src={newicon} alt="New" />
        <IconButton src={calendar} alt="Calendar" />
        <IconButton src={folder} alt="Documents" />
        <IconButton src={userside} alt="Users" />
        <IconButton src={settings} alt="Settings" />
      </div>
    </div>
  );
};

interface IconButtonProps {
    src: string;
    alt: string;
    selected?: boolean;
  }
  
  const IconButton: React.FC<IconButtonProps> = ({ src, alt, selected = false }) => (
    <button
      className={`w-10 h-10 flex items-center justify-center rounded transition-all ${
        selected ? 'bg-zinc-800' : 'hover:bg-zinc-800'
      }`}
    >
      <img src={src} alt={alt} className="w-[32px] h-[32px] object-contain filter brightness-0 invert" />
    </button>
  );
  
  export default Sidebar;