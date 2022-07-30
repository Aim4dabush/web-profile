import styled from "styled-components";
import { lightBlue, red } from "../CSSVariables/JSVariables";

const Card = styled.div`
  display: flex;
  height: fit-content;
  width: 100%;
`;

export const DetailsCard = styled(Card)`
  justify-content: space-evenly;
`;

export const ProjectCard = styled(Card)`
  align-items: center;
  flex-direction: column;
  gap: 1em;
  height: fit-content;

  .icon {
    font-size: 25px;
  }

  .project-image {
    height: 350px;
    width: 550px;
  }

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
