import "./Resumen.css";

function Resumen({ viajes, gnc }) {
  const totalIngresos = viajes.reduce(
    (total, viaje) => total + viaje.monto,
    0
  );

  const totalGNC = gnc.reduce(
    (total, carga) => total + carga.monto,
    0
  );

  const ganancia = totalIngresos - totalGNC;

  return (
    <div className="card resumen">
      <h2>📊 Resumen del Día</h2>

      <p>💰 Ingresos: ${totalIngresos.toLocaleString("es-AR")}</p>
      <p>⛽ GNC: ${totalGNC.toLocaleString("es-AR")}</p>
      <p>⛽ Nafta: $0</p>
      <p>💸 Gastos: $0</p>
      <p>📈 Ganancias: ${ganancia.toLocaleString("es-AR")}</p>
      <p>🚕 Viajes: {viajes.length}</p>
    </div>
  );
}

export default Resumen;