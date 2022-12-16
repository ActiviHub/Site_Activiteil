import React from "react";
import "./BadgeActivity.css";

const BadgeActivity = ({ name, backgroundColor }) => {
  return (
    <div className={`col m-1 badge ${backgroundColor} text-light`}>{name}</div>
  );
};

export default BadgeActivity;
