import { forwardRef } from "react";

interface HamburgerMenuProps {
  isMenuOpen: boolean;
  toggleMenu: () => void;
}

const HamburgerMenu = forwardRef<HTMLDivElement, HamburgerMenuProps>(
  ({ isMenuOpen, toggleMenu }, ref) => (
    <div
      ref={ref}
      className={`hamburger ${isMenuOpen ? "open" : ""}`}
      onClick={toggleMenu}
    >
      <div></div>
      <div></div>
      <div></div>
    </div>
  )
);

export default HamburgerMenu;
