import React from "react";

//components
import PageNav from "./PageNav/PageNav";
import SocialNav from "./SocialNav/SocialNav";

//fontawesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/pro-regular-svg-icons";

//styles
import "./NavBar.scss";

function NavBar() {
  return (
    <div className="navbar-container">
      <FontAwesomeIcon icon={faBars} />
      <PageNav />
      <SocialNav />
    </div>
  );
}

export default NavBar;
