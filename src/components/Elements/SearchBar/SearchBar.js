import React, { useContext } from "react";
import { ThemeContext } from "../../../Context/ThemeContext";
import { useState } from "react";
import arrayMedias from "../../Datas/mediasDatas";

const SearchBar = () => {
  const [value, setValue] = useState("");
  const handleChange = (e) => {
    setValue(e.target.value);
  };
  const { theme } = useContext(ThemeContext);

  return (
    <div
      className={`mt-0 rounded-2 container ${
        theme ? `bg-primary ` : `bg-light `
      }`}
    >
      <div
        className={`px-5 pt-3 pb-2 badge text-center ${
          theme ? `bg-dark  ` : `bg-success `
        }`}
      >
        <h1 className={`${theme ? `text-danger  ` : `text-white `}`}>
          Toutes les infos
        </h1>
      </div>

      <div
        className={`pt-3 lead text-center ${
          theme ? `text-danger  ` : `text-black `
        }`}
      >
        <div className="pb-0">
          <h4>
            <strong>
              <u>Avec les catégories ci-dessous :</u>
            </strong>
          </h4>
        </div>
        <div>
          Mois | Année | Média (France 3, La Tribune, etc.) | Article ou
          reportage | Support (Internet, Quotidien, Hebdo, etc.)
        </div>
      </div>

      <input
        type="text"
        className={`ps-2 col-9 mt-1 mb-0 ${
          theme ? `bg-dark text-light` : `bg-light text-dark`
        }`}
        placeholder="Recherche... "
        value={value}
        onChange={handleChange}
      />
      <div className="row">
        {value &&
          arrayMedias
            .filter(
              (element) =>
                element.title.toLowerCase().includes(value.toLowerCase()) ||
                element.what.toLowerCase().includes(value.toLowerCase()) ||
                element.where.toLowerCase().includes(value.toLowerCase()) ||
                element.day.toLowerCase().includes(value.toLowerCase()) ||
                element.month.toLowerCase().includes(value.toLowerCase()) ||
                element.year
                  .toString()
                  .toLowerCase()
                  .includes(value.toLowerCase())
            )

            .map((element) => (
              <div key={element.id} className="col-12 col-lg-4">
                <div
                  className={`rounded-2 mt-0  card ${
                    theme
                      ? `border-dark bg-primary text-light`
                      : `border-lum  bg-light text-dark`
                  }`}
                >
                  <div className="m-5 mb-3 ">{element.media}</div>
                  <div className="card-body">
                    <h5 className="card-title">{element.title}</h5>
                    <p className="mt-2 mt-md-3 mt-lg-0 card-text">
                      {element.what.charAt(0).toUpperCase() +
                        element.what.slice(1)}{" "}
                      de presse {element.text}
                    </p>
                    <p className="mt-2 mt-md-3 mt-lg-1 card-text">
                      <small className="text-muted">
                        <u>Support :</u> {element.where} <br />
                        <u>Date de parution :</u> {element.day} {element.month}{" "}
                        {element.year}
                      </small>
                    </p>
                  </div>
                </div>
              </div>
            ))}
      </div>
    </div>
  );
};

export default SearchBar;
