import React from "react";
import styled from "styled-components";

const StyleContent = styled.p`
  margin-bottom: 10px;
  font-size: 24px;
`;

const StyleName = styled.h3`
  margin-bottom: 0;
  font-size: 28px;
`;

const StyledCard = styled.div`
  text-align: center;
`;

const TestimonyCard: React.FC<{
  className?: string;
  name: string;
  title: string;
  message: string;
}> = ({ className, name, title, message }) => {
  return (
    <StyledCard className={className}>
      <StyleContent>{message}</StyleContent>
      <StyleName>
        {name} {title ? `(${title})` : ""}
      </StyleName>
    </StyledCard>
  );
};

export default TestimonyCard;
