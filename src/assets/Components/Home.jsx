import React from "react";
import avatar from "./../images/avatar.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

export default function Home() {
  return (
    <section className="home main__bg-clr text-white">
      <div className="d-flex flex-column align-items-center gap-3">
        <div>
          <img src={avatar} alt="avatar" width={"250px"} />
        </div>
        <div className="title">
          <h2 className="display-4 fw-bold">START FRAMEWORK</h2>
        </div>
        <div className="seprator d-flex align-items-center gap-3">
          <div className="line"></div>
          <FontAwesomeIcon icon={faStar} />
          <div className="line"></div>
        </div>
        <div className="sub-title">
          <p>Graphic Artist - Web Designer - Illustrator</p>
        </div>
      </div>
    </section>
  );
}
