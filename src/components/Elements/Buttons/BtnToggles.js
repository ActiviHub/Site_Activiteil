import React, { useContext } from "react";
import { ThemeContext } from "../../../Context/ThemeContext";

import { BsFillMoonFill } from "react-icons/bs";
import { BsFillBrightnessHighFill } from "react-icons/bs";
import "./BtnToggle.css";

const BtnToggle = () => {
  const { toggleTheme, theme } = useContext(ThemeContext);

  return (
    <div
      // className="my-auto ms-2"
      onClick={toggleTheme}
    >
      {theme ? (
        <span>
          <BsFillBrightnessHighFill className="btntoggle btntogglelight" />
        </span>
      ) : (
        <span>
          <BsFillMoonFill className="btntoggle btntoggledark" />
        </span>
      )}
    </div>
  );
};

export default BtnToggle;
