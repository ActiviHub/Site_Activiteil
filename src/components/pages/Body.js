import React, { useContext } from "react";
import { ThemeContext } from "../../Context/ThemeContext";
import Views from "../Views";

const Body = () => {
  const { theme } = useContext(ThemeContext);
  return (
    // <header className="App-header bg-dark">

    <header
      className={`App-header pt-5 ${
        theme ? `bg-dark text-light` : `bg-lum text-dark`
      }`}
    >
      <div
        className="container-fluid p-sm-4
            p-ld-3"
      >
        <div className="mb-3">
          <Views />
        </div>
      </div>
    </header>
  );
};

export default Body;
