import React from "react";
import { Props } from "../../pages/react";

const Drawer: React.FC<Props> = () => {
  return (
    <aside className="drawer-side h-screen overflow-y-auto w-80 text-base-content border-r border-gray-200">
      <label htmlFor="my-drawer" className="drawer-overlay"></label>
      <div className="sticky top-0 bg-white flex items-center justify-start z-10 h-24 px-10">
        <h1 className="text-md font-bold">
          <span className="text-primary">Builder </span> Studio
        </h1>
      </div>
      <ul className="text-sm">
        <li className="collapse-title flex items-center cursor-pointer hover:text-primary px-10">
          <span>
            <i className="fa fa-plus mr-3" />
            Imports
          </span>
        </li>
        <li className="collapse hover:text-primary">
          <input type="checkbox" className="peer" />
          <div className="collapse-title flex items-center peer-checked:text-white peer-checked:bg-primary px-10">
            <span>
              <i className="fa fa-th mr-3" />
              Blocks
            </span>
          </div>
          <div id="block-editor" className="collapse-content" />
        </li>
        <li className="collapse hover:text-primary">
          <input type="checkbox" className="peer" />
          <div className="collapse-title flex items-center peer-checked:text-white peer-checked:bg-primary px-10">
            <span>
              <i className="fa fa-clone mr-3" />
              Others
            </span>
          </div>
          <div className="collapse-content">halo</div>
        </li>
      </ul>
    </aside>
  );
};
export default Drawer;
