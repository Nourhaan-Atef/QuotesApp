import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/logo.svg";
import menu from "../../assets/menu.svg";
import close from "../../assets/close.svg";

const Navbar = () => {
  const [showmenu, setShowMenu] = useState<boolean>(false);

  return (
    <>
      <div className="flex justify-between items-center">
        {/* Logo */}

        <Link to="/" className="flex items-center uppercase">
          <img src={logo} alt="Logo" className="w-12 cursor-pointer" />
          <p className="font-pacifico font-bold text-xl text-DGreen">Quotes</p>
        </Link>

        {/* Links */}
        <section className="md:flex hidden items-center gap-5 font-medium text-lg capitalize font-raleway ">
          <NavLink to="/" className="link">
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
        <section className="md:hidden flex flex-col items-center gap-5 font-medium text-lg capitalize py-5  ">
          <NavLink to="/" className="link">
            home
          </NavLink>
          <NavLink to="/fav" className="link">
            favorites
          </NavLink>
          <NavLink to="/authors" className="link">
            authors
          </NavLink>
        </section>
      ) : (
        ""
      )}
    </>
  );
};

export default Navbar;
