import React from "react";
import "./BadgeActivity.css";

const BadgeActivityFooter = ({ name, backgroundColor }) => {
  return (
    <div className={`col m-1 badge ${backgroundColor} text-light`}>{name}</div>
  );
};

export default BadgeActivityFooter;
