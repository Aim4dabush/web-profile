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

export const DetailsContentContainer = styled(Container)`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 200px;
  width: 50%;

  .details-title {
    font-size: 35px;
    text-decoration: underline;
    margin-bottom: 16px;
  }

  .details-content {
    font-size: 20px;
    margin-bottom: 16px;
  }
`;

export const DetailsImageContainer = styled(Container)`
  height: 450px;
  width: 600px;
`;

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
  justify-content: center;
  height: fit-content;
  position: relative;
  overflow: hidden;

  .left-arrow {
    cursor: pointer;
    font-size: 50px;
    left: 2em;
    position: absolute;
    top: 40%;
  }

  .left-arrow:hover {
    color: ${red};
  }

  .right-arrow {
    cursor: pointer;
    font-size: 50px;
    position: absolute;
    right: 2em;
    top: 40%;
  }

  .right-arrow:hover {
    color: ${red};
  }

  .slide.active {
    height: fit-content;
  }
`;

export const ProjectsContainer = styled(Container)`
  height: 500px;

  .carousel {
    height: 100%;
  }
`;

export const ProjectIconContainer = styled(Container)`
  display: flex;
  font-size: 25px;
  height: fit-content;
  justify-content: space-evenly;
  margin-bottom: 16px;
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

export const SiteContainer = styled(Container)`
  font-size: 20px;
  height: fit-content;
  display: flex;
  justify-content: space-evenly;
  margin-bottom: 16px;

  .details-responsive {
    font-size: 20px;
  }

  a {
    color: ${lightBlue};
    text-decoration: none;
  }
`;
