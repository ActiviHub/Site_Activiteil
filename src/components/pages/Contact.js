import React, { useContext } from "react";
import { ThemeContext } from "../../Context/ThemeContext";
// import house from "../../img/photo_maison_nb.jpg";
import map from "../../img/activimap.png";
import CardOver from "../Elements/CardOver";
import H2 from "../Elements/H2";
const Contact = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <>
      <div id="contacts">
        <div
          className={`p-3 mt-3 rounded-3 shadow-sm ${
            theme ? `bg-primary text-dark` : `bg-light text-light`
          }`}
        >
          <H2 content="Nous Contacter" />
          <div className="mt-5">
            <CardOver image={map} alt="Carte Emplacement ActiviTeil" />
            {/* <CardOver image={house} alt="maison d'Activiteil" /> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
