import { forwardRef } from "react";

interface NavItem {
  id: string;
  name: string;
}

interface NavigationProps {
  isMenuOpen: boolean;
  navigation: NavItem[];
  selectedSection: string;
  setSelectedSection: (section: string) => void;
  closeMenu: () => void;
}

const Navigation = forwardRef<HTMLElement, NavigationProps>(
  (
    { isMenuOpen, navigation, selectedSection, setSelectedSection, closeMenu },
    ref
  ) => (
    <nav ref={ref} className={`nav ${isMenuOpen ? "open" : ""}`}>
      <ul className="nav-list">
        {navigation.map((navItem) => (
          <li key={navItem.id}>
            <a
              href={`#${navItem.id}`}
              className={`nav-link ${
                selectedSection === navItem.id ? "selected" : ""
              }`}
              onClick={() => {
                setSelectedSection(navItem.id);
                closeMenu();
              }}
            >
              {navItem.name}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
);

export default Navigation;
