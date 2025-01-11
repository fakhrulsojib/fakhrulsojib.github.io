import React, { useState, useEffect, useRef } from "react";
import ThemeToggler from "../../hooks/ThemeToggler";
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

  const navRef = useRef<HTMLElement | null>(null);
  const hamburgerRef = useRef<HTMLDivElement | null>(null);
  const lastScrollY = useRef(0); // Track the last scroll position

  // Handle section highlighting on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setSelectedSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
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

  // Close menu on outside click
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

  // Handle hiding and showing header on scroll
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY.current && currentScrollY > 50) {
        setIsHeaderHidden(true); // Hide header when scrolling down
      } else {
        setIsHeaderHidden(false); // Show header when scrolling up
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  return (
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
  );
};

export default Header;
