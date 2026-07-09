import { useState, useEffect } from "react";
import Header from "./components/layout/Header/Header.jsx";
import FormularioViaje from "./components/viajes/FormularioViaje/FormularioViaje.jsx";
import Resumen from "./components/resumen/Resumen/Resumen.jsx";
import ListaViajes from "./components/viajes/ListaViajes/ListaViajes.jsx";
import FormularioGNC from "./components/gastos/FormularioGNC/FormularioGNC.jsx";
import ListaGNC from "./components/gastos/ListaGNC/ListaGNC.jsx";

function App() {

  const [viajes, setViajes] = useState(() => {
    const viajesGuardados = localStorage.getItem("viajes");

      return viajesGuardados
        ? JSON.parse(viajesGuardados)
        : [];
    });

  const [gnc, setGnc] = useState(() => {
    const gncGuardado = localStorage.getItem("gnc");
    return gncGuardado

      ? JSON.parse(gncGuardado)
      : [];
    
  });

  useEffect(() => {
    localStorage.setItem(
      "viajes",
      JSON.stringify(viajes)
    )
  }, [viajes]);

  useEffect (() => {
    localStorage.setItem(
      "gnc",
      JSON.stringify(gnc)
    );
  }, [gnc]);

  function eliminarViaje(id) {
    setViajes((viajesAnteriores) =>
     viajesAnteriores.filter((viaje) => viaje.id !== id)
    );
  }

  function eliminarGNC(id) {
    setGnc((cargasAnteriores) => 
      cargasAnteriores.filter((carga) => carga.id !==id)
    );
  }

  return (
    <>
      <Header />

      <FormularioViaje
        setViajes={setViajes}
      />

      <FormularioGNC 
        setGnc={setGnc}
      />

      <ListaViajes viajes={viajes} 
                  eliminarViaje={eliminarViaje}
      />

      <ListaGNC
        gnc={gnc}
        eliminarGNC={eliminarGNC}
      />

      <Resumen
        viajes={viajes}
        gnc={gnc}
        
      />
    </>
  );
}

export default App;