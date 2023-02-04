import React from "react";
import styled from "styled-components";
import { Container } from "reactstrap";

import { ELEMENT_ID } from "common/constants/element";
import ReelSlider from "./components/ReelSlider";

const StyledRightSection = styled.div`
  padding: 1rem;
  margin: 1rem;
  max-width: 720px;
  width: 100%;
  margin-left: auto;
`;

const StyledSection = styled.div`
  background: #000;
`;

const StyledContainer = styled(Container)`
  min-height: 100vh;
  display: flex;
  align-items: center;
`;

const StyledEffect = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  filter: blur(0.45px) drop-shadow(0px 0px 0px #fff1);
  background: repeating-linear-gradient(
    90deg,
    #0002 0 2px,
    transparent 4px 37vmin
  );

  &:after {
    content: "";
    position: absolute;
    width: 120%;
    height: 100%;
    top: 0;
    left: 0;
    padding-left: 100px;
    opacity: 0.5;
    animation: film-scratch 0.45s steps(1) infinite;
    background: repeating-linear-gradient(
      90deg,
      #0002 0 2px,
      transparent 4px 37vmin
    );

    left: 30%;
    animation: effect-scratch 2s infinite;
  }

  @keyframes effect-scratch {
    0% {
      transform: translateX(0);
      opacity: 0.75;
    }
    10% {
      transform: translateX(-1%);
    }
    20% {
      transform: translateX(1%);
    }
    30% {
      transform: translateX(-2%);
    }
    40% {
      transform: translateX(3%);
    }
    50% {
      transform: translateX(-3%);
      opacity: 0.5;
    }
    60% {
      transform: translateX(8%);
    }
    70% {
      transform: translateX(-3%);
    }
    80% {
      transform: translateX(10%);
      opacity: 0.25;
    }
    90% {
      transform: translateX(20%);
    }
    100% {
      transform: translateX(30%);
    }
  }
`;

const StyledGrain = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;

  &:after {
    position: absolute;
    content: "";
    width: 110%;
    height: 110%;
    top: -5%;
    left: -5%;
    opacity: 0.25;
    background: repeating-linear-gradient(
      90deg,
      #0002 0 2px,
      transparent 4px 37vmin
    );
    background-image: repeating-conic-gradient(
        var(--black) 0%,
        transparent 0.00003%,
        transparent 0.0005%,
        transparent 0.00095%
      ),
      repeating-conic-gradient(
        var(--black) 0%,
        transparent 0.00005%,
        transparent 0.00015%,
        transparent 0.0009%
      );
    animation: grain 0.5s steps(1) infinite;
    filter: drop-shadow(0px 0px 1px black);
  }

  @keyframes grain {
    0%,
    100% {
      transform: translate(0, 0);
    }
    10% {
      transform: translate(-1%, -1%);
    }
    20% {
      transform: translate(1%, 1%);
    }
    30% {
      transform: translate(-2%, -2%);
    }
    40% {
      transform: translate(3%, 3%);
    }
    50% {
      transform: translate(-3%, -3%);
    }
    60% {
      transform: translate(4%, 4%);
    }
    70% {
      transform: translate(-4%, -4%);
    }
    80% {
      transform: translate(2%, 2%);
    }
    90% {
      transform: translate(-3%, -3%);
    }
  }
`;

const StyledContent = styled.div`
  background: linear-gradient(0deg, black, transparent);
  filter: sepia(0.25);

  &:after {
    content: "";
    width: 100%;
    height: 100%;
    box-shadow: 0 0 20vmin 0vmin var(--black) inset,
      0 0 3vmin 0.5vmin var(--black) inset, 0 0 1vmin 1vmin var(--black);
  }
`;

const PhotographySection: React.FunctionComponent<{
  className?: string;
}> = ({ className }) => {
  return (
    <StyledSection id={ELEMENT_ID.PHOTOGRAPHY_SECTION} className={className}>
      <StyledEffect>
        <StyledGrain>
          <StyledContent>
            <StyledContainer>
              <StyledRightSection>
                <ReelSlider />
              </StyledRightSection>
            </StyledContainer>
          </StyledContent>
        </StyledGrain>
      </StyledEffect>
    </StyledSection>
  );
};

export default PhotographySection;
