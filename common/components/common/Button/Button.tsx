import React, { useRef } from "react";
import styled from "styled-components";
import { useButton } from "@react-aria/button";

interface IStyledButtonProps {
  $outlined?: boolean;
  $secondary?: boolean;
}

const StyledButton = styled.button<IStyledButtonProps>`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  padding: 8px 1rem;

  font-weight: bold;
  color: #fff;
  background-color: transparent;
  border: 2px solid #fff;
  border-radius: 100rem;
`;

//-------------------------------

export interface IButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: any;
}

const Button: React.FunctionComponent<IButtonProps> = ({
  children,
  ...restProps
}) => {
  const ref = useRef<any>();
  let { buttonProps } = useButton(restProps as any, ref);

  return (
    <StyledButton {...restProps} {...buttonProps} ref={ref}>
      {children}
    </StyledButton>
  );
};

export default Button;
