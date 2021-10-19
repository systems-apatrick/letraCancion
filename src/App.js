import axios from "axios";
import { Fragment, useState, useEffect } from "react";
import Cancion from "./components/Cancion";
import Formulario from "./components/Formulario";
import Info from "./components/Info";

function App() {
  const [busquedaLetra, guardarBusquedaLetra] = useState({});
  const [letra, guardarLetra] = useState("");
  const [info, guardarInfo] = useState({});

  // controlar errores para respuesta  son null o 404
  const [errorLetra, guardarErrorLetra] = useState(false);
  const [errorInfo, guardarErrorInfo] = useState(false);

  useEffect(() => {
    if (Object.keys(busquedaLetra).length === 0) return;

    const consultarAPI_letra = async () => {
      const { artista, cancion } = busquedaLetra;
      const url_letra = `https://api.lyrics.ovh/v1/${artista}/${cancion}`;
      const url_informacion = `https://www.theaudiodb.com/api/v1/json/1/search.php?s=${artista}`;

      await Promise.all([
        axios
          .get(url_letra)
          .then(function (letra) {
            // guardarLetra
            guardarLetra(letra.data.lyrics);
            guardarErrorLetra(false);
          })
          .catch(function (error) {
            // handle error
            guardarErrorLetra(true);
          }),
        axios
          .get(url_informacion)
          .then(function (informacion) {
            // guardar info de consulta
            if (informacion.data.artists[0] === null) {
              guardarErrorInfo(true);
            } else {
              guardarErrorInfo(false);
              guardarInfo(informacion.data.artists[0]);
            }
          })
          .catch(function (error) {
            // handle error
            guardarErrorInfo(true);
          }),
      ]);
    };

    consultarAPI_letra();
  }, [busquedaLetra]);
  return (
    <Fragment>
      <Formulario guardarBusquedaLetra={guardarBusquedaLetra} />

      <div className="container mt-5">
        <div className="row">
          <div className="col-md-6">
            <Info info={info} errorInfo={errorInfo} />
          </div>
          <div className="col-md-6">
            <Cancion letra={letra} errorLetra={errorLetra} />
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
