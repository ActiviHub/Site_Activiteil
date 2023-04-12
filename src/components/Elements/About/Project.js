import React, { useState } from "react";
import "./Members.css";
import modeleco from "../../../img/about/modele-economique-ebe.jpg";
import dessin from "../../../img/about/dessin-organigramme.png";

const Project = () => {
  const [toggleState, setToggleState] = useState(false);

  const toggleFonction = () => {
    setToggleState(!toggleState);
  };

  const caList = [
    "Frédéric Hoyiez – Président",
    "Anne Samiez – Secrétaire",
    "Jérôme Clavert – trésorier",
    "Olivier Peverelli",
    "Laurent Consigny",
  ];

  const CA = caList.map((caItem, index) => (
    <li key={index} className="puce text-muted">
      <span key={index} className="text-members">
        {caItem}
      </span>
    </li>
  ));

  const MaPage = ({ who }) => {
    return <>{who}</>;
  };

  return (
    <>
      <h3 className="pt-md-3 text-start">
        <strong>
          <u className="underline1">Le projet et son fonctionnement</u>
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
          <p className="row container lead text-start vh-50 p-5">
            <ul className="col-xl-6  pb-3">
              <strong>
                <u className="underline2">
                  Notre mission en tant qu’entreprise à but d’emploi :
                </u>
              </strong>
              <br />

              <span className="text-muted">
                Produire des &nbsp;
                <u>
                  <strong>emplois supplémentaires</strong>
                </u>
                &nbsp;en CDI manquants sur le territoire et adaptés aux
                personnes privées durablement d’emploi habitantes du territoire,
                qu’elle embauche sur proposition du &nbsp;
                <u>
                  <strong>comité local pour l’emploi (CLE)</strong>
                </u>
                .
              </span>
              <br />
            </ul>
            <ul className="col-xs-12 col-xl-5 ms-xs-0 ms-md-5 mt-sm-5 mt-md-0 pb-3">
              <strong>
                <u className="underline2">Notre raison d’être :</u>
              </strong>

              <br />
              <span className="text-muted">
                Nos emplois rendent leur dignité à des personnes privées
                d’emploi à travers des activités utiles au territoire du Teil et
                respectueuses de l’environnement.
                <br />
                <br />
                Nos emplois privilégient l’humain et le développement des
                compétences de chacun.ne en inventant de nouvelles formes
                d’entreprendre basées sur l’intelligence collective.
              </span>
            </ul>
            <ul className="col-12 pb-3">
              <br /> <br />
              <strong>
                <u className="underline2">
                  Le modèle économique d’une entreprise à but d’emploi (EBE) :
                </u>
              </strong>
              <br />
              <span className="text-muted">
                Le modèle économique d’une entreprise à but d’emploi (EBE) reste
                un objet de l’
                <u>
                  <strong>expérimentation</strong>
                </u>
                . <br />
                En effet, on ne peut tirer de conclusions trop hâtives tant que
                les effectifs d’une EBE ne sont pas stabilisés <br /> et
                l’exhaustivité atteinte à l’échelle du territoire. Les
                enseignements seront donc tirés sur le long terme.
                <br />
                <br />
                Par ailleurs,
                <strong>
                  &nbsp;le modèle économique d’une EBE dépend de ses supports
                  d’activité et de leur nature&nbsp;
                </strong>
                (prestations, <br />
                production, mise à disposition de personnel…), il est donc
                difficile de parler de modèle économique unique.
                <br /> <br />
                <div className="row">
                  <div className="col-xs-12 col-xl-5">
                    La majorité des charges d’une EBE réside dans sa masse
                    salariale.
                    <br />
                    <br /> Comme pour toute entreprise, les produits et services
                    de l’EBE génèrent un chiffre d’affaires. <br />
                    En fonction de ses besoins, l’EBE est également
                    <strong>
                      &nbsp; <u>subventionnée</u> pour couvrir partiellement
                      leurs charges liées à la production de nombreux&nbsp;
                      <u>emplois supplémentaires</u>
                    </strong>
                    .
                  </div>
                  <div className="col-xs-12 col-xl-7">
                    Par ailleurs, une EBE peut recourir aux financements de
                    droit commun notamment en phase d’amorçage : fonds propres,
                    investissements, trésorerie…
                    <br />
                    <br />
                    Une EBE est une structure de l’économie sociale et solidaire
                    à but non lucratif :
                    <strong>
                      &nbsp; elle recherche la pérennité <br />
                      économique de la structure lui permettant de poursuivre sa
                      mission de production d’emplois.
                    </strong>
                    <br />
                    <br />
                    Lorsque l’activité permet de dégager des bénéfices, ceux-ci
                    sont réinvestis dans l’objet de l’entreprise.
                  </div>
                </div>
                <img
                  src={modeleco}
                  className="col-md-7 mt-5 rounded img-fluid"
                  alt="modèle économique EBE"
                />
              </span>
            </ul>

            <ul className="col-12 mt-5">
              <strong>
                <u className="underline2">Pôles d'activité :</u>
              </strong>
              <br />

              <img
                src={dessin}
                className="col-12 col-md-7 mt-5 rounded img-fluid"
                alt="modèle économique EBE"
              />
            </ul>

            <div className="row mt-5">
              <div className="col-12">
                <strong>
                  <u className="underline2">Gouvernance :</u>
                </strong>
              </div>
              <div className="col-12 col-md-6">
                <ul className="mt-5">
                  <strong>
                    <u className="underline2">Les collèges :</u>
                  </strong>
                </ul>

                <li className="puce text-muted">
                  <span className="text-members">Les salariés de l'EBE</span>
                </li>
                <li className="puce text-muted">
                  <span className="text-members">
                    Les utilisateurs de service (personnes physiques ou morales
                  </span>
                </li>
                <li className="puce text-muted">
                  <span className="text-members">
                    Les utilisateurs de service (personnes physiques ou morales
                    <br />
                    qui utilisent les services et prestations de l’association),
                  </span>
                </li>
                {/* <li className="text-muted">Les salariés de l'EBE</li> */}
                <li className="puce text-muted">
                  <span className="text-members">
                    Les partenaires de l’EBE (personnes physiques ou morales
                    <br />
                    qui par leur action soutiennent l’association dans la durée)
                  </span>
                </li>
              </div>

              <div className="col-12 col-md-6 mt-5">
                <ul>
                  <strong>
                    <u className="underline2">
                      Composition du conseil d'administration :
                    </u>
                  </strong>
                </ul>
                <MaPage who={CA} />
              </div>
            </div>
          </p>
        </div>
      ) : (
        <div className="col m-md-1 text-start">
          <button
            onClick={toggleFonction}
            type="button"
            className="btn btn-info btn-sm"
          >
            <strong>En savoir plus</strong>
          </button>
        </div>
      )}
    </>
  );
};

export default Project;
