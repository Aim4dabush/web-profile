import styled from "styled-components";

const Card = styled.div``;

export const DetailsCard = styled(Card)``;

export const ProjectCard = styled(Card)`
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 1em;
  height: fit-content;
  width: 100%;

  .icon {
    font-size: 25px;
  }

  .project-iframe {
    height: 300px;
    width: 550px;
  }
`;
