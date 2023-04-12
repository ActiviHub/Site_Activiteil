import React from "react";
import "./Employees.css";

import { useState } from "react";
import { BadgeEmployeeStyle } from "../BadgeEmployee.style";
import myArray from "../../Datas/employesDatas";
import {
  achats,
  animation,
  bricolage,
  communication,
  comptabilité,
  conciergerie,
  coordination,
  couture,
  cuisine,
  depollution,
  direction,
  herboristerie,
  livraisons,
  maraîchage,
  mobilité,
  permaculture,
  proprete,
  recyclage,
  reparationPME,
  reparationV,
  secretariat,
  smartphone,
  tous,
  vente,
} from "../../Datas/ActivitiesDatas/activityDatas.js";

import options from "../../Datas/SelectOptionsDatas/optionsDatas";

const Employees = () => {
  // const [toggleState, setToggleState] = useState(false);
  // const toggleFonction = () => {
  //   setToggleState(!toggleState);
  // };
  const [quantity, setQuantity] = useState(0);
  const [value, setValue] = useState("Choix");
  const [tableau, setTableau] = useState(myArray);

  const handleChange = (e) => {
    let word = e.target.value;

    if (word === achats) {
      const filtered = myArray.filter(
        (item) =>
          item.fonction1 === achats ||
          item.fonction2 === achats ||
          item.fonction3 === achats ||
          item.fonction4 === achats
      );
      setTableau(filtered);
      setQuantity(10);
    } else if (word === animation) {
      const filtered = myArray.filter(
        (item) =>
          item.fonction1 === animation ||
          item.fonction2 === animation ||
          item.fonction3 === animation ||
          item.fonction4 === animation
      );
      setTableau(filtered);
      setQuantity(5);
    } else if (word === bricolage) {
      const filtered = myArray.filter(
        (item) =>
          item.fonction1 === bricolage ||
          item.fonction2 === bricolage ||
          item.fonction3 === bricolage ||
          item.fonction4 === bricolage
      );
      setTableau(filtered);
      setQuantity(20);
    } else if (word === comptabilité) {
      const filtered = myArray.filter(
        (item) =>
          item.fonction1 === comptabilité ||
          item.fonction2 === comptabilité ||
          item.fonction3 === comptabilité ||
          item.fonction4 === comptabilité
      );
      setTableau(filtered);
      setQuantity(5);
    } else if (word === communication) {
      const filtered = myArray.filter(
        (item) =>
          item.fonction1 === communication ||
          item.fonction2 === communication ||
          item.fonction3 === communication ||
          item.fonction4 === communication
      );
      setTableau(filtered);
      setQuantity(5);
    } else if (word === conciergerie) {
      const filtered = myArray.filter(
        (item) =>
          item.fonction1 === conciergerie ||
          item.fonction2 === conciergerie ||
          item.fonction3 === conciergerie ||
          item.fonction4 === conciergerie
      );
      setTableau(filtered);
      setQuantity(10);
    } else if (word === coordination) {
      const filtered = myArray.filter(
        (item) =>
          item.fonction1 === coordination ||
          item.fonction2 === coordination ||
          item.fonction3 === coordination ||
          item.fonction4 === coordination
      );
      setTableau(filtered);
      setQuantity(10);
    } else if (word === couture) {
      const filtered = myArray.filter(
        (item) =>
          item.fonction1 === couture ||
          item.fonction2 === couture ||
          item.fonction3 === couture ||
          item.fonction4 === couture
      );
      setTableau(filtered);
      setQuantity(15);
    } else if (word === cuisine) {
      const filtered = myArray.filter(
        (item) =>
          item.fonction1 === cuisine ||
          item.fonction2 === cuisine ||
          item.fonction3 === cuisine ||
          item.fonction4 === cuisine
      );
      setTableau(filtered);
      setQuantity(15);
    } else if (word === depollution) {
      const filtered = myArray.filter(
        (item) =>
          item.fonction1 === depollution ||
          item.fonction2 === depollution ||
          item.fonction3 === depollution ||
          item.fonction4 === depollution
      );
      setTableau(filtered);
      setQuantity(10);
    } else if (word === direction) {
      const filtered = myArray.filter(
        (item) =>
          item.fonction1 === direction ||
          item.fonction2 === direction ||
          item.fonction3 === direction ||
          item.fonction4 === direction
      );
      setTableau(filtered);
      setQuantity(5);
    } else if (word === herboristerie) {
      const filtered = myArray.filter(
        (item) =>
          item.fonction1 === herboristerie ||
          item.fonction2 === herboristerie ||
          item.fonction3 === herboristerie ||
          item.fonction4 === herboristerie
      );
      setTableau(filtered);
      setQuantity(5);
    } else if (word === livraisons) {
      const filtered = myArray.filter(
        (item) =>
          item.fonction1 === livraisons ||
          item.fonction2 === livraisons ||
          item.fonction3 === livraisons ||
          item.fonction4 === livraisons
      );
      setTableau(filtered);
      setQuantity(5);
    } else if (word === maraîchage) {
      const filtered = myArray.filter(
        (item) =>
          item.fonction1 === maraîchage ||
          item.fonction2 === maraîchage ||
          item.fonction3 === maraîchage ||
          item.fonction4 === maraîchage
      );
      setTableau(filtered);
      setQuantity(15);
    } else if (word === mobilité) {
      const filtered = myArray.filter(
        (item) =>
          item.fonction1 === mobilité ||
          item.fonction2 === mobilité ||
          item.fonction3 === mobilité ||
          item.fonction4 === mobilité
      );
      setTableau(filtered);
      setQuantity(15);
    } else if (word === proprete) {
      const filtered = myArray.filter(
        (item) =>
          item.fonction1 === proprete ||
          item.fonction2 === proprete ||
          item.fonction3 === proprete ||
          item.fonction4 === proprete
      );
      setTableau(filtered);
      setQuantity(15);
    } else if (word === permaculture) {
      const filtered = myArray.filter(
        (item) =>
          item.fonction1 === permaculture ||
          item.fonction2 === permaculture ||
          item.fonction3 === permaculture ||
          item.fonction4 === permaculture
      );
      setTableau(filtered);
      setQuantity(15);
    } else if (word === recyclage) {
      const filtered = myArray.filter(
        (item) =>
          item.fonction1 === recyclage ||
          item.fonction2 === recyclage ||
          item.fonction3 === recyclage ||
          item.fonction4 === recyclage
      );
      setTableau(filtered);
      setQuantity(10);
    } else if (word === reparationPME) {
      const filtered = myArray.filter(
        (item) =>
          item.fonction1 === reparationPME ||
          item.fonction2 === reparationPME ||
          item.fonction3 === reparationPME ||
          item.fonction4 === reparationPME
      );
      setTableau(filtered);
      setQuantity(5);
    } else if (word === reparationV) {
      const filtered = myArray.filter(
        (item) =>
          item.fonction1 === reparationV ||
          item.fonction2 === reparationV ||
          item.fonction3 === reparationV ||
          item.fonction4 === reparationV
      );
      setTableau(filtered);
      setQuantity(5);
    } else if (word === secretariat) {
      const filtered = myArray.filter(
        (item) =>
          item.fonction1 === secretariat ||
          item.fonction2 === secretariat ||
          item.fonction3 === secretariat ||
          item.fonction4 === secretariat
      );
      setTableau(filtered);
      setQuantity(5);
    } else if (word === smartphone) {
      const filtered = myArray.filter(
        (item) =>
          item.fonction1 === smartphone ||
          item.fonction2 === smartphone ||
          item.fonction3 === smartphone ||
          item.fonction4 === smartphone
      );
      setTableau(filtered);
      setQuantity(5);
    } else if (word === vente) {
      const filtered = myArray.filter(
        (item) =>
          item.fonction1 === vente ||
          item.fonction2 === vente ||
          item.fonction3 === vente ||
          item.fonction4 === vente
      );
      setTableau(filtered);
      setQuantity(5);
    } else if (word === tous) {
      setTableau(myArray);
      setQuantity(100);
    }
    setValue(e.target.value);
  };

  return (
    <>
      <div className="col md-1">
        <h3 className="pt-md-3 text-start">
          <strong>
            <u className="underline1">
              Les {myArray.length} salariés d'Activiteil
            </u>
          </strong>
        </h3>
        {/* {toggleState ? (
          <div className="col m-md-1 ">
            <div className="text-start">
              <button
                onClick={toggleFonction}
                type="button"
                className="btn btn-info btn-sm"
              >
                <strong>Replier</strong>
              </button>
            </div> */}

        <div className="container mt-3">
          <div className="row">
            {/* <h1>{value}</h1> */}
            <div className="ps-0 text-start">
              <label>
                <select
                  multiple={false}
                  className="select_style p-3 text-center"
                  size="2"
                  value={value}
                  onChange={handleChange}
                >
                  <option className="py-3 bg-danger text-light" value="Choix">
                    <strong>Choisir les Salariés par fonction</strong>
                  </option>
                  {options.map((option) => (
                    <option className="px-3" value={option.value}>
                      <span>{option.label}&nbsp; </span>
                      <span className="my-1 badge rounded bg-danger text-light">
                        {
                          myArray.filter(
                            (item) =>
                              item.fonction1 === option.value ||
                              item.fonction2 === option.value ||
                              item.fonction3 === option.value ||
                              item.fonction4 === option.value
                          ).length
                        }
                      </span>
                    </option>
                  ))}
                </select>
              </label>
            </div>

            {tableau.slice(0, quantity).map((item) => (
              <>
                <div className="col-12 col-md-6 col-xl-3 mt-3">
                  <BadgeEmployeeStyle
                    backgroundColor="bg-info"
                    key={item.id}
                    // id={item.id}
                    name={item.name}
                    fonction0={item.fonction0}
                    fonction1={item.fonction1}
                    fonction2={item.fonction2}
                    fonction3={item.fonction3}
                    fonction4={item.fonction4}
                    // image={
                    //   <img
                    //     src={item.image}
                    //     className="img-thumbnail rounded mt-3"
                    //     alt={item.name}
                    //   />
                    // }

                    // image={
                    //   <img
                    //     src={require("../../../img/trombi/" +
                    //       "photo_" +
                    //       item.image +
                    //       "-72" +
                    //       ".jpg")}
                    //     className="img-thumbnail rounded mt-3"
                    //     alt={item.name}
                    //   />
                    // }
                  />
                </div>
              </>
            ))}
          </div>
        </div>
      </div>
      {/* ) : (
          <div className="col m-md-1 text-start">
            <button
              onClick={toggleFonction}
              type="button"
              className="btn btn-info btn-circle btn-sm"
            >
              <strong>En savoir plus</strong>
            </button>
          </div>
        )}
      </div> */}
    </>
  );
};

export default Employees;
