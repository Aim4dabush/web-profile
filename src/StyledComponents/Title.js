import styled from "styled-components";
import { darkBlue, green, lightBlue } from "../CSSVariables/JSVariables";

const Title = styled.div`
  align-items: center;
  background-color: ${darkBlue};
  border: 5px solid ${lightBlue};
  border-radius: 50%;
  color: transparent;
  cursor: pointer;
  display: flex;
  font-size: 25px;
  height: 140px;
  justify-content: center;
  left: 45%;
  position: relative;
  overflow: hidden;
  text-transform: uppercase;
  top: -75px;
  width: 140px;

  &::after {
    color: ${green};
    position: absolute;
    transform: translateX(10%) scale(0);
    transform-origin: right;
    transition: transform 500ms ease-in;
  }

  &:hover::after {
    transform: translateX(0) scale(1);
  }

  &::before {
    color: ${green};
    position: absolute;
    text-decoration: underline;
    transform: translateX(0) scale(1);
    transform-origin: left;
    transition: transform 500ms ease-in;
  }

  &:hover::before {
    transform: translateX(-10%) scale(0);
  }
`;

export const AboutTitle = styled(Title)`
  &::after {
    content: "About";
  }

  &::before {
    content: "Pili Ana";
  }
`;

export const ContactTitle = styled(Title)`
  left: 0;

  &::after {
    content: "Contact";
  }

  &::before {
    content: "Pili";
  }
`;

export const HomeTitle = styled(Title)`
  &::after {
    content: "Home";
  }

  &::before {
    content: "Hale";
  }
`;

export const ProjectsTitle = styled(Title)`
  &::after {
    content: "Projects";
  }

  &::before {
    content: "Na Papahana";
  }
`;

export const ResumeTitle = styled(Title)`
  &::after {
    content: "Resume";
  }

  &::before {
    content: "Ho'omau";
  }
`;
