import styled from "styled-components";
import { green } from "../CSSVariables/JSVariables";

const Hawaiian = styled.span`
  color: transparent;
  cursor: pointer;
  overflow: hidden;
  position: relative;

  &::after {
    align-items: center;
    color: ${green};
    left: 10%;
    position: absolute;
    top: 0;
    text-decoration: none;
    transform: translateX(10%) scale(0);
    transform-origin: right;
    transition: transform 500ms ease-in;
  }

  &:hover::after {
    transform: translateX(0) scale(1);
  }

  &::before {
    color: ${green};
    display: flex;
    justify-content: center;
    left: 0;
    position: absolute;
    top: 0;
    text-decoration: underline;
    transform: translateX(0) scale(1);
    transform-origin: left;
    transition: transform 500ms ease-in;
  }

  &:hover::before {
    transform: translateX(-10%) scale(0);
  }
`;

export const Hello = styled(Hawaiian)`
  &::before {
    content: "Aloha";
  }

  &::after {
    content: "Hello";
  }
`;

export const MiddleName = styled(Hawaiian)`
  &::before {
    content: "Naho'a Ali'i Iku'u Ikaika";
  }

  &::after {
    top: 15%;
    content: "Strength from the Gods";
    font-size: 24px;
  }
`;

export const ComeIn = styled(Hawaiian)`
  &::before {
    content: "E komo mai";
  }

  &::after {
    content: "Come in";
  }
`;
