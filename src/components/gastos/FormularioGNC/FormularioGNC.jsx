import { useState, useRef } from "react";

function FormularioGNC({ setGnc }) {

  const [monto, setMonto] = useState("");
  const montoInput = useRef(null);

  function agregarGNC() {

    if (monto.trim() === "") {
      alert("Ingrese un monto.");
      return;
    }

    const importe = Number(monto);

    if (importe <= 0) {
      alert("El monto debe ser mayor que cero.");
      return;
    }

    const nuevaCarga = {
      id: Date.now(),
      fecha: new Date().toLocaleDateString("es-AR"),
      hora: new Date().toLocaleTimeString("es-AR", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
      }),
      monto: importe,
    };


    setGnc((gncAnterior) => [
      ...gncAnterior,
      nuevaCarga,
    ]);

    setMonto("");
    montoInput.current.focus();
  }


  return (
    <form 
      className="card"
      onSubmit={(e) => {
        e.preventDefault();
        agregarGNC();
      }}
    >

      <h2>🟢 Carga GNC</h2>

      <input
      ref={montoInput}
        type="number"
        value={monto}
        onChange={(e) => setMonto(e.target.value)}
        placeholder="Monto GNC"
      />

      <button type="submit">
        ➕ Agregar GNC
      </button>

    </form>
  );
}

export default FormularioGNC;