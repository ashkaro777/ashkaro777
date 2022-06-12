import React from "react";
import styled from "styled-components";

const StyledTestimonyContainer = styled.div<{ $isOpen?: boolean }>`
  display: flex;

  border: 1px solid blue;
  position: fixed;
  right: 0;
  height: 100%;
  border: 2px dashed #555d9b;
  background-color: #232323;
  width: var(--sliding-section-width);
  max-width: 100vw;
  z-index: 1;

  transform: translateX(calc(100%));
  transition: transform 320ms ease-in-out;
  will-change: transform;

  ${({ $isOpen }) =>
    $isOpen
      ? `
            transform: translateX(0); 
            transition: transform 320ms ease-out 80ms;
            box-shadow: -132px 7px 300px 45px rgba(0,0,0,0.92);
        `
      : ""}
`;

const StyledBackdrop = styled.div<{ $isOpen?: boolean }>`
  position: fixed;
  width: 100vw;
  left: 0;
  height: 100vh;
  top: 0;
  opacity: 0.1;
`;

const StyledToggleButton = styled.button`
  background: #555d9b;
  color: #fff;
  border: none;
  outline: none;
  position: absolute;
  top: 50%;
  transform: rotate(270deg);
  font-size: 32px;
  left: -108px;
  z-index: 2;
`;

const TestimonyContainer = styled.div`
  width: 100%;
  padding: 1rem;
  height: 100%;
  overflow: auto;
`;

const TestimonyCard = styled.div`
  height: 160px;
  background: rgba(255, 0, 0, 0.4); 
`;

const TestimonySection: React.FC<{
  onRequestShow: () => void;
  onRequestHide: () => void;
  show?: boolean;
}> = ({ onRequestShow, onRequestHide, show = false }) => {
  return (
    <>
      {show && <StyledBackdrop onClick={onRequestHide} />}{" "}
      <StyledTestimonyContainer $isOpen={show}>
        <StyledToggleButton onClick={show ? onRequestHide : onRequestShow}>
          Testimony
        </StyledToggleButton>

        <TestimonyContainer>
          <TestimonyCard className="mt-4" />
          <TestimonyCard className="mt-4" />
          <TestimonyCard className="mt-4" />
          <TestimonyCard className="mt-4" />
          <TestimonyCard className="mt-4" />
          <TestimonyCard className="mt-4" />
          <TestimonyCard className="mt-4" />
          <TestimonyCard className="mt-4" />
        </TestimonyContainer>
      </StyledTestimonyContainer>
    </>
  );
};

export default TestimonySection;
