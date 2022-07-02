import React from "react";
import { Props } from "../../pages/react";

const Drawer: React.FC<Props> = ({ children }) => {
  return (
    <aside className="drawer-side h-screen p-4 overflow-y-auto w-80 text-base-content">
      <ul className="menu">
        <li>
          <a>Sidebar Item 1</a>
        </li>
        <li>
          <a>Sidebar Item 2</a>
        </li>
      </ul>
    </aside>
  );
};
export default Drawer;
