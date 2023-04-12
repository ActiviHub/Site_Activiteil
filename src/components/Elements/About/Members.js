import React, { useState } from "react";
import "./Members.css";
import {
  companiesList,
  essList,
  collectivList,
} from "../../Datas/MembersDatas";
const Members = () => {
  const [toggleState, setToggleState] = useState(false);

  const toggleFonction = () => {
    setToggleState(!toggleState);
  };

  const Companies = companiesList.map((companyItem, index) => (
    <li key={index} className="puce">
      <span className="text-members">{companyItem}</span>
    </li>
  ));
  const Ess = essList.map((essItem, index) => (
    <li key={index} className="puce">
      <span className="text-members">{essItem}</span>
    </li>
  ));
  const Collectiv = collectivList.map((collectivItem, index) => (
    <li key={index} className="puce">
      <span className="text-members">{collectivItem}</span>
    </li>
  ));

  const MaPage = ({ title, who }) => {
    return (
      <div className="col-md-3 pb-3">
        <strong>
          <u className="underline2">{title}</u>
        </strong>

        <span className="text-muted lead">{who}</span>
      </div>
    );
  };

  return (
    <>
      <h3 className="pt-md-3 text-start">
        <strong>
          <u className="underline1">Les adhérents</u>
        </strong>
      </h3>
      {toggleState ? (
        <div className="col m-md-1 text-start">
          <button
            onClick={toggleFonction}
            type="button"
            className="btn btn-info btn-sm"
          >
            <strong>Replier</strong>
          </button>
          <div className="row container lead text-start vh-50 p-5">
            <MaPage title="Les entreprises" who={Companies} />
            <MaPage
              title="Les acteurs de l’Economie Sociale et Solidaire (ESS) :"
              who={Ess}
            />
            <MaPage title="Collectivités :" who={Collectiv} />
          </div>
        </div>
      ) : (
        <div className="col m-md-1 text-start">
          <button
            onClick={toggleFonction}
            type="button"
            className="btn btn-info btn-circle  btn-sm"
          >
            <strong>En savoir plus</strong>
          </button>
        </div>
      )}
    </>
  );
};

export default Members;
