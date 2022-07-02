import dynamic from "next/dynamic";
import React from "react";
import { Props } from "../../pages/react";

const Sidebar = dynamic(() => import("../sidebar"));
const Navbar = dynamic(() => import("../navbar"));

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <main className="h-screen flex">
      <Sidebar />
      <div className="w-full h-screen overflow-y-scroll">
        <Navbar menus={["detail"]} />
        {children}
      </div>
    </main>
  );
};
export default Layout;
