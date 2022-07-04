import React from "react";
import { Props } from "../../pages/react";
import useNavbar from "./useNavbar";

interface INavbar extends Props {
  menus: string[];
}

const Navbar: React.FC<INavbar> = ({ menus }) => {
  const { mapMenu } = useNavbar();

  return (
    <div className="sticky top-0 bg-base-100 flex items-center justify-center z-10 h-14 border-b-2 border-base-300">
      <nav className="navbar">
        <div className="navbar-start">
          <input
            className="input text-sm rounded py-2 h-auto w-full"
            placeholder="Title..."
          />
        </div>

        <div className="navbar-end">
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle">
              m
            </label>
            <ul
              tabIndex={0}
              className="dropdown-content menu mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              {mapMenu(menus)}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};
export default Navbar;
