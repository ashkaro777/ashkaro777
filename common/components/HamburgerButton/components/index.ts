import styled from "styled-components";
import { IStyledHamburgerButtonProps } from "../interfaces";

export const StyledHamburgerInput = styled.input`
  /* position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%; */
  opacity: 0;
  pointer-events: none;
`;

export const StyledHamburgerIcon = styled.span`
  position: absolute;
  left: 50%;
  top: 50%;
  width: 32px;
  height: 32px;
  transform: translate(-50%, -50%);
  /* border: 1px solid green; */
  pointer-events: none;

  &:before,
  &:after {
    content: "";
    position: absolute;
    left: 0;
    height: 3px;
    width: 100%;
    border-radius: 777rem;
    background: #fff;
    transition: transform 180ms ease-in-out;
  }

  &:before {
    top: 50%;
    transform: translateY(-7px);
  }

  &:after {
    top: 50%;
    transform: translateY(4px);
  }
`;

export const StyledHamburgerButton = styled.label<IStyledHamburgerButtonProps>`
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;

  width: 64px;
  height: 64px;
  /* border: 1px solid red; */
  cursor: pointer;

  &:after {
    position: absolute;
    content: "";
    width: 100%;
    height: 100%;
    border-radius: 777rem;
    background: rgba(0, 0, 0, 0.2);
    filter: opacity(0);
    z-index: 0;
    transition: filter 240ms ease-in-out;
  }

  &:hover:after {
    filter: opacity(1);
  }

  ${StyledHamburgerInput} {
    z-index: 1;

    &:checked ~ ${StyledHamburgerIcon} {
      &:before {
        transform: translateY(0) rotate(43deg);
      }

      &:after {
        transform: translateY(0) rotate(-43deg);
      }
    }
  }
`;
