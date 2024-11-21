import React from "react";
import "./About.scss";

export default function About() {
  return (
    <div className="container mt-5 mb-5">
      <div className="row">
        <div className="col-12 col-md-6  d-flex justify-content-start align-items-center">
          <h1 className="about">ABOUT ME</h1>
        </div>
        <div className="col-12 col-md-6">
          <h2 className="text-light">
            I am a Front-End Developer based in Pakistan, and has Computer
            Science Background
          </h2>
          <p className="text-white-50 text-start">
            I am a front-end developer with strong proficiency in HTML, CSS,
            JavaScript, and React.JS. I specialize in building user-friendly and visually
            appealing web applications using React.js and am continuously
            enhancing my skills to gain deeper expertise in React development.
          </p>
        </div>
      </div>
    </div>
  );
}
