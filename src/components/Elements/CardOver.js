import Card from "react-bootstrap/Card";
import React, { useContext } from "react";
import { ThemeContext } from "../../Context/ThemeContext";

import FormContact from "./FormContact";
import "./CardOver.css";
import { BsFillTelephoneFill } from "react-icons/bs";
import { ImHome } from "react-icons/im";
import photo from "../../img/Photos/photo_maison_nb.jpg";
// import PlaceholderImage from "../../img/Photos/photo_maison_nb.jpg";
import { LazyLoadImage } from "react-lazy-load-image-component";
// import "react-lazy-load-image-component/src/effects/blur.css";

const CardOver = ({ image, alt }) => {
  const { theme } = useContext(ThemeContext);
  return (
    <Card
      className={`mt-3 rounded-2  text-white ${
        theme ? `bg-primary border-dark text-light` : `border-lum text-dark`
      }`}
    >
      <Card.Img src={image} alt={alt} />

      {/* <div className="p-lg-5 rounded-2  opacity-75"> */}
      <div className="row">
        <div className="mt-lg-5 col-12 col-lg-3">
          <Card.Title
            className={`${theme ? `bg-primary text-light` : ` text-dark`}`}
          >
            <div>
              <LazyLoadImage
                src={photo}
                className="col-10 mt-5 mb-3 rounded img-fluid"
                alt="photo di siège d'Activiteil"
              />
            </div>

            <span className="fw-bolder">
              <u>
                <ImHome className="align-top" />
              </u>
              &nbsp; 3 Rue Boissy-d’Anglas <br /> 07400 Le Teil
            </span>
          </Card.Title>
          <Card.Text
            className={`fw-bolder ${
              theme ? `bg-primary text-light` : ` text-dark`
            }`}
          >
            <BsFillTelephoneFill /> 04 75 52 71 75
          </Card.Text>
          <a
            className="App-link"
            href="https://www.facebook.com/profile.php?id=100080645282553"
            target="_blank"
            rel="noopener noreferrer"
          >
            {/* <img src={fbLight} className="pt-2 App-fb" alt="facebook" /> */}
            <div
              className={`pt-2 App-fb fb-btn mb-5 ${
                theme ? `fb-btn-dark` : `fb-btn-light`
              }`}
            ></div>
          </a>
        </div>
        <div className="my-5 col-12 col-lg-9">
          <FormContact />
        </div>
      </div>
      {/* </div> */}
    </Card>
  );
};

export default CardOver;
