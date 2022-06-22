import React from "react";

//styles
import { HomeTitle } from "../../StyledComponents/Title";
import { Hello, MiddleName, ComeIn } from "../../StyledComponents/Hawaiian";
import { HomeContainer } from "../../StyledComponents/Container";
import { PageImg } from "../../StyledComponents/Img";

function Home() {
  return (
    <HomeContainer>
      <PageImg alt="Aloha" src={process.env.PUBLIC_URL + "/images/Aloha.png"} />
      <HomeTitle>Home</HomeTitle>
      <div className="home-content">
        <p>
          <Hello>Aloha</Hello>! My name is Edward Lawrence{" "}
          <MiddleName>Naho'a Ali'i Iku'u Ikaika</MiddleName> Arasato.{" "}
          <ComeIn>E komo mai</ComeIn> to my page. Just hover anything Hawaiian
          if you need a translation.
        </p>
      </div>
    </HomeContainer>
  );
}

export default Home;
