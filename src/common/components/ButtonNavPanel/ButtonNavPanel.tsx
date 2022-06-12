import React, { useCallback, useMemo, useState } from "react";
import styled from "styled-components";

import { screenSmallerThan } from "common/utils/responsive";
import NavItem from "./components/NavItem";

const StyledContainer = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 14px;

  width: 100px;
  padding: 8px;
  border-radius: 777rem;

  ${screenSmallerThan.tablet} {
    gap: 12px;
    width: 68px;
  }
`;

const ButtonNavPanel: React.FunctionComponent<{
  className?: string;
  items: {
    id: string;
    label: string;
    icon: string;
    color?: string;
  }[];
  activeItemId?: string;
  onChange?: (id: string) => void;
}> = ({
  className,
  items = [],
  onChange,
  activeItemId: activeItemIdFromProps,
}) => {
  const [activeItemId, setActiveItemId] = useState<string>();

  /**
   * Making component controlled if onChange handler is provided
   */
  const activeItemId_ = onChange ? activeItemIdFromProps : activeItemId;

  const handleItemClick = useCallback(
    (id) => {
      setActiveItemId(id);
      if (onChange) onChange(id);
    },
    [onChange]
  );

  if (!items.length) return null;

  return (
    <StyledContainer className={className}>
      {items.map((item, i) => {
        const { id, icon, label, color } = item;
        return (
          <NavItem
            key={`${id}_${i}`}
            id={id}
            icon={icon}
            label={label}
            isActive={activeItemId_ === id}
            onClick={handleItemClick}
            color={color}
          />
        );
      })}
    </StyledContainer>
  );
};

export default ButtonNavPanel;
