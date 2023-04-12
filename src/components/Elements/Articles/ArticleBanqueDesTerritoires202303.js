import pct from "../../../img/pct_article_banque_des_territoires.jpg";
import { LazyLoadImage } from "react-lazy-load-image-component";
const ArticleBanqueDesTerritoires202303 = () => {
  return (
    <>
      <a
        href="https://www.banquedesterritoires.fr/le-teil-des-activites-non-concurrentielles-creatrices-demploi-local-utiles-au-territoire-07"
        target="_blank"
        rel="noreferrer"
      >
        <LazyLoadImage
          src={pct}
          className="img-fluid"
          alt="vignette article Banque des Territoires"
        />
      </a>
    </>
  );
};

export default ArticleBanqueDesTerritoires202303;
