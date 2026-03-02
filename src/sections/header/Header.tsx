import React, { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import ThemeToggler from "../../components/themeToggler/ThemeToggler";
import Navigation from "./Navigation";
import HamburgerMenu from "./HamburgerMenu";
import portfolioData from "../../assets/data/navigation.json";
import "./header.css";

const Header: React.FC = () => {
  const { navigation } = portfolioData;

  const [selectedSection, setSelectedSection] = useState<string>(
    window.location.hash ? window.location.hash.slice(1) : "home"
  );
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isHeaderHidden, setIsHeaderHidden] = useState(false);
  const [showGoToTop, setShowGoToTop] = useState(false);

  const navRef = useRef<HTMLElement | null>(null);
  const hamburgerRef = useRef<HTMLDivElement | null>(null);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const rect = entry.target.getBoundingClientRect();
          const windowHeight = window.innerHeight;
          const threshold = windowHeight * 0.2;

          if (rect.top <= threshold && rect.bottom > threshold) {
            setSelectedSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-20% 0px -80% 0px" }
    );

    navigation.forEach((navItem) => {
      const section = document.getElementById(navItem.id);
      if (section) {
        observer.observe(section);
      }
    });

    return () => {
      navigation.forEach((navItem) => {
        const section = document.getElementById(navItem.id);
        if (section) {
          observer.unobserve(section);
        }
      });
    };
  }, [navigation]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;
      if (
        hamburgerRef.current &&
        !hamburgerRef.current.contains(target) &&
        navRef.current &&
        !navRef.current.contains(target)
      ) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY.current && currentScrollY > 50) {
        setIsHeaderHidden(true);
      } else {
        setIsHeaderHidden(false);
      }

      setShowGoToTop(currentScrollY > window.innerHeight * 0.5);

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <header className={`header ${isHeaderHidden ? "hidden" : ""}`}>
        <Navigation
          ref={navRef}
          isMenuOpen={isMenuOpen}
          navigation={navigation}
          selectedSection={selectedSection}
          setSelectedSection={setSelectedSection}
          closeMenu={() => setIsMenuOpen(false)}
        >
          <ThemeToggler />
        </Navigation>
        <HamburgerMenu
          ref={hamburgerRef}
          isMenuOpen={isMenuOpen}
          toggleMenu={toggleMenu}
        />
      </header>
      <button
        className={`go-to-top ${showGoToTop ? "visible" : ""}`}
        onClick={scrollToTop}
        aria-label="Go to top"
      >
        <FontAwesomeIcon icon={faArrowUp} />
      </button>
    </>
  );
};

export default Header;
