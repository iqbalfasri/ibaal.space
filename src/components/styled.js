import styled from "styled-components";

/**
 * Theme
 * Dark or Light
 */

export const BodyTheme = styled.body`
  background-color: ${props => props.isDark? "#3a425d" : "white"};
`;

/**
 * Landing Page styled
 */

export const ViewLanding = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: scroll;
  font-family: "Roboto Mono", monospace;
`;

export const TitleLanding = styled.h1`
  font-size: 42px;
  font-weight: 500;
  max-width: 55%;
  bottom: 25px;
  position: relative;
  color: #fea53e;
  height: 100px;
`;

export const DescLanding = styled.p`
  font-size: 16px;
  font-weight: 400;
  max-width: 55%;
  line-height: 30px;
  color: #f5f5f5;
`;

export const LandingButton = styled.a`
  display: inline-block;
  margin: 0 25px 0 0;
  background-color: white;
  outline: 3px solid #222;
  border-radius: 0;
  text-transform: uppercase;
  text-align: center;
  padding: 10px 15px;
  color: #222 !important;
  letter-spacing: 0.05em;
  font-size: 0.875rem;
  font-weight: 500;
  box-shadow: 7px 7px #fcaf3e;
  transition: box-shadow 0.15s ease-in;
  text-decoration: none;
  margin: 30px 25px 0px 0px;
  cursor: pointer;
  text-decoration: none !important;

  &:hover {
    box-shadow: 5px 5px #fcaf3e;
  }
`;
