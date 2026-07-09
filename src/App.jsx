import { useState, useEffect } from "react";
import Header from "./components/layout/Header/Header.jsx";
import FormularioViaje from "./components/viajes/FormularioViaje/FormularioViaje.jsx";
import Resumen from "./components/resumen/Resumen/Resumen.jsx";
import ListaViajes from "./components/viajes/ListaViajes/ListaViajes.jsx";
import FormularioGNC from "./components/gastos/FormularioGNC/FormularioGNC.jsx";
import ListaGNC from "./components/gastos/ListaGNC/ListaGNC.jsx";
import FormularioNafta from "./components/gastos/FormularioNafta/FormularioNafta.jsx";
import ListaNafta from "./components/gastos/ListaNafta/ListaNafta.jsx";
import CerrarDia from "./components/resumen/CerrarDia/CerrarDia.jsx";
import HistorialDias from "./components/resumen/HistorialDias/HistorialDias.jsx";

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

  const [nafta, setNafta] = useState(() => {
    const naftaGuardada = localStorage.getItem("nafta");

    return naftaGuardada
      ? JSON.parse(naftaGuardada)
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

  useEffect(() => {
    localStorage.setItem(
      "nafta",
      JSON.stringify(nafta)
    );
  }, [nafta]);

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

  function eliminarNafta(id) {
    setNafta((cargasAnteriores) =>
      cargasAnteriores.filter(
        (carga) => carga.id !== id
      )
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

      <FormularioNafta
        setNafta={setNafta}
      />

      <ListaViajes viajes={viajes} 
                  eliminarViaje={eliminarViaje}
      />

      <ListaGNC
        gnc={gnc}
        eliminarGNC={eliminarGNC}
      />

      <ListaNafta
        nafta={nafta}
        eliminarNafta={eliminarNafta}
      />

      <Resumen
        viajes={viajes}
        gnc={gnc}
        nafta={nafta}
      />

      <CerrarDia
        viajes={viajes}
        gnc={gnc}
        nafta={nafta}
        setViajes={setViajes}
        setGnc={setGnc}
        setNafta={setNafta}
      />

      <HistorialDias/>

    </>
  );
}

export default App;