import React from "react";
import BalloonGroup from "../components/Balloon";
import "../styles/Home.css";
import homeData from "../assets/data/home.json";
import "animate.css";

const Home: React.FC = () => {
  const { heading, name, tagline, resumeLink, about } = homeData;

  return (
    <section id="home" className="home">
      <div className="section-content">
        <h1 className="section-heading">
          {heading}
          <div className="home-name">{name}</div>
        </h1>
        <div className="home-tagline">{tagline}</div>
        <div className="home-about">{about}</div>
        <a href={resumeLink} target="_blank" className="home-button">
          Resume
        </a>
      </div>
      <BalloonGroup />
    </section>
  );
};

export default Home;
