import React, { useContext } from "react";
import { useState } from "react";
import "./Nav.css";
import logoH from "../../../img/logo_activiteil_h.svg";
import { HashLink as Link } from "react-router-hash-link";
import { ThemeContext } from "../../../Context/ThemeContext";
import BtnToggle from "../Buttons/BtnToggles";
// import SearchBar from "../SearchBar/SearchBar";

const Nav = () => {
  const [showLinks, setShowLinks] = useState(false);

  const handleShowLinks = () => {
    setShowLinks(!showLinks);
  };

  const { theme } = useContext(ThemeContext);
  return (
    <div
      className={`ms-3 ms-lg-3 ${
        theme ? `bg-dark text-light` : `bg-lum text-primary`
      }`}
    >
      <nav
        className={`navbar mt-3 mt-sm-4 col-11 col-md-11 col-xl-11 shadow ${
          showLinks ? "show-nav" : "hide-nav"
        } ${theme ? `bg-primary text-light` : `bg-light text-primary`}`}
      >
        <div className="navbar__logo ps-0 d-flex">
          {/* <div className="top">
            <BtnToggle onClick={handleShowLinks} />
          </div> */}

          <Link to="/#home" aria-current="page">
            <img src={logoH} className="App-logoH" alt="logo activiteil" />
          </Link>
          <span className="d-flex my-auto ms-2 mt-lg-3">
            <BtnToggle onClick={handleShowLinks} />
            {/* <SearchBar /> */}
          </span>
        </div>

        <ul className={`navbar__links  ${theme ? `bg-primary` : `bg-light`}`}>
          <li className="navbar__item slideInDown-1" onClick={handleShowLinks}>
            <Link
              to="/#home"
              className={`navbar__link   ${theme ? `text-light` : `text-info`}`}
              aria-current="page"
            >
              Accueil
            </Link>
          </li>
          <li className="navbar__item slideInDown-2" onClick={handleShowLinks}>
            <Link
              to="/about#about"
              className={`navbar__link ${theme ? `text-light` : `text-info`}`}
              activeclass="active"
            >
              Qui Sommes Nous ?
            </Link>
          </li>
          <li className="navbar__item slideInDown-3" onClick={handleShowLinks}>
            <Link
              to="/medias#medias"
              className={`navbar__link ${theme ? `text-light` : `text-info`}`}
              aria-current="page"
            >
              Médias
            </Link>
          </li>
          <li className="navbar__item slideInDown-4" onClick={handleShowLinks}>
            <Link
              to="/activities#activities"
              className={`navbar__link ${theme ? `text-light` : `text-info`}`}
            >
              Activités
            </Link>
          </li>
          <li className="navbar__item slideInDown-5" onClick={handleShowLinks}>
            <Link
              to="/achievements#achievements"
              className={`navbar__link ${theme ? `text-light` : `text-info`}`}
            >
              Réalisations
            </Link>
          </li>
          <li className="navbar__item slideInDown-5" onClick={handleShowLinks}>
            <Link
              to="/partners#partners"
              className={`navbar__link ${theme ? `text-light` : `text-info`}`}
            >
              Partenaires
            </Link>
          </li>

          <li className="navbar__item slideInDown-6" onClick={handleShowLinks}>
            <Link
              to="/contacts#contacts"
              className={`navbar__link ${theme ? `text-light` : `text-info`}`}
            >
              Contacts
            </Link>
          </li>
        </ul>

        <button className="navbar__burger" onClick={handleShowLinks}>
          <span className="burger-bar"></span>
        </button>
      </nav>
    </div>
  );
};

export default Nav;
