import React from "react";
import "./Menu.scss";

export default function Menu() {
  return (
    <>
      <nav
        style={{
          height: "400px",
          background: `url('${process.env.PUBLIC_URL}/images/image-hero-desktop.jpg')`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="nav_header">
          <div className="logo_menu">
            <h2>crowdfund</h2>
          </div>
          <ul className="nav__items">
            <li>About</li>
            <li>Discover</li>
            <li>Get Started</li>
          </ul>
        </div>
      </nav>
    </>
  );
}
