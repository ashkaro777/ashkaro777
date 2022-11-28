import React from "react";
import styled from "styled-components";
import Book3dDisplay from "../Book3dDisplay";

import imgBookFront from "public/assets/images/book/cover.jpg";
import imgBookSide from "public/assets/images/book/side.jpg";
import imgBookBack from "public/assets/images/book/back.jpg";

const StyledBook = styled(Book3dDisplay)`
  &:hover {
    --rotate-angle: 35deg;
    box-shadow: 0ppx 20px 20px rgba(0, 0, 0, 0.2);
  }

  &:active {
    --rotate-angle: 180deg;
    box-shadow: 0ppx 20px 20px rgba(0, 0, 0, 0.2);
  }
`;

const BookDisplay: React.FC = () => {
  return (
    <StyledBook
      width="304px"
      height="434px"
      bookFrontImage={imgBookFront.src}
      bookSideImage={imgBookSide.src}
      bookBackImage={imgBookBack.src}
    />
  );
};

export default BookDisplay;
