import React, { useContext } from "react";

//context
import { Details } from "../../../../Pages/Projects/Projects";

//fontawesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

//iframe
import Iframe from "react-iframe";

//react router
import { Link } from "react-router-dom";

//styles
import { ProjectCard } from "../../../../StyledComponents/Card";
import { ProjectIconContainer } from "../../../../StyledComponents/Container";

function Project({ id, image, languages, title }) {
  const { showDetails, setShowDetails } = useContext(Details);
  const languageMap = languages.map((language) => {
    return (
      <FontAwesomeIcon
        className="icon"
        key={language.id}
        icon={language.icon}
      />
    );
  });

  const handleOnClick = () => {
    setShowDetails(!showDetails);
  };

  return (
    <ProjectCard onClick={handleOnClick}>
      <Link className="project-link" to={`/projects/${id}`}>
        <img className="project-image" src={image} alt={title} />
        <h2 className="project-title">{title}</h2>
      </Link>
      <ProjectIconContainer>{languageMap}</ProjectIconContainer>
    </ProjectCard>
  );
}

export default Project;
