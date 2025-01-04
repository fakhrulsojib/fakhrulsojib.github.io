import React from "react";
// import "./Contact.css";
import portfolioData from "../../assets/data/portfolio.json";
import Footer from "../common/Footer";

const Contact: React.FC = () => {
  const { socialLinks } = portfolioData.contact;

  return (
    <>
      <section id="contact" className="contact">
        <div className="section-content">
          <h2 className="section-heading">Connect with Me</h2>
          <div className="social-links">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
              >
                <img
                  src={link.icon}
                  alt={`${link.name} logo`}
                  className="social-icon"
                />
              </a>
            ))}
          </div>
        </div>
        <Footer />
      </section>
    </>
  );
};

export default Contact;
