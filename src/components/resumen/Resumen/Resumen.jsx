import "./Resumen.css";

function Resumen({ viajes = [], gnc = [], nafta = [] }) {

  const totalIngresos = viajes.reduce(
    (total, viaje) => total + Number(viaje.monto),
    0
  );

  const totalGNC = gnc.reduce(
    (total, carga) => total + Number(carga.monto),
    0
  );

  const totalNafta = nafta.reduce(
    (total, carga) => total + Number(carga.monto),
    0
  );

  const gastosTotales = totalGNC + totalNafta;

  const gananciaNeta = totalIngresos - gastosTotales;

  const promedioViaje =
    viajes.length > 0
      ? totalIngresos / viajes.length
      : 0;


  return (
    <div className="card resumen">

      <h2>📊 Resumen del Día</h2>

      <div className="resumen-grid">

        <div className="dato ingreso">
          <span>💰 Ingresos</span>
          <strong>
            ${totalIngresos.toLocaleString("es-AR")}
          </strong>
        </div>

        <div className="dato gasto">
          <span>💸 Gastos</span>
          <strong>
            ${gastosTotales.toLocaleString("es-AR")}
          </strong>
        </div>

        <div className="dato ganancia">
          <span>📈 Ganancia</span>
          <strong>
            ${gananciaNeta.toLocaleString("es-AR")}
          </strong>
        </div>

        <div className="dato viajes">
          <span>🚕 Viajes</span>
          <strong>
            {viajes.length}
          </strong>
        </div>

        <div className="dato gnc">
          <span>🟢 GNC</span>
          <strong>
            ${totalGNC.toLocaleString("es-AR")}
          </strong>
        </div>

        <div className="dato nafta">
          <span>⛽ Nafta</span>
          <strong>
            ${totalNafta.toLocaleString("es-AR")}
          </strong>
        </div>

        <div className="dato promedio">
          <span>📊 Promedio</span>
          <strong>
            ${Math.round(promedioViaje).toLocaleString("es-AR")}
          </strong>
        </div>
      </div>
    </div>
  );
}
export default Resumen;