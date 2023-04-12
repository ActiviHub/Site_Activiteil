import React, { useContext } from "react";
import { ThemeContext } from "../../Context/ThemeContext";

import dep from "../../img/Ardeche le Departement 2021_N.png";
import reg from "../../img/logo-partenaire-region-auvergne-rhone-alpes-rvb.png";
import mairie from "../../img/logo_teil.jpg";
import tzlcd from "../../img/logoETCLD.jpg";
import H2 from "../Elements/H2";

const Supporters = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <>
      <div id="supporters">
        <div
          className={`p-3 mt-3 rounded-3 shadow-sm  ${
            theme ? `bg-primary text-dark` : `bg-light text-light`
          }`}
        >
          <H2 content="Ils Nous Soutiennent" />

          <div
            className={`p-3 mt-3 rounded-2 container ${
              theme ? `bg-primary text-light` : `bg-light text-dark`
            }`}
          >
            <div className="row g-3 align-items-center">
              <div className="col-sm-12 col-md-3 badge badge bg-light shadow-lg ">
                <img src={mairie} className="img-fluid" alt="logo" />
              </div>
              <div className="col-sm-12 col-md-3 badge badge bg-light shadow-lg">
                <img src={tzlcd} className="img-fluid" alt="logo" />
              </div>
              <div className="col-sm-12 col-md-3 badge badge bg-light shadow-lg">
                <img src={dep} className="img-fluid " alt="logo" />
              </div>
              <div className="col-sm-12 col-md-3 badge badge bg-light shadow-lg">
                <img src={reg} className="img-fluid " alt="logo" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Supporters;
