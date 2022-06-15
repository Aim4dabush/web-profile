import styled from "styled-components";
import { darkBlue, red } from "../CSSVariables/JSVariables";

const Nav = styled.ul`
  list-style: none;
  display: flex;
  gap: 1em;
  margin: 0;
  padding: 0;

  a {
    color: ${darkBlue};
    text-decoration: none;
  }

  li {
    align-items: center;
    display: flex;
    justify-content: center;
    position: relative;
  }
`;

export const Page = styled(Nav)`
  left: 0.5em;
  position: absolute;

  .current {
    color: ${red};
  }
`;

export const Social = styled(Nav)`
  position: absolute;
  right: 0.5em;

  .icon:hover {
    animation: bounce 500ms infinite alternate ease-out;
  }

  @keyframes bounce {
    to {
      transform: translateY(-10px);
    }
  }
`;
