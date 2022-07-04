import React from "react";
import { Props } from "../../pages/react";
import useSidebar from "./useSidebar";

const data = [
  { id: "blocks-editor", label: "Blocks", icon: "fa fa-th" },
  { id: "styles-editor", label: "Styles", icon: "fa fa-paint-brush" },
  { id: "layers-editor", label: "Layers", icon: "fa fa-sticky-note" },
];

const Sidebar: React.FC<Props> = () => {
  const { mapList } = useSidebar();
  return (
    <aside className="drawer-side h-screen overflow-y-auto w-80 text-base-content border-r-2 border-base-300">
      <label htmlFor="my-drawer" className="drawer-overlay"></label>
      <div className="sticky top-0 bg-base-100 flex items-center justify-start z-10 h-14 px-10 border-b-2 border-base-300">
        <h1 className="text-md font-bold">
          <span className="text-primary">Builder </span> Studio
        </h1>
      </div>
      <div className="h-10"></div>
      <ul className="text-sm">{mapList(data)}</ul>
    </aside>
  );
};
export default Sidebar;
