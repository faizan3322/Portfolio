import React from "react";
import "./Projects.scss";
import LineBreak from "./LineBreak";
import { content } from "../assets/content";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareArrowUpRight } from '@fortawesome/free-solid-svg-icons'

export default function Projects() {
    
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-6">
            <h1 className="text-light mt-5">FEATURED PROJECTS</h1>
            <p className="text-white-50">
              Here are some of the selecte projects that showcase my passion for
              front-end development.{" "}
            </p>
          </div>
        </div>
        {content && content.map((det)=>(
            <div className="row mt-5 mb-5">
            <div className="col-12 col-md-6">
              <div className=" project-width d-flex justify-content-center align-items-center">
                  <img src={det.image} className="project-img" width='100%'/>
              </div>
            </div>
            <div className="col-12 col-md-6 project-list">
              <h2 className="text-light mt-4">{det.title}</h2>
              <h6 className="text-white-50">
                {det.details}
              </h6>
              <p className="text-light">Project Info</p>
              <LineBreak/>
              <div className="d-flex justify-content-between align-item-center info">
                  <p className="text-light">Year</p>
                  <p className="text-light">{det.year}</p>
              </div>
              <LineBreak/>
              <div className="d-flex justify-content-between align-item-center info">
                  <p className="text-light">Role</p>
                  <p className="text-light">Front End Developer</p>
              </div>
              <LineBreak/>
              <a href={det.link} target="_blank" className="project-Link">LIVE DEMO <FontAwesomeIcon className="fontIcon" icon={faSquareArrowUpRight}/></a>
            </div>
          </div>
        ))}
        
        
      </div>
    </div>
  );
}
