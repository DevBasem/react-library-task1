import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

export default function About() {
  return (
    <section className="about main__bg-clr text-white d-flex">
      <div className="container d-flex flex-column align-items-center gap-3 my-auto">
        <div className="title">
          <h2 className="display-4 fw-bold">ABOUT COMPONENT</h2>
        </div>
        <div className="seprator d-flex align-items-center gap-3">
          <div className="line"></div>
          <FontAwesomeIcon icon={faStar} />
          <div className="line"></div>
        </div>
        <div className="sub-title">
          <div className="row">
            <div className="col-md">
              <p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
            </div>
            <div className="col-md">
              <p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
