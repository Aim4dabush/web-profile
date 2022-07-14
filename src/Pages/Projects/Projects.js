import React, { useState } from "react";

//components
import ProjectCarousel from "../../Components/Projects/ProjectCarousel/ProjectCarousel";

//react router
import { Outlet } from "react-router-dom";

//styles
import { PageImg } from "../../StyledComponents/Img";
import { ProjectsContainer } from "../../StyledComponents/Container";
import { ProjectsTitle } from "../../StyledComponents/Title";

export const Details = React.createContext({});

function Projects() {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <Details.Provider
      value={{ showDetails: showDetails, setShowDetails: setShowDetails }}
    >
      <ProjectsContainer>
        <PageImg src={process.env.PUBLIC_URL + "/images/makapuu.png"} />
        <ProjectsTitle>Projects</ProjectsTitle>
        {showDetails ? <Outlet /> : <ProjectCarousel />}
      </ProjectsContainer>
    </Details.Provider>
  );
}

export default Projects;
