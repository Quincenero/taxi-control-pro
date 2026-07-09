import { useState } from "react";

function FormularioNafta({ setNafta }) {

  const [monto, setMonto] = useState("");

  function agregarNafta() {

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

    setNafta((naftaAnterior) => [
      ...naftaAnterior,
      nuevaCarga,
    ]);

    setMonto("");
  }


  return (
    <div className="card">

      <h2>⛽ Carga Nafta</h2>

      <input
        type="number"
        value={monto}
        onChange={(e) => setMonto(e.target.value)}
        placeholder="Monto Nafta"
      />

      <button onClick={agregarNafta}>
        Agregar Nafta
      </button>

    </div>
  );
}

export default FormularioNafta;