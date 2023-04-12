import React, { useContext } from "react";
import { ThemeContext } from "../../Context/ThemeContext";
const H2Welcome = ({ content }) => {
  const { theme } = useContext(ThemeContext);
  return (
    <div className="row justify-content-center">
      <h2
        style={{ transform: "rotate(-20deg)" }}
        className={`col-8  col-xl-6  rounded-2 text-uppercase vw-25 fw-bolder ${
          theme ? `text-light` : `text-primary`
        }`}
      >
        {/* <h2 className="bg-light text-dark text-uppercase fw-bolder">
        Qui Sommes Nous ?
        </h2> */}
        {content}
      </h2>
    </div>
  );
};

export default H2Welcome;
