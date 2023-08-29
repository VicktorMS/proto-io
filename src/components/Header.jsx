import React from "react";
import Drawer from "./Drawer";

import logoSvg from "/icons/logo.svg";
import drawerIcon from "/icons/drawer-icon.svg";

const Header = () => {
  return (
    <header className="px-5 py-4 flex justify-between">
      <img src={logoSvg} alt="Proto.Io" />
      <div className="flex items-center gap-4">
        <nav className="hidden lg:block">
          <ul className="flex gap-4 font-bold">
            <MenuOption>About</MenuOption>
            <MenuOption>Gear</MenuOption>
            <MenuOption>Store</MenuOption>
            <MenuOption>Team</MenuOption>
            <MenuOption>Sponsors</MenuOption>
          </ul>
        </nav>
        <button className="btn btn-primary btn-sm font-bold normal-case text-md hover:scale-105">
          Donate
        </button>
        <label htmlFor="main-drawer" className="drawer-button lg:hidden cursor-pointer ">
          <img src={drawerIcon} alt="Botão de Menu" />
        </label>
      </div>
    </header>
  );
};

const MenuOption = ({ children }) => {
  return (
    <li>
      <a
        className="font-bold text-lg cursor-pointer hover:text-primary"
        href={"#" + children}
      >
        {children}
      </a>
    </li>
  );
};

export default Header;
