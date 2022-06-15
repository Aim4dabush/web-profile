import styled from "styled-components";
import { darkBlue, red } from "../CSSVariables/JSVariables";

const Nav = styled.ul`
  display: flex;
  gap: 1em;
  height: 100%;
  list-style: none;
  margin: 0;
  padding: 0;

  a {
    align-items: center;
    color: ${darkBlue};
    display: flex;
    height: 100%;
    justify-content: center;
    text-decoration: none;
    position: relative;
    width: 100%;
  }

  li {
    align-items: center;
    display: flex;
    justify-content: center;
    width: 100%;
  }
`;

export const Page = styled(Nav)`
  left: 0.5em;
  position: absolute;
  width: 634px;

  .current {
    color: ${red};
  }

  .icon {
    font-size: 30px;
    position: absolute;
    transform: rotateX(90deg);
    transform-origin: top;
    transition: transform 500ms linear;
  }

  .icon:hover {
    transform: rotateX(0);
  }

  a:hover .icon {
    animation: bounce 500ms infinite alternate ease-out;
  }

  .icon-title {
    position: absolute;
    transform: rotateX(0) translateY(0);
    transform-origin: bottom;
    transition: transform 500ms linear;
  }

  a:hover .icon-title {
    transform: rotateX(90deg) translateY(10px);
  }

  @keyframes bounce {
    to {
      transform: rotateX(0deg) translateY(-10px);
    }
  }
`;

export const Social = styled(Nav)`
  position: absolute;
  right: 0.5em;

  .icon:hover {
    animation: bounce 500ms infinite alternate ease-out,
      hoverColor 500ms ease-out forwards;
  }

  @keyframes bounce {
    to {
      transform: translateY(-10px);
    }
  }

  @keyframes hoverColor {
    to {
      color: ${red};
    }
  }
`;
