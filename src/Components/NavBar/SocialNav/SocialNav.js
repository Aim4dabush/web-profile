import React from "react";

//fontawesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookSquare,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

//styles
import { Social } from "../../../StyledComponents/Nav";

function SocialNav() {
  return (
    <Social>
      <li>
        <a
          href="https://www.facebook.com/edward.arasato"
          rel="noopener noreferrer"
          target="_blank"
        >
          <FontAwesomeIcon className="icon" icon={faFacebookSquare} />
        </a>
      </li>
      <li>
        <a
          href="https://github.com/Aim4dabush"
          rel="noopener noreferrer"
          target="_blank"
        >
          <FontAwesomeIcon className="icon" icon={faGithub} />
        </a>
      </li>
      <li>
        <a
          href="https://www.linkedin.com/in/ed-arasato-74614112a/"
          rel="noopener noreferrer"
          target="_blank"
        >
          <FontAwesomeIcon className="icon" icon={faLinkedin} />
        </a>
      </li>
    </Social>
  );
}

export default SocialNav;
