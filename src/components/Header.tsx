import React from 'react';
import logo from '../assets/logo.png';
import bell from '../assets/bell.png';
import users from '../assets/users.png';

interface HeaderProps {
  title: string;
}

const Header: React.FC<HeaderProps> = () => {
  return (
    <header className="w-full h-16 bg-[#151515] flex items-center justify-between px-[88px] shadow-sm">
      <div className="flex items-center space-x-3">
        <img
          src={logo}
          alt="Logo"
          className="w-[213px] h-[39.09px] object-contain"
        />
      </div>

      <div className="flex items-center w-[97.11px] h-[32px] gap-4">
        <img
          src={bell}
          alt="Notifications"
          className="w-[29.11px] h-[27.89px] object-contain"
        />
        <img
          src={users}
          alt="User"
          className="w-[52px] h-[32px] object-contain"
        />
      </div>
    </header>
  );
};

export default Header;
