import React, { useContext } from "react";
import { ThemeContext } from "../../../Context/ThemeContext";
import "./CardMedia.css";

const CardMedia = ({ media, title, text, subText }) => {
  const { theme } = useContext(ThemeContext);
  return (
    <>
      <div
        className={`rounded-2 mt-2 mt-md-3 mt-lg-5 highmin card ${
          theme
            ? `border-dark bg-primary text-light`
            : `border-lum  bg-light text-dark`
        }`}
      >
        {/* <div className="img-circle">{media}</div> */}
        {/* <div style={{ height: "290px", margin: "40px" }}>{media}</div> */}

        <div className="m-5 mb-3 ">{media}</div>
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="mt-2 mt-md-3 mt-lg-5 card-text">{text}</p>
          <p className="mt-2 mt-md-3 mt-lg-5 card-text">
            <small className="text-muted">{subText}</small>
          </p>
        </div>
      </div>
    </>
  );
};

export default CardMedia;
