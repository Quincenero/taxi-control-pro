import "./Resumen.css";

function Resumen({ viajes }) {
  const ingresos = viajes.reduce((total, viaje) => {
    return total + viaje.monto;
  }, 0);

  return (
    <div className="card resumen">
      <h2>📊 Resumen del Día</h2>

      <p>💰 Ingresos: ${ingresos}</p>
      <p>⛽ GNC: $0</p>
      <p>⛽ Nafta: $0</p>
      <p>💸 Gastos: $0</p>
      <p>📈 Ganancias: $0</p>
      <p>🚕 Viajes: {viajes.length}</p>
    </div>
  );
}

export default Resumen;