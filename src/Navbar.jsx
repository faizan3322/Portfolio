import React from "react";
import './Navbar.scss'

export default function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-dark fixed-top  shadow">
        <div className="container-fluid">
          <a className="navbar-brand fs-4 logo text-light" href="#">
           Muhammad Faizan
          </a>
          <button
            className="navbar-toggler text-dark"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="toggler-iconn "> &#9776; </span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 gap-4 fs-5" >
              <li className="nav-item">
                <a className="nav-link text-light" aria-current="page" href="#projects">
                  Projects
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-light" href="#about">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-light me-5" href="#Contact">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      
    </div>
  );
}
