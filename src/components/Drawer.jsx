import React from "react";

const Drawer = ({ children }) => {
  return (
    <div className="drawer drawer-end">
      <input id="main-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">{children}</div>
      <div className="drawer-side">
        <label htmlFor="main-drawer" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 h-full bg-secondary text-base-content">
          {/* Sidebar content here */}        
            <MenuOption>About</MenuOption>                  
            <MenuOption>Gear</MenuOption>                  
            <MenuOption>Store</MenuOption>                  
            <MenuOption>Team</MenuOption>                  
            <MenuOption>Sponsors</MenuOption>          
        </ul>
      </div>
    </div>
  );
};

const MenuOption = ({ children }) => {
  return (
    <li>
      <a className="font-bold text-lg cursor-pointer " href={"#" + children}>{children}</a>
    </li>
  );
};

export default Drawer;
