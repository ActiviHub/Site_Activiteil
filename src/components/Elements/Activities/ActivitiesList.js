import React from "react";
import { useState } from "react";
import { arrayActivities } from "../../Datas/ActivitiesDatas/activityDatas";
import {
  bricolage,
  couture,
  cuisine,
  herboristerie,
  livraisons,
  maraîchage,
  mobilité,
  permaculture,
  proprete,
  recyclage,
  reparationPME,
  reparationV,
} from "../../Datas/ActivitiesDatas/activityDatas";

import { BadgeActivityStyle } from "../BadgeActivity.style";
import { LazyLoadImage } from "react-lazy-load-image-component";
import Boutons from "../Buttons/Boutons";
const ActivitiesList = () => {
  const [state, setState] = useState(arrayActivities);
  // const [toggleState, setToggleState] = useState(false);
  // const toggleFonction = () => {
  //   setToggleState(!toggleState);
  // };

  const handleBtns = (e) => {
    let word = e.target.value;
    if (word === bricolage) {
      const filtered = arrayActivities.filter(
        (item) => item.name === bricolage
      );
      setState(filtered);
    } else if (word === couture) {
      const filtered = arrayActivities.filter((item) => item.value === couture);
      setState(filtered);
    } else if (word === cuisine) {
      const filtered = arrayActivities.filter((item) => item.value === cuisine);

      setState(filtered);
    } else if (word === herboristerie) {
      const filtered = arrayActivities.filter(
        (item) => item.value === herboristerie
      );
      setState(filtered);
    } else if (word === livraisons) {
      const filtered = arrayActivities.filter(
        (item) => item.value === livraisons
      );
      setState(filtered);
    } else if (word === maraîchage) {
      const filtered = arrayActivities.filter(
        (item) => item.value === maraîchage
      );
      setState(filtered);
    } else if (word === mobilité) {
      const filtered = arrayActivities.filter(
        (item) => item.value === mobilité
      );
      setState(filtered);
    } else if (word === permaculture) {
      const filtered = arrayActivities.filter(
        (item) => item.value === permaculture
      );
      setState(filtered);
    } else if (word === proprete) {
      const filtered = arrayActivities.filter(
        (item) => item.value === proprete
      );
      setState(filtered);
    } else if (word === recyclage) {
      const filtered = arrayActivities.filter(
        (item) => item.value === recyclage
      );
      setState(filtered);
    } else if (word === reparationPME) {
      const filtered = arrayActivities.filter(
        (item) => item.value === reparationPME
      );
      setState(filtered);
    } else if (word === reparationV) {
      const filtered = arrayActivities.filter(
        (item) => item.value === reparationV
      );
      setState(filtered);
    }
  };
  // if (toggleState) {
  return (
    <>
      {/* <div onClick={toggleFonction}>Click</div> */}

      <div className="col md-1">
        <div className="container mt-5">
          <div className="row">
            <div>
              {arrayActivities.map((item) => (
                <Boutons
                  key={item.id}
                  styleBouton={"btn btn-info btn-sm"}
                  name={item.name}
                  value={item.value}
                  clic={handleBtns}
                />
              ))}
            </div>
            {state.slice(0, 1).map((item) => (
              <>
                <div className="col mt-5">
                  <BadgeActivityStyle
                    backgroundColor="bg-success"
                    key={item.id}
                    name={item.name}
                    who={item.who}
                    make={item.make}
                    what1={item.what1}
                    what2={item.what2}
                    what3={item.what3}
                    what4={item.what4}
                    what5={item.what5}
                    image={
                      <LazyLoadImage
                        src={require("../../../img/activites/" +
                          item.image +
                          ".jpg")}
                        className="img-thumbnail rounded mt-3"
                        alt={item.name}
                      />
                    }
                  />
                </div>
              </>
            ))}
          </div>
        </div>
      </div>
    </>
  );
  //   } else {
  //     return <div onClick={toggleFonction}>Click</div>;
  //   }
};

export default ActivitiesList;
