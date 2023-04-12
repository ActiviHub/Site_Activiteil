import React from "react";
import pct from "../../../img/articles/pct_article_trib_2022_07_28.jpg";
import { LazyLoadImage } from "react-lazy-load-image-component";

const ArticleTribune = () => {
  return (
    <>
      <a
        href="images/2022-07-28-article-la-tribune_a4.pdf"
        target="_blank"
        rel="noreferrer"
      >
        <LazyLoadImage
          src={pct}
          className="img-fluid"
          alt="vignette article La Tribune"
        />
      </a>
    </>
  );
};

export default ArticleTribune;
