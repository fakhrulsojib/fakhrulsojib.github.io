import React from "react";
import BalloonGroup from "../../components/balloonGroup/BalloonGroup";
import "./Home.css";
import homeData from "../../assets/data/home.json";
import "animate.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import iconMap from "../../utils/iconMap";
import { useInView } from "../../hooks/useInView";

const Home: React.FC = () => {
  const [contentRef, contentInView] = useInView();
  const [balloonRef, balloonInView] = useInView();
  const { heading, name, tagline, resumeLink, about, socialLinks } = homeData;

  return (
    <section id="home" className="home">
      <div
        ref={contentRef}
        className={`home-content ${
          contentInView ? "animate__animated animate__fadeInLeft" : ""
        }`}
      >
        <h1
          className={`section-heading ${
            contentInView
              ? "animate__animated animate__fadeIn animate__delay-0.5s"
              : ""
          }`}
        >
          {heading}
          <div className="home-name">{name}</div>
        </h1>
        <div
          className={`home-tagline ${
            contentInView
              ? "animate__animated animate__fadeIn animate__delay-0.5s"
              : ""
          }`}
        >
          {tagline}
        </div>
        <div
          className={`home-about ${
            contentInView
              ? "animate__animated animate__fadeIn animate__delay-1s"
              : ""
          }`}
        >
          {about}
        </div>
        <div
          className={`home-actions ${
            contentInView
              ? "animate__animated animate__fadeInUp animate__delay-1s"
              : ""
          }`}
        >
          <a href={resumeLink} target="_blank" className="home-button">
            Resume
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
        ref={balloonRef}
        className={`balloon-group ${
          balloonInView ? "animate__animated animate__fadeInRight" : ""
        }`}
      >
        <BalloonGroup />
      </div>
    </section>
  );
};

export default Home;
