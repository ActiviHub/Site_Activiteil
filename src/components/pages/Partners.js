import React, { useContext } from "react";
import { ThemeContext } from "../../Context/ThemeContext";
import H2 from "../Elements/H2";
import IMAGES from "../Datas/partnersDatas.json";

const Partners = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <div id="partners">
      <div
        className={`p-3 mt-3  rounded-3 shadow-sm ${
          theme ? `bg-primary text-dark` : `bg-light text-light`
        }`}
      >
        <div className=" col-sm-3 col-lg-2 badge bg-light my-auto shadow-lg"></div>
        <H2 content="Nos Partenaires" />
        <div
          class={`mt-3 rounded-2 container ${
            theme ? `bg-primary text-light` : `bg-lighttext-dark`
          }`}
        >
          <div className="row justify-content-center py-3 gap-3">
            {IMAGES &&
              IMAGES.map((item) => {
                return (
                  <div
                    key={item.id}
                    className="col-sm-12 col-md-4 col-xl-2 badge bg-light my-auto shadow-lg"
                  >
                    <a href={item.url} target="blank">
                      <img
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
