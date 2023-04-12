import React from "react";
import pct from "../../../img/articles/pct_article_france_bleu_2021_12_30.jpg";
import { LazyLoadImage } from "react-lazy-load-image-component";
const ArticleFranceBleu2021 = () => {
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
          alt="vignette article France Bleu"
        />
      </a>
    </>
  );
};

export default ArticleFranceBleu2021;
