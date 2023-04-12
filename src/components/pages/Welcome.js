import React, { useContext } from "react";
import { HashLink as Link } from "react-router-hash-link";
import { ThemeContext } from "../../Context/ThemeContext";
// import logo from "../../img/logo_activiteil_ebe_web.svg";
import { LazyLoadImage } from "react-lazy-load-image-component";
import H2 from "../Elements/H2";
import "./welcome.css";
import team from "../../img/Photos/equipe-activiteil.jpg";
import "../../App.css";

const Welcome = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <>
      <div id="home">
        <div
          className={`p-3 mt-0 rounded-3 shadow-sm
          ${theme ? `bg-primary text-dark` : `bg-light text-light`}`}
          id="start"
        >
          <H2 content="Bienvenue" />
          <div className="col-sm-12 col-md-6 col-xl-8 mx-auto">
            <LazyLoadImage
              src={team}
              className="img-fluid shadow rounded"
              alt="photo de la team activiteil"
            />

            {/* <div className="main illustration text App-logo ">
              <H2Welcome content="Bienvenue Sur notre site web" />
            </div> */}
          </div>

          <div
            className={`rounded-2 p-lg-3 container-fluid
           ${theme ? `bg-primary text-light` : `bg-light text-dark`}
          `}
          >
            <div className="row align pt-lg-3">
              <div className="col-sm-12 col-md-8 offset-md-2">
                <h2
                  className={`pt-3  text-center 
                ${theme ? `bg-primary text-light` : `bg-light text-dark`}
                `}
                >
                  Nous souhaitons que notre site vous permette de trouver toute
                  information utile dans votre recherche.
                </h2>
              </div>

              <div className="pt-2 col-10 offset-2 col-md-6 offset-md-3">
                <h5
                  className={`pt-lg-3 text-start 
                ${theme ? `bg-primary text-light` : `bg-light text-dark`}
                `}
                >
                  Pour toute question supplémentaire, n'hésitez pas à nous
                  &nbsp;
                  <Link to="/contacts#contacts">
                    <button
                      type="button"
                      className={`btn btn-sm fw-bold
                    ${theme ? `btn-primary` : `btn-info`}
                    `}
                    >
                      CONTACTER
                    </button>
                  </Link>
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Welcome;
