import React from "react";
import "./Components/Hero.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowTurnDown } from '@fortawesome/free-solid-svg-icons'

export default function HeroSection() {
  return (
    <div className="bg-dark">
      <div className="container ">
        <div className="row justify-content-center ">
          <div className="col-12 col-md-6 mt-5 d-flex justify-content-center align-items-start flex-column">
            <h1 className="text-light  heading">
              Hi, I am MUHAMMAD FAIZAN
            </h1>
            <p className="text-light description">
              Pakistan based front end developer passionate about building
              accessible and user friendly websites
            </p>
            <button className=" contact-btn">Contact me <FontAwesomeIcon className="fontIcon" icon={faArrowTurnDown} /></button>
          </div>
          <div className="col-12 col-md-6 mt-5">
            <img className="mt-5 mb-5 " src="/public/file_2024-11-19_20.54.30.webp" width='100%' alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
