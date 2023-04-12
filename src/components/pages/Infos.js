import React, { useContext } from "react";
import { ThemeContext } from "../../Context/ThemeContext";
import H2 from "../Elements/H2";

const Infos = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <>
      <div id="infos">
        <div
          className={`p-3 mt-3  rounded-3 shadow-sm ${
            theme ? `bg-primary text-dark` : `bg-light text-light`
          }`}
        >
          <H2 content="Informations Légales" />
          <div className="container">
            <div className="text-start">
              <h1>
                Le présent site est la propriété de l'Association Activiteil
              </h1>
            </div>

            <br />

            <div
              className={`row text-start
           ${theme ? `bg-primary text-light` : `bg-light text-dark`}
          `}
            >
              <div className="col">
                <h6>
                  <u>Siége Social :</u>
                  <br />3 Rue Boissy-D'Anglas 07400 Le Teil
                  <br /> <br />
                  <u>Tél. :</u> 04 75 52 71 75
                  <br /> <br />
                  <u>SIRET :</u>
                  <br />
                  905 233 888 000 15
                  <br /> <br />
                  <u>Hébergeur :</u> OVH <br />2 Rue Kellermann, <br />
                  59100 Roubaix
                </h6>
              </div>

              <div className="col">
                <h6>
                  <u>Directeur de la publication :</u> <br />
                  Pierre Mathéus
                  <br /> <br />
                  <u>Directrice de communication :</u> <br />
                  Marianne Guyon
                  <br /> <br />
                  <u>Développement Web, Graphisme et Photo :</u> <br />
                  Julien Goscicki
                  <br /> <br />
                  <u>Illustrations :</u> <br />
                  Marion Riera
                  <br /> <br />
                </h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Infos;
