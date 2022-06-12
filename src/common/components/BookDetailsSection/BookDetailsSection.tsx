import React from "react";
import styled from "styled-components";

import { ELEMENT_ID } from "common/constants/element";

const StyledBookDetailsSection = styled.div`
  min-height: 100vh;
  background: red;
`;

const BookDetailsSection: React.FunctionComponent<{
  className?: string;
}> = ({ className }) => {
  return (
    <StyledBookDetailsSection
      id={ELEMENT_ID.BOOK_SECTION}
      className={className}
    ></StyledBookDetailsSection>
  );
};

export default BookDetailsSection;
