import React from "react";


const Drawer = ({children}) => {
  return (
    <div className="drawer drawer-end">
      <input id="main-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        {children}
      </div>
      <div className="drawer-side">
        <label htmlFor="main-drawer" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 h-full bg-secondary text-base-content">
          {/* Sidebar content here */}
          <li>
            <a>Sidebar Item 1</a>
          </li>
          <li>
            <a>Sidebar Item 2</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Drawer;
