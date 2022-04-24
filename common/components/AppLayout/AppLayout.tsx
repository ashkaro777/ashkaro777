import React from "react";
import styled from "styled-components";

const StyledAppLayout = styled.div`
  min-height: 100vh;
`;

const AppLayout: React.FunctionComponent = ({ children }) => {
  return <StyledAppLayout>{children}</StyledAppLayout>;
};

export default AppLayout;
