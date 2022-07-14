import React, { useContext } from "react";

//context
import { Details } from "../../../../Pages/Projects/Projects";

//fontawesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

//react router
import { Link } from "react-router-dom";

//styles
import Iframe from "react-iframe";
import { ProjectCard } from "../../../../StyledComponents/Card";
import { ProjectIconContainer } from "../../../../StyledComponents/Container";

function Project({ gif, id, languages, title }) {
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
    <Link className="project-link" to={`/projects/${id}`}>
      <ProjectCard onClick={handleOnClick}>
        <Iframe allowFullScreen={true} className="project-iframe" src={gif} />
        <h2 className="project-title">{title}</h2>
        <ProjectIconContainer>{languageMap}</ProjectIconContainer>
      </ProjectCard>
    </Link>
  );
}

export default Project;
