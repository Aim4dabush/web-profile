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
import { BackButton } from "../../../StyledComponents/Button";
import { DetailsCard } from "../../../StyledComponents/Card";
import {
  DetailsContentContainer,
  DetailsImageContainer,
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
      <DetailsImageContainer>
        <video
          className="details-image"
          style={{ height: "100%", width: "100%" }}
          autoPlay
          loop
          muted
        >
          <source src={data?.gif} type="video/mp4" />
        </video>
      </DetailsImageContainer>
      <DetailsContentContainer>
        <h3 className="details-title">{data?.title}</h3>
        <p className="details-content">{data?.description}</p>
        <SiteContainer>
          <p className="details-responsive">Responsive: {data?.responsive}</p>
          <a href={data?.github} target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faGithub} /> Github
          </a>
          <a href={data?.deploySite} target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faGlobe} /> Deployed Site
          </a>
        </SiteContainer>

        <ProjectIconContainer>{dataMap}</ProjectIconContainer>
        <BackButton onClick={handleOnClick}>Back</BackButton>
      </DetailsContentContainer>
    </DetailsCard>
  );
}

export default ProjectDetails;
