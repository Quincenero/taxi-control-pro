import "./Resumen.css";

function Resumen({ ingresos }) {
  return (
    <div className="card resumen">
      <h2>📊 Resumen del Día</h2>

      <p>💰 Ingresos: ${ingresos}</p>
      <p>⛽ GNC: $0</p>
      <p>⛽ Nafta: $0</p>
      <p>💸 Gastos: $0</p>
      <p>📈 Ganancias: $0</p>
      <p>🚕 Viajes: 0</p>
    </div>
  );
}

export default Resumen;