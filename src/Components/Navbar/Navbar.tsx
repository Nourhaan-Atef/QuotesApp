import { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/logo.svg";
import menu from "../../assets/menu.svg";
import close from "../../assets/close.svg";

import search from "../../assets/search.svg";

const Navbar = () => {
  const [showmenu, setShowMenu] = useState<boolean>(false);
  const [showSearch, setShowSearch] = useState<boolean>(false);

  return (
    <>
      <div className="flex justify-between items-center">
        {/* Logo */}
        <section className="flex items-center uppercase">
          <img src={logo} alt="Logo" className="w-12" />
          <p className="font-pacifico font-bold text-xl text-DGreen">Quotes</p>
        </section>
        {/* Links */}
        <section className="md:flex hidden items-center gap-5 font-medium text-lg capitalize ">
          <NavLink to="/home" className="link">
            home
          </NavLink>
          <NavLink to="/fav" className="link">
            favorites
          </NavLink>
          <NavLink to="/authors" className="link">
            authors
          </NavLink>
        </section>

        {/* Small Screens */}
        <section className="md:hidden flex items-center gap-5 font-medium text-lg capitalize">
          <img
            src={`${showmenu ? close : menu}`}
            alt="menu"
            className="w-10 cursor-pointer"
            onClick={() => setShowMenu(!showmenu)}
          />
        </section>
      </div>
      {showmenu ? (
        <section className="md:hidden flex flex-col items-center gap-5 font-medium text-lg capitalize pt-5 pb-10 ">
          <NavLink to="/home" className="link">
            home
          </NavLink>
          <NavLink to="/fav" className="link">
            favorites
          </NavLink>
          <NavLink to="/authors" className="link">
            authors
          </NavLink>
          <img
            src={search}
            alt="Search Icon"
            className="w-10 cursor-pointer rounded-full"
            onClick={() => setShowSearch(!showSearch)}
          />
        </section>
      ) : (
        ""
      )}
    </>
  );
};

export default Navbar;