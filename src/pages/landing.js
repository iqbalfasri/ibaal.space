import React, { useState } from "react";
import Typed from "react-typed";
import * as LandingStyled from "../components/styled";

function LandingPage() {
  const [typedIsComplete, setTypedIsComplete] = useState(false);

  return (
    <LandingStyled.ViewLanding>
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
        {typedIsComplete && (
          <>
            <LandingStyled.DescLanding className="desc-landing">
              <Typed
                strings={[
                  "I really passionate with programming focus on Frontend, I learn everything autodidact on the internet. I am a coffee lover, and UI Enthusiast.",
                ]}
                startDelay={500}
                typeSpeed={10}
              />
            </LandingStyled.DescLanding>
            <div>
              <LandingStyled.LandingButton>My Blog</LandingStyled.LandingButton>
              <LandingStyled.LandingButton>Projects</LandingStyled.LandingButton>
            </div>
          </>
        )}
      </div>
    </LandingStyled.ViewLanding>
  );
}

export default LandingPage;
