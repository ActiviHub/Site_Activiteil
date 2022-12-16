import React, { useContext } from "react";
import { ThemeContext } from "../../Context/ThemeContext";
import H2 from "../Elements/H2";
import CardMedia from "../Elements/Cards/CardMedia";
import mediasDatas from "../Datas/mediasDatas";

const Medias = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <>
      <div id="medias">
        <div
          className={`p-3 mt-3  rounded-3 shadow-sm ${
            theme ? `bg-primary text-dark` : `bg-light text-light`
          }`}
        >
          <H2 content="Les Médias Parlent d'Activiteil" />
          <div className="container">
            <div className="row">
              {mediasDatas.map((m) => {
                return (
                  <div className="col-12 col-sm-12 col-md-6 col-xl-4">
                    <CardMedia
                      key={m}
                      media={m.media}
                      title={m.title}
                      text={m.text}
                      subText={m.subText}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Medias;
