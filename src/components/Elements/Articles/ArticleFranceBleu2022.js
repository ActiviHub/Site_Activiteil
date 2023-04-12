import React from "react";
import pct from "../../../img/articles/pct_article_france_bleu_2022_10_26.jpg";
import { LazyLoadImage } from "react-lazy-load-image-component";

const ArticleFranceBleu2022 = () => {
  return (
    <>
      <a
        href="images/2022-10-26-article-le-dauphine.pdf"
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

export default ArticleFranceBleu2022;
