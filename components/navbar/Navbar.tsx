import React from "react";
import { Props } from "../../pages/react";
import useNavbar from "./useNavbar";

interface INavbar extends Props {
  menus: string[];
}

const Navbar: React.FC<INavbar> = ({ menus }) => {
  const { todo } = useNavbar();

  function mapMenu(menus: string[]) {
    todo();
    return menus.map((menu: string, i: number) => (
      <li key={i}>
        <a>{menu}</a>
      </li>
    ));
  }

  return (
    <nav className="sticky top-0 bg-white flex items-center justify-center">
      <div className="navbar">
        <div className="navbar-start">
          <a className="btn btn-ghost normal-case text-xl">Instant</a>
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
      </div>
    </nav>
  );
};
export default Navbar;
