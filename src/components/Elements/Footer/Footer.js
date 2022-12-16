import "./Footer.scss";
import React, { useContext } from "react";
import { ThemeContext } from "../../../Context/ThemeContext";
import mairie from "../../../img/logos-footer/logo_teil-85x85.png";
import dep from "../../../img/logos-footer/Ardeche le Departement 2021_N-85x85.png";
import etcld from "../../../img/logos-footer/logo_ETCLD-85x85.jpg";
import reg from "../../../img/logos-footer/logo-partenaire-region-auvergne-rhone-alpes-rvb-85x85.png";
// import BadgeActivity from "../BadgeActivity";
import activitiesDatas from "../../Datas/activitiesDatas";
import { BadgeActivityStyle } from "../BadgeActivity.style";

const Footer = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <footer
      className={`footer border-top shadow-lg  ${
        theme
          ? `bg-primary border-light text-light`
          : `bg-lum border-dark text-primary`
      }`}
    >
      <div className="container">
        <div className="row">
          <div className="col-12 mt-sm-0 col-md-6 mt-5 mt-md-0 col-lg-3">
            <div className="footer-widget">
              <h3>Nous Rencontrer</h3>
              <div className="footer-widget-content">
                Activiteil
                <strong className="contact-link text-danger">
                  04 75 52 71 75
                </strong>
                <span>3 Rue Boissy-d'Anglas 07400 Le Teil</span>
                {/* <div className="footer-social">
                  <ul>
                    <li>
                      <a href="#">
                        <i className="fa fa-facebook"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-linkedin"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-youtube"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-rss"></i>
                      </a>
                    </li>
                  </ul>
                </div> */}
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6  mt-5 mt-md-0   col-lg-3">
            <div className="footer-widget">
              <h3 className="text-capitalize">Nos Activités</h3>
              <div className="footer-widget-content">
                <div className="media">
                  {activitiesDatas.map((activity) => (
                    <BadgeActivityStyle
                      backgroundColor="bg-danger"
                      key={activity}
                      name={activity}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6  mt-5 mt-md-0 col-lg-3">
            <div className="footer-widget">
              <h3>Heures d'Ouverture</h3>
              <div className="footer-widget-content">
                <div className="open-time">
                  <ul className="opening-time">
                    <li>
                      <span>
                        <i className="fa fa-times"></i>
                      </span>
                      <p className="clock-time">
                        <strong className="text-danger">lun - ven :</strong>{" "}
                        8h30 - 12h | 14h - 16h30
                      </p>
                    </li>

                    <li>
                      <span>
                        <i className="fa fa-check"></i>
                      </span>
                      <p>
                        <strong className="text-danger">sam - dim :</strong>{" "}
                        fermé
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="col-12 col-md-6  mt-5 mt-md-0 col-lg-3">
            <div className="footer-widget">
              <h3>Nos Soutiens</h3>
              <div className="container">
                <div className="row g-2">
                  <div className="col">
                    <div className="badge bg-light shadow-sm">
                      <a href="#">
                        <img src={mairie} alt="logo mairie" />
                      </a>
                    </div>
                  </div>

                  <div className="col">
                    <div className="badge bg-light shadow-sm">
                      <a href="#">
                        <img src={dep} alt="logo departement-07" />
                      </a>
                    </div>
                  </div>
                  <div className="col">
                    <div className="badge bg-light shadow-sm">
                      <a href="#">
                        <img src={etcld} alt="logo etcld" />
                      </a>
                    </div>
                  </div>
                  <div className="col">
                    <div className="badge bg-light shadow-sm">
                      <a href="#">
                        <img src={reg} alt="logo region auvergne-rhone-alpes" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
