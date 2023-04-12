import React from "react";
import pct from "../../../img/articles/pct_article_le_dauphine_2022_10_06.jpg";
import { LazyLoadImage } from "react-lazy-load-image-component";
const ArticleDauphine202210 = () => {
  return (
    <>
      <a
        href="https://www.ledauphine.com/social/2022/10/26/le-teil-les-activites-de-l-entreprise-a-but-d-emploi-en-images"
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

export default ArticleDauphine202210;
