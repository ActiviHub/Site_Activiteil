import pct from "../../../img/pct_article_le_dauphine.jpg";
import { LazyLoadImage } from "react-lazy-load-image-component";
const ArticleDauphine = () => {
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
          alt="vignette article France 3"
        />
      </a>
    </>
  );
};

export default ArticleDauphine;
