import React from "react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import "./Footer.css";
import {
  SlSocialFacebook,
  SlSocialInstagram,
  SlSocialTwitter,
} from "react-icons/sl";

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="social-links">
          <div className="social-icons">
            <a href="https://twitter.com/jjcubidesmonje" target="_blank">
              <FaTwitter className="social-icon" />
            </a>
            <a
              href="https://www.instagram.com/juanjosecubidesmonje/"
              target="_blank"
            >
              <FaInstagram className="social-icon" />
            </a>
            <a
              href="https://www.facebook.com/JuanJoseCubidesM/"
              target="_blank"
            >
              <FaFacebook className="social-icon" />
            </a>
          </div>
        </div>
        <div>
          <h6 className="rights">#unanuevamaneradeservir</h6>
        </div>
        <div className="links-container">
          <a href="#">Juan José Cubides</a>
          <a target="_blank" href="https://github.com/JohnRodriguezM">
            Contacto del Desarrollador
          </a>
        </div>
      </div>
    </footer>
  );
}
