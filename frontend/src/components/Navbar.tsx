import "../styles/components/_Navbar.scss";
import { FC } from "react";
import { FaVoteYea } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import { FaHandHolding } from "react-icons/fa";
import { FaUserPlus } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import Close_button from "./building_blocks/Close_button";

const Navbar = () => {
  return (
    <nav className=" bg-white d-none d-lg-block" style={{ maxWidth: "320px" }}>
      <div className="px-4 pt-4 d-flex h-100">
        <div className="nav-links d-flex flex-column w-100">
          <div className="pb-1 fw-medium">MENU</div>
          <NavLinkHolder
            navtext="Vote"
            Icon={FaVoteYea}
            url="/vote"></NavLinkHolder>
          <NavLinkHolder
            navtext="View"
            Icon={FaEye}
            url="/view"></NavLinkHolder>
          <NavLinkHolder
            navtext="Host"
            Icon={FaHandHolding}
            url="/host"></NavLinkHolder>
          <NavLinkHolder
            navtext="Register"
            Icon={FaUserPlus}
            url="/register_user"></NavLinkHolder>
        </div>
        <div className=" d-md-none">
          <Close_button></Close_button>
        </div>
      </div>
    </nav>
  );
};

type NavLinkType = {
  navtext: string;
  Icon: FC;
  url: string;
};

const NavLinkHolder: FC<NavLinkType> = ({ navtext, Icon, url }) => {
  return (
    <div className=" navlink_holder">
      <NavLink
        to={url}
        className={({ isActive }) => {
          return isActive
            ? " text-reset text-decoration-none fw-semibold d-flex d-block h-100 py-2 rounded-2  active"
            : " text-reset text-decoration-none  fw-semibold d-flex d-block h-100 py-2 rounded-2 ";
        }}>
        <span className="icon_span">
          <Icon />
        </span>
        <span>{navtext}</span>
      </NavLink>
    </div>
  );
};

// " link-dark link-underline-opacity-0 fw-semibold d-flex d-block h-100"

export default Navbar;
