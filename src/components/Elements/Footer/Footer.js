import "./Footer.scss";
import React, { useContext } from "react";
import { ThemeContext } from "../../../Context/ThemeContext";
import mairie from "../../../img/logos-footer/logo_teil-85x85.png";
import dep from "../../../img/logos-footer/Ardeche le Departement 2021_N-85x85.png";
import etcld from "../../../img/logos-footer/logo_ETCLD-85x85.jpg";
import reg from "../../../img/logos-footer/logo-partenaire-region-auvergne-rhone-alpes-rvb-85x85.png";
import logoH from "../../../img/logo_activiteil_h.svg";
import { activitiesFooterDatas } from "../../Datas/ActivitiesDatas/activityDatas";
import { HashLink as Link } from "react-router-hash-link";
import { BadgeActivityFooterStyle } from "../BadgeActivityFooter.style";

const Footer = () => {
  const { theme } = useContext(ThemeContext);
  const ActivitesFooter = activitiesFooterDatas.map((activity, index) => (
    <BadgeActivityFooterStyle
      backgroundColor="bg-danger"
      key={index}
      name={activity}
    />
  ));

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
          <div className="col-12 mt-sm-0 col-md-6 col-lg-3">
            <div className="footer-widget">
              <h3>Nous Rencontrer</h3>
              <div className="footer-widget-content">
                Activiteil
                <strong className="contact-link text-danger">
                  04 75 52 71 75
                </strong>
                <span>3 Rue Boissy-d'Anglas 07400 Le Teil</span>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6  mt-5 mt-md-0   col-lg-3">
            <div className="footer-widget">
              <h3 className="text-capitalize">Nos Activités</h3>
              <div className="footer-widget-content">
                <div className="media">{ActivitesFooter}</div>
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
                        8h30 - 12h00 | 14h00 - 16h30
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
                      <a href="https://www.mairie-le-teil.fr/" target="blank">
                        <img src={mairie} alt="logo mairie" />
                      </a>
                    </div>
                  </div>

                  <div className="col">
                    <div className="badge bg-light shadow-sm">
                      <a href="https://www.ardeche.fr/" target="blank">
                        <img src={dep} alt="logo departement-07" />
                      </a>
                    </div>
                  </div>
                  <div className="col">
                    <div className="badge bg-light shadow-sm">
                      <a href="https://etcld.fr/" target="blank">
                        <img src={etcld} alt="logo etcld" />
                      </a>
                    </div>
                  </div>
                  <div className="col">
                    <div className="badge bg-light shadow-sm">
                      <a
                        href="https://www.auvergnerhonealpes.fr/"
                        target="blank"
                      >
                        <img src={reg} alt="logo region auvergne-rhone-alpes" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12">
            <hr></hr>
            <h2>Commentaires</h2>

            <p className="text-start">
              <q>
                &nbsp;Je voulais vous faire un retour concernant le repas de ce
                midi. <br />
                Je me permets de parler pour l'ensemble de l'équipe qui je pense
                à le même avis que moi nous nous sommes régalés, <br />
                vraiment un grand bravo à vous et à votre personnel ils ont géré
                comme des chefs, ponctuels, souriants, organisés.... et un repas
                excellent, <br />
                je garde vos coordonnées précieusement encore mille mercis&nbsp;
              </q>
            </p>
            <hr></hr>
            <div className="navbar__logo ps-0">
              <Link to="/#home" aria-current="page"></Link>
            </div>
            <p>
              <img src={logoH} className="Foot-logoH" alt="logo activiteil" />
              &nbsp; &copy; Activiteil 2023. Tous droits réservés |
              <Link
                to="/infos#"
                className={`navbar__link ${theme ? `text-light` : `text-info`}`}
                aria-current="page"
              >
                Informations légales
              </Link>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
