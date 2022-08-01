import React from "react";

//styles
import Iframe from "react-iframe";
import { PageImg } from "../../StyledComponents/Img";
import { ResumeContainer } from "../../StyledComponents/Container";
import { ResumeTitle } from "../../StyledComponents/Title";

function Resume() {
  return (
    <ResumeContainer>
      <PageImg src={process.env.PUBLIC_URL + "/images/makapuu.png"} />
      <ResumeTitle>Resume</ResumeTitle>
      <Iframe
        allowFullScreen="true"
        className="pdf"
        src={process.env.PUBLIC_URL + "/tech_resume.pdf"}
      />
    </ResumeContainer>
  );
}

export default Resume;
