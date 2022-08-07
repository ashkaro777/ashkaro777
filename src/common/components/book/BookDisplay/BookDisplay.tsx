import React from "react";
import styled from "styled-components";

const StyledBook = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 18vw;
  max-width: 100%;
  height: 24vw;
  max-height: 60vh;
  border: 1px solid #fff;
  border-radius: 3px;
`;

const StyledContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const BookDisplay: React.FC = () => {
  return (
    <StyledContainer>
      <StyledBook>Book</StyledBook>
    </StyledContainer>
  );
};

export default BookDisplay;
