import React, { useState } from "react";
import pic1 from "../images/pic1.png";
import pic2 from "../images/pic2.png";
import pic3 from "../images/pic3.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

export default function Portfolio() {
  const [selectedImage, setSelectedImage] = useState(null);

  const viewImage = (imgSrc) => {
    setSelectedImage(imgSrc);
    document.body.classList.add("no-scroll");
  };

  const closeCardView = () => {
    setSelectedImage(null);
    document.body.classList.remove("no-scroll");
  };

  return (
    <section className="portfolio py-4">
      <div className="container d-flex flex-column align-items-center">
        <div className="title">
          <h2 className="fs-1 fw-bold sec__clr">PORTFOLIO COMPONENT</h2>
        </div>
        <div className="seprator d-flex align-items-center gap-3 pb-4 sec__clr">
          <div className="line sec__bg-clr"></div>
          <FontAwesomeIcon icon={faStar} />
          <div className="line sec__bg-clr"></div>
        </div>
        <div className="row g-5">
          <div className="col-lg-4 col-md-6">
            <div className="portfolio__card" onClick={() => viewImage(pic1)}>
              <img className="w-100 d-block" src={pic1} alt="pic1" />
              <div className="overlay">
                <FontAwesomeIcon icon={faPlus} />
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="portfolio__card" onClick={() => viewImage(pic2)}>
              <img className="w-100 d-block" src={pic2} alt="pic2" />
              <div className="overlay">
                <FontAwesomeIcon icon={faPlus} />
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="portfolio__card" onClick={() => viewImage(pic3)}>
              <img className="w-100 d-block" src={pic3} alt="pic3" />
              <div className="overlay">
                <FontAwesomeIcon icon={faPlus} />
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="portfolio__card" onClick={() => viewImage(pic1)}>
              <img className="w-100 d-block" src={pic1} alt="pic1" />
              <div className="overlay">
                <FontAwesomeIcon icon={faPlus} />
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="portfolio__card" onClick={() => viewImage(pic2)}>
              <img className="w-100 d-block" src={pic2} alt="pic2" />
              <div className="overlay">
                <FontAwesomeIcon icon={faPlus} />
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="portfolio__card" onClick={() => viewImage(pic3)}>
              <img className="w-100 d-block" src={pic3} alt="pic3" />
              <div className="overlay">
                <FontAwesomeIcon icon={faPlus} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {selectedImage && (
        <div className="portfolio__card-view" onClick={closeCardView}>
          <div className="container h-100 d-flex justify-content-center align-items-center">
            <div className="card-view d-flex justify-content-center align-items-center bg-success" onClick={(e) => e.stopPropagation()}>
              <img className="w-100" src={selectedImage} alt="" />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
