import React from "react";
// import "./Footer.css";
import portfolioData from "../../assets/data/portfolio.json";

const Footer: React.FC = () => {
  const { copyright } = portfolioData.footer;

  return (
    <footer className="footer">
      <p>{copyright}</p>
    </footer>
  );
};

export default Footer;
