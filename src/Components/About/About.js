import React from "react";

//font-awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngular,
  faBootstrap,
  faCss3Alt,
  faGitAlt,
  faGithub,
  faHtml5,
  faJsSquare,
  faNode,
  faNodeJs,
  faNpm,
  faReact,
  faSass,
} from "@fortawesome/free-brands-svg-icons";

//styles
import { AboutContainer } from "../../StyledComponents/Container";
import { AboutTitle } from "../../StyledComponents/Title";
import { PageImg } from "../../StyledComponents/Img";

function About() {
  return (
    <AboutContainer>
      <PageImg src={process.env.PUBLIC_URL + "/images/Lanikai.png"} />
      <AboutTitle>About</AboutTitle>
      <img
        alt="me"
        className="me"
        src={process.env.PUBLIC_URL + "/images/me.png"}
      />
      <div className="about-content">
        <div className="about-me">
          <h2>About Me</h2>
          <p>
            I've been working in construction and the restaurant industry my
            entire life. I came to the conclusion that sooner or later my body
            will break down. I've always loved computers and in 2019 I decided
            to go back to school and learn coding. I attended University of
            Phoenix and tried to jump start my knowledge by attending a coding
            boot camp at the same time. From the moment I started coding I knew
            what I wanted as a career. I even surprised myself at how quickly I
            was able to absorb all the information. I finally don't dread to
            waking up and going to work.
          </p>
        </div>
        <div className="skills">
          <h2>Skills</h2>
          <div className="icon-container">
            <div className="icons">
              <div className="icon">
                <FontAwesomeIcon icon={faAngular} /> Angular
              </div>
              <div className="icon">
                <FontAwesomeIcon icon={faBootstrap} /> Bootstrap
              </div>
              <div className="icon">
                <FontAwesomeIcon icon={faCss3Alt} /> CSS3
              </div>
              <div className="icon">
                <FontAwesomeIcon icon={faGitAlt} /> Git
              </div>
            </div>
            <div className="icons">
              <div className="icon">
                <FontAwesomeIcon icon={faGithub} /> Github
              </div>
              <div className="icon">
                <FontAwesomeIcon icon={faHtml5} /> HTML5
              </div>
              <div className="icon">
                <FontAwesomeIcon icon={faJsSquare} /> Javascript
              </div>
              <div className="icon">
                <FontAwesomeIcon icon={faNode} /> Node
              </div>
            </div>
            <div className="icons">
              <div className="icon">
                <FontAwesomeIcon icon={faNodeJs} /> Node JS
              </div>
              <div className="icon">
                <FontAwesomeIcon icon={faNpm} /> NPM
              </div>
              <div className="icon">
                <FontAwesomeIcon icon={faReact} /> React
              </div>
              <div className="icon">
                <FontAwesomeIcon icon={faSass} /> Sass
              </div>
            </div>
          </div>
        </div>
      </div>
    </AboutContainer>
  );
}

export default About;
