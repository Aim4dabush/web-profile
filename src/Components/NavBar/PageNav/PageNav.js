import React from "react";
import { NavLink } from "react-router-dom";

//fontawesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAddressCard,
  faDisplayCode,
  faHouse,
  faFilePdf,
  faSquareUser,
} from "@fortawesome/pro-regular-svg-icons";

//styles
import { Page } from "../../../StyledComponents/Nav";

function PageNav() {
  const activeStyle = ({ isActive }) => (isActive ? "current" : null);

  return (
    <Page>
      <li>
        <NavLink className={activeStyle} to={"/"}>
          <span className="icon-title">Home</span>
          <FontAwesomeIcon className="icon" icon={faHouse} />
        </NavLink>
      </li>
      <li>
        <NavLink to={"/about"}>
          <span className="icon-title">About Me</span>
          <FontAwesomeIcon className="icon" icon={faSquareUser} />
        </NavLink>
      </li>
      <li>
        <NavLink to={"/projects"}>
          <span className="icon-title">Projects</span>
          <FontAwesomeIcon className="icon" icon={faDisplayCode} />
        </NavLink>
      </li>
      <li>
        <NavLink to={"/resume"}>
          <span className="icon-title">Resume</span>
          <FontAwesomeIcon className="icon" icon={faFilePdf} />
        </NavLink>
      </li>
      <li>
        <NavLink to={"/contact"}>
          <span className="icon-title">Contact</span>
          <FontAwesomeIcon className="icon" icon={faAddressCard} />
        </NavLink>
      </li>
    </Page>
  );
}

export default PageNav;
