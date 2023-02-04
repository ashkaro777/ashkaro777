import React, { useCallback, useState } from "react";
import HamburgerButton from "common/components/HamburgerButton";

const AppNavigation: React.FunctionComponent = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = useCallback(() => {
    setIsMenuOpen((v) => !v);
  }, []);

  return (
    <div>
      <HamburgerButton isOpen={isMenuOpen} onChange={toggleMenu} />
    </div>
  );
};

export default AppNavigation;
