const Cancion = ({ letra, errorLetra }) => {
  if (letra.length === 0) return null;

  if (errorLetra)
    return (
      <div className="card border-light">
        <div className="card-header bg-primary text-light font-weight-bold">
          Informacion Artista
        </div>
        <div className="card-body">
          <div className="alert alert-dismissible alert-success">
            <strong>Ohh!</strong> No se encontró la letra de esa canción.
          </div>
        </div>
      </div>
    );

  return (
    <>
      <h2>Letra Canción</h2>
      <p className="letra">{letra}</p>
    </>
  );
};

export default Cancion;
