import { useState } from "react";

function FormularioViaje({ setIngresos }) {
  const [monto, setMonto] = useState("");

  function agregarViaje() {
    setIngresos((valorAnterior) => valorAnterior + Number(monto));
    setMonto("");
  }

  return (
    <div className="card">
      <h2>🚕 Nuevo Viaje</h2>

      <input
        type="number"
        value={monto}
        onChange={(e) => setMonto(e.target.value)}
        placeholder="Monto del viaje"
      />

      <button onClick={agregarViaje}>
        Agregar viaje
      </button>
    </div>
  );
}

export default FormularioViaje;