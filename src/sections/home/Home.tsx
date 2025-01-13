import React from "react";
import BalloonGroup from "../../components/balloon/Balloon";
import "./Home.css";
import homeData from "../../assets/data/home.json";
import "animate.css";

const Home: React.FC = () => {
  const { heading, name, tagline, resumeLink, about, socialLinks } = homeData;

  return (
    <section id="home" className="home">
      <div className="section-content">
        <h1 className="section-heading">
          {heading}
          <div className="home-name">{name}</div>
        </h1>
        <div className="home-tagline">{tagline}</div>
        <div className="home-about">{about}</div>
        <div className="home-actions">
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
              >
                <img src={link.icon} alt={link.name} className="social-icon" />
              </a>
            ))}
          </div>
        </div>
      </div>
      <BalloonGroup />
    </section>
  );
};

export default Home;
