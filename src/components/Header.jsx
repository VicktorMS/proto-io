import React from "react";
import Drawer from "./Drawer";

import logoSvg from '/icons/logo.svg';
import drawerIcon from '/icons/drawer-icon.svg'


const Header = () => {
  return (
    <header className="px-5 py-4 flex justify-between">
      <img src={logoSvg} alt="Proto.Io"/>
      <div className="flex items-center gap-4">
        <nav className="hidden lg:block">
          <ul className="flex gap-4 font-bold">
            <li className="hover:text-primary">About</li>
            <li className="hover:text-primary">Gear</li>
            <li className="hover:text-primary">Store</li>
            <li className="hover:text-primary">Team</li>
            <li className="hover:text-primary">Sponsors</li>
          </ul>
        </nav>
        <button className="btn btn-primary btn-sm font-bold normal-case text-md">Donate</button>
        <label htmlFor="main-drawer" className="drawer-button lg:hidden">
          <img src={drawerIcon} alt="Botão de Menu"/>
        </label>
      </div>
    </header>
  );
};

export default Header;
