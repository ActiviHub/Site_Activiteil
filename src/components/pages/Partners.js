import React, { useContext } from "react";
import { ThemeContext } from "../../Context/ThemeContext";
import H2 from "../Elements/H2";
import PRIVATE from "../Datas/PartnersDatas/partnersPrivateDatas.json";
import INSTITUTIONAL from "../Datas/PartnersDatas/partnersInstitutionalDatas.json";
import { LazyLoadImage } from "react-lazy-load-image-component";

const Partners = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <div id="partners">
      <div
        className={`p-3 mt-0  rounded-3 shadow-sm ${
          theme ? `bg-primary text-dark` : `bg-light text-light`
        }`}
      >
        <div className="col-sm-3 col-lg-2 badge bg-light my-auto shadow-lg"></div>
        <H2 content="Nos Partenaires" />

        <div
          className={`mt-3 rounded-2 container ${
            theme ? `bg-primary ` : `bg-light `
          }`}
        >
          <div
            className={`px-5 pt-3 pb-2 badge text-center ${
              theme ? `bg-dark  ` : `bg-success `
            }`}
          >
            <h1 className={`${theme ? `text-danger  ` : `text-white `}`}>
              Institutionnels
            </h1>
          </div>

          <div className="row justify-content-center py-3 gap-3">
            {INSTITUTIONAL &&
              INSTITUTIONAL.map((item) => {
                return (
                  <div
                    key={item.id}
                    className="col-4 col-xl-2 badge bg-light my-auto shadow-lg"
                  >
                    <a href={item.url} target="blank">
                      <LazyLoadImage
                        src={item.image}
                        className="img-fluid"
                        alt={item.alt}
                      />
                    </a>
                  </div>
                );
              })}
          </div>
        </div>

        <div
          className={`mt-3 rounded-2 container ${
            theme ? `bg-primary ` : `bg-light `
          }`}
        >
          <div
            className={`px-5  pt-3 pb-2 badge text-center ${
              theme ? `bg-dark  ` : `bg-success `
            }`}
          >
            <h1 className={`${theme ? `text-danger  ` : `text-white `}`}>
              Privés
            </h1>
          </div>

          <div className="row justify-content-center py-3 gap-3">
            {PRIVATE &&
              PRIVATE.map((item) => {
                return (
                  <div
                    key={item.id}
                    className="col-4 col-xl-2 badge bg-light my-auto shadow-lg"
                  >
                    <a href={item.url} target="blank">
                      <LazyLoadImage
                        src={item.image}
                        className="img-fluid"
                        alt={item.alt}
                      />
                    </a>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Partners;
