const Boutons = ({ styleBouton, name, value, clic }) => {
  return (
    <>
      <button
        type="button"
        className={styleBouton}
        value={value}
        onClick={clic}
      >
        {name}
      </button>
    </>
  );
};

export default Boutons;
