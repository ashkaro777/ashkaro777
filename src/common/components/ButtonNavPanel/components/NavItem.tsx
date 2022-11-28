import React, { useCallback } from "react";
import styled from "styled-components";
import lodashGet from "lodash/get";

import { squareSizing } from "common/utils/responsive/sizingUtils";
import { screenSmallerThan } from "common/utils/responsive";

const StyledImage = styled.img`
  ${squareSizing("26px", "--icon-size")}
  border-radius: inherit;
`;

const StyledNavItem = styled.a<{ $isActive?: boolean; $color?: string }>`
  --active-size: 80px;
  ${squareSizing("18px")}

  display: inline-flex;
  align-items: center;
  justify-content: center;

  background-color: ${(props) => props.$color || "#fff"};
  border-radius: 777rem;
  cursor: pointer;
  border: 2px solid #fff;

  ${screenSmallerThan.tablet} {
    --active-size: 48px;
    --size: 10px;
  }

  & > * {
    transition: filter 240ms ease-in-out;
  }

  ${(props) =>
    props.$isActive
      ? `
            --size: var(--active-size) !important; 
            transition: all 240ms ease-in-out 120ms;

            & > * {
                filter: opacity(1);
                transition: filter 0ms;
            }
        `
      : `
            transition: all 400ms ease-in-out;

            & > * {
                filter: opacity(0);
                transition: filter 240ms ease-in-out;
            }
        `}
`;

const NavItem: React.FunctionComponent<{
  id: string;
  label: string;
  icon: string;
  color?: string;
  className?: string;
  isActive?: boolean;
  onClick?: (id: string) => void;
}> = ({ className, label, onClick, icon, id, isActive, color }) => {
  const handleClick = useCallback(() => {
    if (onClick) onClick(id);
  }, [onClick, id]);

  return (
    <StyledNavItem
      $isActive={isActive}
      $color={color}
      className={className}
      onClick={handleClick}
      href={`#${id}`}
    >
      <StyledImage src={lodashGet(icon, "src", icon)} alt={label} />
    </StyledNavItem>
  );
};

export default NavItem;
