import React from "react";
import Iframe from "react-iframe";

//styles
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
        src={process.env.PUBLIC_URL + "/Resume.pdf"}
      />
    </ResumeContainer>
  );
}

export default Resume;
