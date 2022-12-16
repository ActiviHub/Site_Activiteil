import Card from "react-bootstrap/Card";
import React, { useContext } from "react";
import { ThemeContext } from "../../Context/ThemeContext";
import fb from "../../img/facebook-logo.svg";
import FormContact from "./FormContact";
import "./CardOver.css";
import { BsFillTelephoneFill } from "react-icons/bs";
import { ImHome } from "react-icons/im";

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
        <div className="mt-5 col-12 col-lg-3">
          <Card.Title
            className={`${theme ? `bg-primary text-light` : ` text-dark`}`}
          >
            <u className="fw-bold">
              <ImHome />
            </u>
            <span className="fw-bolder">
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
            <img src={fb} className="pt-2 App-fb" alt="facebook" />
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
