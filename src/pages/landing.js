import React, { useState } from "react";
import Typed from "react-typed";
import Seo from "../components/seo";
import * as LandingStyled from "../components/styled";

function LandingPage() {
  const [typedIsComplete, setTypedIsComplete] = useState(false);

  return (
    <LandingStyled.ViewLanding>
      <Seo title="Homepage" />
      <div className="container">
        <LandingStyled.TitleLanding className="title-landing">
          <Typed
            strings={["I'm a Frontend Developer &amp; UI Enthusiast."]}
            typeSpeed={50}
            onComplete={p => {
              let isComplete = p instanceof Object;
              setTypedIsComplete(isComplete);
            }}
          />
        </LandingStyled.TitleLanding>
        <LandingStyled.DescLanding>
          I really passionate with programming focus on Frontend, I learn
          everything autodidact on the internet. I am a coffee lover, and UI
          Enthusiast.
        </LandingStyled.DescLanding>
        <>
          <LandingStyled.LandingButton href="/blog">
            My Blog
          </LandingStyled.LandingButton>
          <LandingStyled.LandingButton>My Projects</LandingStyled.LandingButton>
        </>
      </div>
    </LandingStyled.ViewLanding>
  );
}

export default LandingPage;
