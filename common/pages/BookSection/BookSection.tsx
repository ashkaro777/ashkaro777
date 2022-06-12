import React, { useCallback, useState } from "react";
import styled from "styled-components";
import AuthorNoteSection from "./components/AuthorNoteSection";
import TestimonySection from "./components/TestimonySection";

const StyledSection = styled.section<{ $showTestimony?: boolean }>`
  --sliding-section-width: 480px;
  --book-section-width: ${({ $showTestimony }) =>
    $showTestimony ? "120px" : "480px"};
  position: relative;
  min-height: 100vh;
  display: flex;
  gap: 2rem;
`;

const StyledBookContainer = styled.div<{ $showTestimony?: boolean }>`
  border: 1px solid green;
  max-width: var(--book-section-width);
  width: 100vw;
  transition: max-width 240ms ease-in-out 120ms;
  will-change: max-width;

  ${({ $showTestimony }) =>
    $showTestimony
      ? `
            transition: max-width 240ms ease-in-out;
        `
      : ""}
`;

const StyledMiddleContentContainer = styled.div`
  border: 1px solid red;
  flex: 1;
  max-width: calc(100vw - 480px);
`;

const BookSection: React.FC = () => {
  const [showTestimony, setShowTestimony] = useState(false);

  const handleShowTestomony = useCallback(() => {
    setShowTestimony(true);
  }, []);

  const handleHideTestomony = useCallback(() => {
    setShowTestimony(false);
  }, []);

  return (
    <StyledSection $showTestimony={showTestimony}>
      <StyledBookContainer $showTestimony={showTestimony}>
        Book Container
      </StyledBookContainer>
      <StyledMiddleContentContainer>
        <AuthorNoteSection />
      </StyledMiddleContentContainer>
      <TestimonySection
        show={showTestimony}
        onRequestShow={handleShowTestomony}
        onRequestHide={handleHideTestomony}
      />
    </StyledSection>
  );
};

export default BookSection;
