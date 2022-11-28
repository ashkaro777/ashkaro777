import styled from "styled-components";
import { screenSmallerThan } from "common/utils/responsive";

export const StyledHomePage = styled.div``;

export const StyledHeroSection = styled.div`
  position: relative;
  min-height: 100vh;

  /* background: url("/assets/images/ashish_jahangir.png");
  background-position: 10vw 2vh;
  background-size: 80vw;
  background-repeat: no-repeat; */
  background-color: #000;

  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 50%;
    background: rgba(52, 186, 235, 0.25);
    z-index: 1;
  }

  &:after {
    content: "";
    position: absolute;
    top: 50%;
    left: 0;
    width: 100%;
    height: 50%;
    background: rgba(0, 0, 0, 0.25);
    z-index: 1;
  }
`;

export const StyledHeading = styled.h1`
  position: absolute;
  width: 100%;
  text-align: center;
  top: calc(50vh - 7.5rem);
  z-index: 2;

  text-transform: uppercase;
  font-weight: 40;
  font-size: 64px;
  letter-spacing: 0.31em;
  color: #ffffff;
  margin: 0;

  ${screenSmallerThan.tablet} {
    top: calc(50vh - 4rem);
    font-size: 24px;
  }
`;
