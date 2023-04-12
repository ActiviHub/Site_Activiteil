import React, { useContext } from "react";
import { ThemeContext } from "../../Context/ThemeContext";
import { LazyLoadComponent } from "react-lazy-load-image-component";
// import house from "../../img/photo_maison_nb.jpg";
// import map from "../../img/activimap.png";

import CardOver from "../Elements/CardOver";
import H2 from "../Elements/H2";
const Contact = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <>
      <div id="contacts">
        <div
          className={`p-3 mt-0 rounded-3 shadow-sm ${
            theme ? `bg-primary text-dark` : `bg-light text-light`
          }`}
        >
          <H2 content="Nous Contacter" />
          <div className="mt-5">
            <CardOver />
            {/* <CardOver image={house} alt="maison d'Activiteil" /> */}
            <LazyLoadComponent>
              <iframe
                title="map"
                className={`mt-3 rounded-2  text-white`}
                style={{ width: "100%", height: "500px" }}
                src="https://maps.google.com/maps?width=700&amp;height=440&amp;hl=en&amp;q=3%20rue%20boissy%20d%5C'anglas%2007400%20le%20teil+(Titre)&amp;ie=UTF8&amp;t=&amp;z=17&amp;iwloc=B&amp;output=embed"
              ></iframe>
            </LazyLoadComponent>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
