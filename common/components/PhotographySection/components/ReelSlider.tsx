import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import styled from "styled-components";

import {
  screenLargerThan,
  screenSmallerThan,
} from "styles/utils/responsiveUtils";

import imgReelFrame from "../assets/reel_border.png";

const StyledTile = styled.div`
  position: relative;
  height: 320px;

  &:after {
    content: "";
    background-image: url(${imgReelFrame.src});
    background-size: 100% 100%;
    background-repeat: no-repeat;

    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
  }

  video {
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

interface ISliderItem {
  videoUrl: string;
}

const Tile: React.FunctionComponent<
  {
    className?: string;
  } & ISliderItem
> = ({ className, videoUrl }) => {
  return (
    <StyledTile className={className}>
      <video src={videoUrl} autoPlay loop muted></video>
    </StyledTile>
  );
};

const settings = {
  infinite: true,
  arrows: false,
  slidesToShow: 1,
  slidesToScroll: 1,
  centerPadding: "20%",
  centerMode: true,
  //------------------------

  autoplay: true,
  speed: 20000,
  autoplaySpeed: 0,
  cssEase: "linear",
};

const CONTENT =
  "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.";

const ITEMS: (ISliderItem & { [key: string]: any })[] = [
  {
    title: "Waqt ki Baatein - A dance short film",
    subtitle: "FEATURING: ASHISH JANGID | EDIT & SHOT BY: JAY ARORA",
    description: CONTENT,
    videoUrl: "/assets/videos/dance-grains.mp4",
  },
  {
    title: "Project 2 title",
    subtitle: "Team details",
    description: CONTENT,
    videoUrl: "/assets/videos/solitude-grains.mp4",
  },
  {
    title: "Project 3 title",
    subtitle: "Team details",
    description: CONTENT,
    videoUrl: "/assets/videos/walking-grains.mp4",
  },
];

const StyledSliderContainer = styled.div`
  position: relative;
  height: 320px;

  &:before,
  &:after {
    content: "";
    position: absolute;
    height: 100%;
    width: 30%;
    top: 0;
    z-index: 1;
  }

  &:before {
    left: 0;
    background: linear-gradient(
      270deg,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 1) 96%
    );
  }

  &:after {
    right: 0;
    background: linear-gradient(
      90deg,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 1) 96%
    );
  }
`;

const StyleTitle = styled.h3`
  text-align: center;
  color: #fff;
  font-size: 32px;
  font-weight: 100;
  letter-spacing: 1px;

  ${screenSmallerThan.tablet} {
    text-align: left;
  }
`;

const StyleSubtitle = styled.p`
  text-align: center;
  color: #ffffff45;
  font-size: 16px;
  font-weight: 100;
  letter-spacing: 1px;

  ${screenSmallerThan.tablet} {
    text-align: left;
  }
`;

const StyleDescription = styled.p`
  text-align: center;
  color: #ffffff45;
  font-size: 16px;
  font-weight: 100;
  letter-spacing: 1px;
  text-align: right;

  ${screenSmallerThan.tablet} {
    text-align: center;
  }

  ${screenLargerThan.tablet} {
    max-width: 480px;
    margin-left: auto;
  }
`;

const StyledContainer = styled.div`
  height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const ReelSlider: React.FunctionComponent<{
  className?: string;
}> = ({ className }) => {
  const [currentItemIndex, setCurrentItemIndex] = useState(0);
  const [showItem, setShowItem] = useState(false);
  const content = ITEMS[currentItemIndex];

  useEffect(() => {
    if (!showItem) {
      setShowItem(true);
    }
  }, [showItem]);

  return (
    <StyledContainer className={className}>
      {showItem && (
        <div className="fade-in">
          <StyleTitle>{content.title}</StyleTitle>
          <StyleSubtitle>{content.subtitle}</StyleSubtitle>
        </div>
      )}

      <StyledSliderContainer className="mt-5">
        <Slider
          {...settings}
          afterChange={(index) => {
            setCurrentItemIndex(index);
            setShowItem(false);
            console.log("AFASFASF", { index });
          }}
        >
          {ITEMS.map((item, i) => {
            return <Tile key={i} {...item} />;
          })}
        </Slider>
      </StyledSliderContainer>

      <StyleDescription className="mt-4 fade-in">
        {content.description}
      </StyleDescription>
    </StyledContainer>
  );
};

export default ReelSlider;
