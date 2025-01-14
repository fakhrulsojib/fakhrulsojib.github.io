import React from "react";
import "./Footer.css";
import footerData from "../../assets/data/footer.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import iconMap from "../../utils/iconMap";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Footer: React.FC = () => {
  const { socialLinks, copyright, email } = footerData;

  return (
    <footer id="contact" className="footer">
      <div className="footer-content">
        <h2 className="footer-heading">Let's Connect</h2>
        <a href={`mailto:${email}`} className="footer-email">
          <FontAwesomeIcon icon={faEnvelope} className="email-icon" />
          {email}
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
        <p className="copyright">{copyright}</p>
      </div>
    </footer>
  );
};

export default Footer;
