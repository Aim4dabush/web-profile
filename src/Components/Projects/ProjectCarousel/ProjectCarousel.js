import React from "react";

//components
import Project from "./Project/Project";

//data
import { projectData } from "../../../Data/ProjectData";

//styles
import { ProjectCarouselContainer } from "../../../StyledComponents/Container";

function ProjectCarousel() {
  const projectDataMap = projectData.map((project) => {
    return (
      <Project
        key={project.id}
        id={project.id}
        title={project.title}
        gif={project.gif}
        languages={project.languages}
      />
    );
  });

  return <ProjectCarouselContainer>{projectDataMap}</ProjectCarouselContainer>;
}

export default ProjectCarousel;
