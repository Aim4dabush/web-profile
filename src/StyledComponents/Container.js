import styled from "styled-components";
import { darkBlue, lightBlue, red } from "../CSSVariables/JSVariables";

const Container = styled.div`
  background-color: ${darkBlue};
  color: ${lightBlue};
  height: 100vh;
  width: 100%;
`;

export const AboutContainer = styled(Container)`
  .about-content {
    display: flex;
    justify-content: space-evenly;

    .about-me {
      padding: 1em;
      width: 50%;

      h2 {
        text-align: center;
      }
      p {
        font-size: 20px;
        margin: 0;
        text-align: center;
      }
    }

    .skills {
      display: flex;
      flex-direction: column;
      width: 50%;

      h2 {
        text-align: center;
      }

      .icon-container {
        display: flex;
        justify-content: space-evenly;
        width: 100%;

        .icons {
          align-items: center;
          display: flex;
          flex-direction: column;
          font-size: 30px;
          gap: 1em;
          justify-content: space-evenly;

          .icon {
            align-items: center;
            display: flex;
            gap: 0.5em;
            justify-content: center;
          }
        }
      }
    }
  }

  .me {
    border-radius: 5px;
    height: 150px;
    left: 43.5%;
    position: relative;
    top: -30px;
    width: 150px;
  }
`;

export const ContactContainer = styled(Container)`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: fit-content;
`;

export const DetailsContentContainer = styled(Container)``;

export const HomeContainer = styled(Container)`
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

export const MainContainer = styled(Container)`
  position: relative;
  z-index: 1;
`;

export const ProjectCarouselContainer = styled(Container)`
  display: flex;
  justify-content: space-evenly;
  height: 100%;

  .project-link {
    color: ${lightBlue};
    height: 100%;
    text-decoration: none;
    transition: color 300ms;
  }

  .project-link:hover {
    color: ${red};
  }
`;

export const ProjectsContainer = styled(Container)`
  height: fit-content;
`;

export const ProjectIconContainer = styled(Container)`
  display: flex;
  height: fit-content;
  justify-content: space-evenly;
`;

export const ResumeContainer = styled(Container)`
  height: fit-content;
  position: relative;

  .pdf {
    height: 500px;
    left: 10.5%;
    position: relative;
    top: 0;
    width: 1500px;
  }
`;

export const SiteContainer = styled(Container)``;
