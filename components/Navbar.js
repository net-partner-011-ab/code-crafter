import React, { useState } from "react";
import Link from "next/link"; 
import Image from "next/image"

import logo from "../assets/img/bulma-logo.png"

export default function Navbar() {
  const [isActive, setIsActive] = useState(false);

  const handleBurgerClick = () => {
    setIsActive(!isActive);
  };

  return (
    <nav className="navbar is-white">
      <div className="container">
        <div className="navbar-brand">
          <Link href="/" className="navbar-item">
              <Image
                src={logo} 
                alt=""
                width={112}
                height={28}
              />
          </Link>
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
            <Link href="/" className="navbar-item">
              Home
            </Link>
            <Link href="/about" className="navbar-item">
              About
            </Link>
            <Link href="/services" className="navbar-item">
              Services
            </Link>
          </div>

          <div className="navbar-end">
            <div className="navbar-item pl-0">
              <div className="field is-grouped">
                <p className="control">
                </p>
                <p className="control">
                  <Link href="/contact" className="button is-black">
                   <span>Contact</span>
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}





