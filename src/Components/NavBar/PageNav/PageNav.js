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
  return (
    <Page>
      <li>
        <NavLink activeClassName="current" exact="true" to={"/"}>
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to={"/about-me"}>About Me</NavLink>
      </li>
      <li>
        <NavLink to={"/projects"}>Projects</NavLink>
      </li>
      <li>
        <NavLink to={"/resume"}>Resume</NavLink>
      </li>
      <li>
        <NavLink to={"/contact"}>Contact</NavLink>
      </li>
    </Page>
  );
}

export default PageNav;
