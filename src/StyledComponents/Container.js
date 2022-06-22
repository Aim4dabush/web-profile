import styled from "styled-components";
import { darkBlue, lightBlue } from "../CSSVariables/JSVariables";

const Container = styled.div`
  height: 100vh;
  width: 100vw;
`;

export const MainContainer = styled(Container)`
  position: relative;
  z-index: 1;
`;

export const HomeContainer = styled(Container)`
  background-color: ${darkBlue};
  color: ${lightBlue};
  position: relative;

  .home-content {
    align-items: center;
    display: flex;
    font-size: 30px;
    justify-content: center;
    position: relative;
    top: 15%;

    p {
      margin: 0;
    }
  }
`;
