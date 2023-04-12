import React, { useContext } from "react";
import { ThemeContext } from "../../Context/ThemeContext";
import Members from "../Elements/About/Members";
import Employees from "../Elements/About/Employees";
import Project from "../Elements/About/Project";
import H2 from "../Elements/H2";
import "./welcome.css";

const About = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <>
      <div id="about">
        <div
          className={`p-3  mt-0 rounded-3 shadow-sm ${
            theme ? `bg-primary text-dark` : `bg-light text-light`
          }`}
        >
          <H2 content="Qui Sommes Nous ?" />
          <div
            className={`mt-3 rounded-2 container ${
              theme ? `bg-primary text-light` : `bg-light text-dark`
            }`}
          >
            <Project />
            <Members />
            <Employees />
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
