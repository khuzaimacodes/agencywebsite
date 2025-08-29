import React from "react";

export default function HeaderTop() {
  return (
    <div className="header-top-section style1 fix">
      <div className="container">
        <div className="header-top-wrapper">
          <ul className="contact-list">
            <li>
              <i className="far fa-envelope" />
              <a href="mailto:khuzaima@kzwebsoulutions.com" className="link">
                khuzaima@kzwebsoulutions.com
              </a>
            </li>
            <li>
              <i className="fa-solid fa-phone-volume" />
              <a href="tel:+447575842908">+44 7575 842908</a>
            </li>
          </ul>
          <div className="top-right">
            <div className="social-icon d-flex align-items-center">
              <span>Follow Us:</span>
              <a href="https://www.facebook.com/share/14EanMPiFdT/" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-facebook-f" />
              </a>
              <a href="https://www.instagram.com/khuzaimacreates/" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-instagram" />
              </a>
              <a href="https://www.linkedin.com/in/khuzaima-afzal-0a4a95279?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer">
                <i className="fa-brands fa-linkedin-in" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
