import React, { useContext } from "react";

//context
import { Details } from "../../../Pages/Projects/Projects";

//data
import { projectData } from "../../../Data/ProjectData";

//fontawesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faGlobe } from "@fortawesome/pro-regular-svg-icons";

//react router
import { useParams, useNavigate } from "react-router-dom";

//styles
import { Button } from "../../../StyledComponents/Button";
import { DetailsCard } from "../../../StyledComponents/Card";
import {
  DetailsContentContainer,
  ProjectIconContainer,
  SiteContainer,
} from "../../../StyledComponents/Container";

function ProjectDetails() {
  const { projectId } = useParams();
  const navigate = useNavigate();
  const { showDetails, setShowDetails } = useContext(Details);

  const data = projectData.find((project) => {
    return project.id === projectId;
  });

  const dataMap = data.languages.map((language) => {
    return <FontAwesomeIcon key={language?.id} icon={language?.icon} />;
  });

  const handleOnClick = () => {
    setShowDetails(!showDetails);
    navigate(-1);
  };

  return (
    <DetailsCard>
      <img src={data?.image} alt={data?.title} />
      <DetailsContentContainer>
        <h3>{data?.title}</h3>
        <p>{data?.description}</p>
        <SiteContainer>
          <div className="github">
            <FontAwesomeIcon icon={faGithub} /> : {data?.github}
          </div>
          <div className="deploy-site">
            <FontAwesomeIcon icon={faGlobe} /> : {data?.deploySite}
          </div>
        </SiteContainer>
        <p>Responsive: {data?.responsive}</p>
        <ProjectIconContainer>{dataMap}</ProjectIconContainer>
        <Button onClick={handleOnClick}>Back</Button>
      </DetailsContentContainer>
    </DetailsCard>
  );
}

export default ProjectDetails;
