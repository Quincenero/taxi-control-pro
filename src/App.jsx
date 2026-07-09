import { useState } from "react";
import Header from "./components/layout/Header/Header.jsx";
import FormularioViaje from "./components/viajes/FormularioViaje/FormularioViaje.jsx";
import Resumen from "./components/resumen/Resumen/Resumen.jsx";
import ListaViajes from "./components/viajes/ListaViajes/ListaViajes.jsx";

function App() {

  const [viajes, setViajes] = useState([]);

  function eliminarViaje(id) {
    setViajes((viajesAnteriores) =>
     viajesAnteriores.filter((viaje) => viaje.id !== id)
    );
  }

  return (
    <>
      <Header />

      <FormularioViaje
        setViajes={setViajes}
      />
      <ListaViajes viajes={viajes} 
                  eliminarViaje={eliminarViaje}
      />
      <Resumen
        viajes={viajes}
        
      />
    </>
  );
}

export default App;