import { useState, useRef } from "react";

function FormularioNafta({ setNafta }) {

  const [monto, setMonto] = useState("");
  const montoInput = useRef(null)

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
    montoInput.current.focus();
  }


  return (
    <form className="card"
      onSubmit={(e) => {
        e.preventDefault();
        agregarNafta;
      }}
    >

      <h2>⛽ Carga Nafta</h2>

      <input
        ref={montoInput}
        type="number"
        value={monto}
        onChange={(e) => setMonto(e.target.value)}
        placeholder="Monto Nafta"
      />

      <button type="submit">
        ➕ Agregar Nafta
      </button>

    </form>
  );
}

export default FormularioNafta;