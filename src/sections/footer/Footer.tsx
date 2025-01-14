import React from "react";
import "./Footer.css";
import footerData from "../../assets/data/footer.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import iconMap from "../../utils/iconMap";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { useInView } from "../../hooks/useInView";

const Footer: React.FC = () => {
  const [contentRef, contentInView] = useInView();
  const { socialLinks, copyright, email } = footerData;

  return (
    <footer id="contact" className="footer">
      <div
        ref={contentRef}
        className={`footer-content ${
          contentInView ? "animate__animated animate__fadeInUp" : ""
        }`}
      >
        <h2 className="footer-heading">Let's Connect</h2>
        <a
          href={`mailto:${email}`}
          className="footer-email animate__animated animate__fadeIn animate__delay-1s"
        >
          <FontAwesomeIcon icon={faEnvelope} className="email-icon" />
          {email}
        </a>
        <div className="social-links animate__animated animate__fadeIn animate__delay-1s">
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
        <p className="copyright animate__animated animate__fadeIn animate__delay-2s">
          {copyright}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
