import { useState } from "react";
import Header from "./components/layout/Header/Header.jsx";
import FormularioViaje from "./components/viajes/FormularioViaje/FormularioViaje.jsx";
import Resumen from "./components/resumen/Resumen/Resumen.jsx";

function App() {
  const [ingresos, setIngresos] = useState(0);

  return (
    <>
      <Header />
      <FormularioViaje 
        setIngresos={setIngresos} />
      <Resumen 
        ingresos={ingresos}
      />
    </>
  );
}

export default App;