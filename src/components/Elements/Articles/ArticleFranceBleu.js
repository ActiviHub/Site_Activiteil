import pct from "../../../img/pct_article_france_bleu.jpg";
import { LazyLoadImage } from "react-lazy-load-image-component";
const ArticleFranceBleu = () => {
  return (
    <>
      <a
        href="https://www.francebleu.fr/infos/economie-social/le-teil-60-chomeurs-de-longue-duree-vont-retrouver-un-emploi-1640803902"
        target="_blank"
        rel="noreferrer"
      >
        <LazyLoadImage
          src={pct}
          className="img-fluid"
          alt="vignette article France 3"
        />
      </a>
    </>
  );
};

export default ArticleFranceBleu;
