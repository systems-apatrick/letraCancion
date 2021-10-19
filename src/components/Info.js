const Info = ({ info, errorInfo }) => {
  if (Object.keys(info).length === 0) return null;
  if (errorInfo)
    return (
      <div className="card border-light">
        <div className="card-header bg-primary text-light font-weight-bold">
          Informacion Artista
        </div>
        <div className="card-body">
          <div className="alert alert-dismissible alert-success">
            <strong>Ohh!</strong> No se encontraron datos de ese artista .
          </div>
        </div>
      </div>
    );

  const { strArtistThumb, strGenre, strBiographyES } = info;
  return (
    <div className="card border-light">
      <div className="card-header bg-primary text-light font-weight-bold">
        Informacion Artista
      </div>
      <div className="card-body">
        <img src={strArtistThumb} alt="Logo Artista" className="col-md-12" />
        <p className="card-text"> Género: {strGenre}</p>
        <h2 className="card-text"> Biografía: {info.strFacebook}</h2>
        <p className="card-text text-justify"> {strBiographyES}</p>

        <p className="card-text">
          <a
            href={`https://${info.strFacebook}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-facebook"></i>
          </a>
          <a
            href={`https://${info.strTwitter}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-twitter"></i>
          </a>
          <a
            href={`${info.strLastFMChart}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-lastfm"></i>
          </a>
        </p>
      </div>
    </div>
  );
};

export default Info;
