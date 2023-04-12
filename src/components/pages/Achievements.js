import React, { useContext } from "react";
import { ThemeContext } from "../../Context/ThemeContext";
import H2 from "../Elements/H2";
// import CardMedia from "../Elements/Cards/CardMedia";
// import mediasDatas from "../Datas/mediasDatas";

const Achievements = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <>
      <div id="achievements">
        <div
          className={`p-3 mt-0  rounded-3 shadow-sm ${
            theme ? `bg-primary text-dark` : `bg-light text-light`
          }`}
        >
          <H2 content="Nos Réalisations" />
          <div
            className={`mt-3 p-lg-3 rounded-2 container ${
              theme ? `bg-primary text-light` : `bg-light text-dark`
            }`}
          >
            <div className="row">
              <div className="col-12">
                Page en construction
                {/* <div className="col-12 col-sm-12 col-md-6 col-xl-4"> */}
                {/* <CardMedia
                      key={m}
                      media={m.media}
                      title={m.title}
                      text={m.text}
                      subText={m.subText}
                    /> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Achievements;
