import pct from "../../../img/pct_article_le_dauphine.jpg";
const ArticleDauphine = () => {
  return (
    <>
      <a
        href="images/2022-04-Article-DL-Avril-22.png"
        // href="https://www.ledauphine.com/social/2022/04/04/grace-au-programme-zero-chomeur-ces-ardechois-ont-decroche-un-cdi"
        target="_blank"
        rel="noreferrer"
      >
        <img src={pct} className="img-fluid" alt="vignette article France 3" />
      </a>
    </>
  );
};

export default ArticleDauphine;
