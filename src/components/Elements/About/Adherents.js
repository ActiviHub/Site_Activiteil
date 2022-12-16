const Adherents = () => {
  return (
    <>
      <div className="col-12 m-md-1">
        <h3 className="pt-md-3 text-start">
          <strong>
            <u>Les adhérents</u>
          </strong>
        </h3>

        <div className="row container lead text-start vh-50 p-5">
          <div className="col-md-2 pb-3">
            <strong>Les entreprises :</strong>
            <br />
            <span className="text-muted lead">
              <li>Le Duff,</li>
              <li>AVS,</li>
              <li>Intermarché,</li>
              <li>Lafarge Holcim ciments</li>
            </span>
          </div>
          <div className="col-md-6 pb-3">
            <strong>
              Les acteurs de l’Economie Sociale et Solidaire (ESS) :
            </strong>
            <br />
            <span className="text-muted lead">
              <li>The Teil to be,</li>
              <li>Rebond,</li>
              <li>Zone 5,</li>
              <li>Lez’arts collectif,</li>
              <li>Mayesha espoir,</li>
              <li> Les Connexions,</li>
              <li> Le Terreau,</li>
            </span>
          </div>
          <div className="col-md-4  pb-3">
            <strong>Collectivités :</strong>
            <br />
            <span className="text-muted lead ">
              <li>mairie du Teil</li>
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Adherents;
