import React, { useContext } from "react";
import { ThemeContext } from "../../../Context/ThemeContext";

import { BsFillMoonFill } from "react-icons/bs";
import { BsFillBrightnessHighFill } from "react-icons/bs";
import "./BtnToggle.css";

const BtnToggle = () => {
  const { toggleTheme, theme } = useContext(ThemeContext);

  return (
    <div onClick={toggleTheme}>
      &nbsp;&nbsp;&nbsp;
      {theme ? (
        <span className="light">
          <BsFillBrightnessHighFill className="btn-toggle" />
        </span>
      ) : (
        <span className="dark">
          <BsFillMoonFill className="btn-toggle" />
        </span>
      )}
    </div>
  );
};

export default BtnToggle;
