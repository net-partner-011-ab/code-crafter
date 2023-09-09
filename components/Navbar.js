import React, { useState } from "react";

export default function Navbar() {
  const [isActive, setIsActive] = useState(false);

  const handleBurgerClick = () => {
    setIsActive(!isActive);
  };

  return (
    <nav className="navbar is-white">
      <div className="container">
        <div className="navbar-brand">
          <a className="navbar-item" href="/">
            <img
              src="https://bulma.io/images/bulma-logo.png"
              alt="Bulma: a modern CSS framework based on Flexbox"
              width="112"
              height="28"
            />
          </a>
          <div
            className={`navbar-burger ${isActive ? "is-active" : ""}`}
            onClick={handleBurgerClick}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>

        <div
          id="navbar"
          className={`navbar-menu ${isActive ? "is-active" : ""}`}
        >
          <div className="navbar-start">
            <a className="navbar-item" href="/">
              Home
            </a>
            <a className="navbar-item" href="/about">
              About
            </a>
            <a className="navbar-item" href="/services">
              Services
            </a>
          </div>

          <div className="navbar-end">
            <div className="navbar-item pl-0">
              <div className="field is-grouped">
                <p className="control">
                </p>
                <p className="control">
                  <a
                    className="button is-black"
                    href="/contact"
                  >
                    <span>Contact</span>
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
