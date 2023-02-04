import React from "react";
import styled from "styled-components";

const StyledBookCover = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const StyledBook = styled.div<{
  $bookSideImage: string;
  $bookBackImage: string;
  $width: string;
  $height: string;
}>`
  position: relative;
  width: ${({ $width }) => $width};
  height: ${({ $height }) => $height};
  box-shadow: 20px 20px 20px rgba(0, 0, 0, 0.2);
  transform-style: preserve-3d;
  transition: 0.5s;
  transform: rotateY(var(--rotate-angle));

  &:before {
    content: "";
    position: absolute;
    width: 60px;
    height: 100%;
    transform-origin: left;
    background: url(${({ $bookSideImage }) => $bookSideImage});
    background-position: center;
    transform: rotateY(90deg);
  }

  &:after {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    transform-origin: center;
    background: url(${({ $bookBackImage }) => $bookBackImage});
    background-position: center;
    transform: rotateY(180deg) translateZ(60px);
  }
`;

const StyledContainer = styled.div`
  --rotate-angle: 0deg;
  display: flex;
  align-items: center;
  justify-content: center;
  transform-style: preserve-3d;
  perspective: 1000px;
`;

const Book3dDisplay: React.FC<{
  className?: string;
  width?: string;
  height?: string;
  style?: React.CSSProperties & { "--rotate-angle"?: string };
  bookFrontImage: string;
  bookSideImage: string;
  bookBackImage: string;
}> = ({
  className,
  width = "383px",
  height = "567px",
  style,
  bookFrontImage,
  bookSideImage,
  bookBackImage,
}) => {
  return (
    <StyledContainer className={className} style={style}>
      <StyledBook
        $width={width}
        $height={height}
        $bookSideImage={bookSideImage}
        $bookBackImage={bookBackImage}
      >
        <StyledBookCover src={bookFrontImage} />
      </StyledBook>
    </StyledContainer>
  );
};

export default Book3dDisplay;
