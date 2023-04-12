import React from "react";
import "./BadgeActivity.css";

// const BadgeActivity = ({ name, backgroundColor }) => {
//   return (
//     <div className={`col m-1 badge ${backgroundColor} text-light`}>{name}</div>
//   );
// };

// export default BadgeActivity;
const BadgeActivity = ({
  who,
  make,
  what1,
  what2,
  what3,
  what4,
  what5,
  image,
  backgroundColor,
}) => {
  const ElemBadgeActivity = (item) => {
    <div className="col">
      <div className={`h5 mb-0`}>{item}</div>
    </div>;
  };
  return (
    <div className={`badge py-4 ${backgroundColor} text-light`}>
      {/* <div className={`h6 mb-0`}>{name}</div> */}

      <ElemBadgeActivity item={who} />
      <ElemBadgeActivity item={make} />
      <ElemBadgeActivity item={what1} />
      <ElemBadgeActivity item={what2} />
      <ElemBadgeActivity item={what3} />
      <ElemBadgeActivity item={what4} />
      <ElemBadgeActivity item={what5} />
      <div className="photo">{image}</div>
    </div>
  );
};
// };

export default BadgeActivity;
