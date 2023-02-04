export interface IHamburgerButtonProps {
  className?: string;
  onChange?: (isOpen: boolean) => void;
  isOpen?: boolean;
}

export interface IStyledHamburgerButtonProps {
  $isOpen?: boolean;
}
