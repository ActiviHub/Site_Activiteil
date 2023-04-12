import React from "react";
import pct from "../../../img//articles/pct_article_f3_2022_05_31.jpg";
import { LazyLoadImage } from "react-lazy-load-image-component";

const ArticleFrance3 = () => {
  return (
    <>
      <a
        href="https://france3-regions.francetvinfo.fr/auvergne-rhone-alpes/ardeche/ardeche-le-programme-zero-chomeurs-de-longue-duree-rend-les-salaries-heureux-2552168.html"
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

export default ArticleFrance3;
