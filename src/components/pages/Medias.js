import React, { useContext } from "react";
import { ThemeContext } from "../../Context/ThemeContext";
import H2 from "../Elements/H2";
// import pct from "../../img/articles/pct_article_f3_2022_05_31.jpg";
// import CardMedia from "../Elements/Cards/CardMedia";
// import mediasDatas from "../Datas/mediasDatas";
import SearchBar from "../Elements/SearchBar/SearchBar";

// import pct from "../../../img/pct_article_banque_des_territoires.jpg";

const Medias = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <>
      <div id="medias">
        <div
          className={`p-3 mt-0 rounded-3 shadow-sm ${
            theme ? `bg-primary text-dark` : `bg-light text-light`
          }`}
        >
          <H2 content="Les Médias en parlent" />
          {/* <div className="col-12 col-sm-12 col-md-6 col-xl-4"> */}
          <div className="container">
            <div className="row">
              <SearchBar />
            </div>
          </div>
          {/* </div> */}
          {/* <div className="container">
            <div className="row">
              {mediasDatas.map((m) => {
                return (
                  <div className="col-12 col-sm-12 col-md-6 col-xl-4">
                    <CardMedia
                      key={m.id}
                      media={m.media}
                      title={m.title}
                      text={m.text}
                      what={m.what}
                      where={m.where}
                      subText={m.subText}
                      day={m.day}
                      month={m.month}
                      year={m.year}
                    />
                  </div>
                );
              })}
            </div>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default Medias;
