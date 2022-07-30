import React from "react";

//components
import Project from "./Project/Project";

//data
import { projectData } from "../../../Data/ProjectData";

//fontawesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleArrowLeft,
  faCircleArrowRight,
} from "@fortawesome/pro-regular-svg-icons";

//styles
import { ProjectCarouselContainer } from "../../../StyledComponents/Container";
import { useState } from "react";

function ProjectCarousel() {
  const [current, setCurrent] = useState(0);
  const length = projectData.length;

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  if (!Array.isArray(projectData) || length === 0) {
    return null;
  }

  const projectDataMap = projectData.map((project, index) => {
    return (
      <div
        className={index === current ? "slide active" : "slide"}
        key={project.id}
      >
        {index === current && (
          <Project
            id={project.id}
            image={project.image}
            languages={project.languages}
            title={project.title}
          />
        )}
      </div>
    );
  });

  return (
    <ProjectCarouselContainer>
      <FontAwesomeIcon
        className="left-arrow"
        icon={faCircleArrowLeft}
        onClick={prevSlide}
      />
      <FontAwesomeIcon
        className="right-arrow"
        icon={faCircleArrowRight}
        onClick={nextSlide}
      />
      {projectDataMap}
    </ProjectCarouselContainer>
  );
}

export default ProjectCarousel;
