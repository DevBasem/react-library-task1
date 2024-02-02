import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";

export default function Info() {
  return (
    <section className="info sec__bg-clr text-white">
      <div className="container info-wrapper">
        <div className="location">
          <h2 className="title">LOCATION</h2>
          <p>2215 John Daniel Drive Clark, MO 65243</p>
        </div>
        <div className="web text-center">
          <h2 className="title">AROUND THE WEB</h2>
          <div className="socials">
            <div className="social-link facebook">
              <FontAwesomeIcon icon={faFacebook} />
            </div>
            <div className="social-link twitter">
              <FontAwesomeIcon icon={faTwitter} />
            </div>
            <div className="social-link linkedin">
              <FontAwesomeIcon icon={faLinkedin} />
            </div>
            <div className="social-link global">
              <FontAwesomeIcon icon={faGlobe} />
            </div>
          </div>
        </div>
        <div className="freelancer text-center">
          <h2 className="title">ABOUT FREELANCER</h2>
          <p>Freelance is a free to use, licensed Bootstrap theme created by Route</p>
        </div>
      </div>
    </section>
  );
}
