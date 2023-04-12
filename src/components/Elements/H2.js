import React, { useContext } from "react";
import { ThemeContext } from "../../Context/ThemeContext";
import "../pages/welcome.css";
const H2 = ({ content }) => {
  const { theme } = useContext(ThemeContext);
  return (
    <div>
      <h1
        className={`title rounded-2 mb-5 mt-3 pt-3 pb-5 text-uppercase fw-bolder ${
          theme ? `dark_subtitle text-light` : `light_subtitle text-success`
        }`}
      >
        {/* <h2 className="bg-light text-dark text-uppercase fw-bolder"></h2> */}
        {content}
      </h1>
    </div>
  );
};

export default H2;
