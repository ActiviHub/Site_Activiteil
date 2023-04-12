import React, { useContext } from "react";
import { ThemeContext } from "../../Context/ThemeContext";
// import activitiesDatas from "../Datas/activitiesDatas";
import ActivitiesList from "../Elements/Activities/ActivitiesList";
// import { BadgeActivityStyle } from "../Elements/BadgeActivity.style";
import H2 from "../Elements/H2";

const Activities = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <>
      <div id="activities">
        <div
          className={`p-3 mt-0 rounded-3 shadow-sm
          ${theme ? `bg-primary text-dark` : `bg-light text-light`}`}
          id="start"
        >
          <H2 content="Nos activités au Teil" />
          <div
            className={`mt-3 p-lg-3 rounded-2 container ${
              theme ? `bg-primary text-light` : `bg-light text-dark`
            }`}
          >
            <div className="row align">
              <div className="col-sm-12 col-lg-4 m-1">
                <h3 className="pt-3 text-start ">
                  <span className="fw-bolder">ActiviTeil </span> <br />
                  propose plusieurs activités
                  <br />
                  <div></div>
                  non concurentielles
                  <br />
                </h3>
              </div>
              <div className="col col-lg-7">
                <ActivitiesList />
                {/* {activitiesDatas.map((activity, index) => (
                  <BadgeActivityStyle
                    backgroundColor="bg-success"
                    key={index}
                    name={activity}
                  />
                ))} */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Activities;
