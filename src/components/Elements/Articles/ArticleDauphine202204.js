import React from "react";
import pct from "../../../img//articles/pct_article_le_dauphine_2022_04_04.jpg";
import { LazyLoadImage } from "react-lazy-load-image-component";
const ArticleDauphine202204 = () => {
  return (
    <>
      <a
        href="images/2022-04-Article-DL-Avril-22.png"
        target="_blank"
        rel="noreferrer"
      >
        <LazyLoadImage
          src={pct}
          className="img-fluid"
          alt="vignette article Le Dauphiné"
        />
      </a>
    </>
  );
};

export default ArticleDauphine202204;
