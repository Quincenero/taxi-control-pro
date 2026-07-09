import { useState } from "react";

function FormularioViaje({ setViajes }) {
  const [monto, setMonto] = useState("");
  const [formaPago, setFormaPago] = useState("Efectivo");

  function agregarViaje() {
    if (monto.trim() === "") {
      alert("Por favor, ingrese un monto.");
      return;
    }

    const importe = Number(monto);

    if (importe <= 0) {
      alert("El monto debe ser mayor que cero.");
      return;
    }

    const ahora = new Date();
    const fecha = ahora.toLocaleDateString("es-AR");
    const hora = ahora.toLocaleTimeString("es-AR", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    });

    const nuevoViaje = {
      id: Date.now(),
      fecha,
      hora,
      monto: importe,
      formaPago,
    };

    setViajes((viajesAnteriores) => [
      ...viajesAnteriores,
      nuevoViaje,
    ]);
    setMonto("");
    setFormaPago("Efectivo");
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

      <select
        value={formaPago}
        onChange={(e) => setFormaPago(e.target.value)}
      >
        <option value="Efectivo">Efectivo</option>
        <option value="Tarjeta">Tarjeta</option>
        <option value="Transferencia">Transferencia</option>
        <option value="Otro">Otro</option>
      </select>

      <button onClick={agregarViaje}>
        Agregar viaje
      </button>
    </div>
  );
}

export default FormularioViaje;