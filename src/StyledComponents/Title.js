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
  height: 90px;
  justify-content: center;
  left: 45%;
  position: relative;
  overflow: hidden;
  text-transform: uppercase;
  top: -50px;
  width: 90px;

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

export const HomeTitle = styled(Title)`
  &::after {
    content: "Home";
  }

  &::before {
    content: "Hale";
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
