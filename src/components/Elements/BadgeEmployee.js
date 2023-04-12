/* eslint-disable no-useless-concat */
import React from "react";

import "./BadgeActivity.css";

const BadgeEmployee = ({
  // id,
  name,
  id,
  // pole,
  fonction0,
  fonction1,
  fonction2,
  fonction3,
  fonction4,
  image,
  backgroundColor,
}) => {
  // if (
  //   fonction0 === "Mobilité" ||
  //   fonction1 === "Mobilité" ||
  //   fonction2 === "Mobilité" ||
  //   fonction3 === "Mobilité"
  // ) {
  return (
    <div className={`col badge py-4 ${backgroundColor} text-light`}>
      {/* {id} */}
      <div className={`position-relative h6 mb-0`}>
        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-light border border-info text-info">
          {id}
        </span>
        {name}
      </div>
      <div className={`h2 mb-0`}>
        {fonction0}
        {fonction1}
      </div>
      <div className={`h4`}>
        {fonction2} {fonction3} {fonction4}
      </div>
      {/* <div>{image}</div> */}
    </div>
  );
};
// };

export default BadgeEmployee;
