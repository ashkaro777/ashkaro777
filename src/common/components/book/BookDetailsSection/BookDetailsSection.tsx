import React from "react";
import styled from "styled-components";

import { ELEMENT_ID } from "common/constants/element";
import BookDetails from "../BookDetails";
import TestimonyCarousel from "../TestimonyCarousel";
import BookDisplay from "../BookDisplay";
import BookSocialButtons from "../BookSocialButtons";
import { screenLargerThan } from "common/utils/responsive";

const StyledLeftSection = styled.div`
  flex: 2;
`;

const StyledRightSection = styled.div`
  flex: 3;
`;

const StyledTestimonySection = styled(TestimonyCarousel)`
  width: 100%;
`;

const StyledtopSection = styled.div`
  ${screenLargerThan.tablet} {
    display: flex;
    gap: 1rem;
  }
`;

const StyledContentContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;

  padding: 1rem;
  width: 1200px;
  max-width: 100%;
`;

const StyledSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding-top: 4rem;

  background-color: #0c0c0c;
  color: #fff;
  
`;

const BookDetailsSections: React.FC = () => {
  return (
    <StyledSection id={ELEMENT_ID.BOOK_SECTION}>
      <StyledContentContainer>
        <StyledtopSection>
          <StyledLeftSection>
            <BookDisplay />
          </StyledLeftSection>

          <StyledRightSection className="mt-5 mt-md-0">
            <BookDetails />
          </StyledRightSection>
        </StyledtopSection>

        <BookSocialButtons className="mt-3 d-md-none" />

        <StyledTestimonySection className="mt-3" />
      </StyledContentContainer>
    </StyledSection>
  );
};

export default BookDetailsSections;
