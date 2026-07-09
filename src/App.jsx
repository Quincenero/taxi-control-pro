import { useState } from "react";
import Header from "./components/Header/Header";
import FormularioViaje from "./components/FormularioViaje/FormularioViaje.jsx";
import Resumen from "./components/Resumen/Resumen.jsx";

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