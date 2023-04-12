import { LazyLoadImage } from "react-lazy-load-image-component";

const Articles = ({ lien, media, alt }) => {
  return (
    <>
      <div className="bg-danger">
        <a href={lien} target="_blank" rel="noreferrer">
          <LazyLoadImage src={media} className="img-fluid" alt={alt} />
        </a>
      </div>
    </>
  );
};

export default Articles;
