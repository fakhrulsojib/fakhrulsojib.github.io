import React from "react";
import "./Home.css";
import homeData from "../../assets/data/home.json";
import profileImage from "../../assets/images/profile.png";
import "animate.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faChevronDown } from "@fortawesome/free-solid-svg-icons";
import iconMap from "../../utils/iconMap";
import { useInView } from "../../hooks/useInView";

const Home: React.FC = () => {
  const [contentRef, contentInView] = useInView();
  const [portraitRef, portraitInView] = useInView();
  const { heading, name, tagline, resumeLink, about, socialLinks } = homeData;

  return (
    <section id="home" className="home">
      <div className="home-ambient" />
      <div className="home-inner">
        <div
          ref={contentRef}
          className={`home-content ${contentInView ? "home-content--visible" : ""}`}
        >
          <span className="home-greeting">{heading}</span>
          <h1 className="home-name">{name}</h1>
          <p className="home-tagline">{tagline}</p>
          <p className="home-about">{about}</p>
          <div className="home-actions">
            <a href={resumeLink} target="_blank" className="home-button home-button--primary">
              Resume
              <FontAwesomeIcon icon={faArrowRight} className="home-button-icon" />
            </a>
            <div className="social-links">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                  aria-label={link.name}
                >
                  {iconMap[link.icon] && (
                    <FontAwesomeIcon
                      icon={iconMap[link.icon]}
                      className="social-icon"
                    />
                  )}
                </a>
              ))}
            </div>
          </div>
        </div>
        <div
          ref={portraitRef}
          className={`home-portrait ${portraitInView ? "home-portrait--visible" : ""}`}
        >
          <div className="home-portrait-glow" />
          <div className="home-portrait-frame">
            <img
              src={profileImage}
              alt="Md Fakhrul Islam"
              className="home-portrait-image"
            />
          </div>
          <div className="home-portrait-ring" />
        </div>
      </div>
      <div className="home-scroll-hint">
        <span>Scroll to explore</span>
        <FontAwesomeIcon icon={faChevronDown} className="home-scroll-icon" />
      </div>
    </section>
  );
};

export default Home;
