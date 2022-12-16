const Partner = ({ link, src, alt }) => {
  return (
    <>
      <div className="col-sm-3 col-lg-2 badge bg-light my-auto shadow-lg ">
        <a href={link} target="_blank" rel="noreferrer">
          <img src={src} className="img-fluid" alt={alt} />
        </a>
      </div>
    </>
  );
};

export default Partner;
