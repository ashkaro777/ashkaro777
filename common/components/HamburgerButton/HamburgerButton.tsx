import React, { useCallback, useRef } from "react";

import Random from "common/utils/random";
import {
  StyledHamburgerButton,
  StyledHamburgerIcon,
  StyledHamburgerInput,
} from "./components";
import { IHamburgerButtonProps } from "./interfaces";

const HamburgerButton: React.FunctionComponent<IHamburgerButtonProps> = ({
  className,
  onChange,
  isOpen,
}) => {
  const uid = useRef(Random.getRandomKey(8, "hamburger_"));

  const handleChange = useCallback(
    (e) => {
      if (onChange instanceof Function) {
        onChange(e.target.checked);
      }
    },
    [onChange]
  );

  return (
    <StyledHamburgerButton
      htmlFor={uid.current}
      className={className}
      $isOpen={isOpen}
    >
      <StyledHamburgerInput
        id={uid.current}
        name={uid.current}
        type="checkbox"
        checked={onChange ? isOpen : undefined}
        onChange={handleChange}
      />
      <StyledHamburgerIcon />
    </StyledHamburgerButton>
  );
};

export default HamburgerButton;
