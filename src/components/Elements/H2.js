import React, { useContext } from "react";
import { ThemeContext } from "../../Context/ThemeContext";
import "../pages/welcome.css";
const H2 = ({ content, css }) => {
  const { theme } = useContext(ThemeContext);
  return (
    <div className="">
      <h1
        className={`rounded-2 my-5 py-5 text-uppercase fw-bolder ${
          theme ? `dark_subtitle text-light` : `light_subtitle text-light`
        }`}
      >
        {/* <h2 className="bg-light text-dark text-uppercase fw-bolder">
        Qui Sommes Nous ?
        </h2> */}
        {content}
      </h1>
    </div>
  );
};

export default H2;
