import "./ListaGNC.css";

function ListaGNC({ gnc, eliminarGNC }) {

  console.log("Datos GNC: ", gnc);
  console.log("Carga GNC:", gnc);

  return (
    <div className="card">
      <h2>⛽ Historial GNC</h2>

      {gnc.length === 0 ? (
        <p>No hay cargas registradas.</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Fecha</th>
              <th>Hora</th>
              <th>Monto</th>
              <th>Acción</th>
            </tr>
          </thead>

          <tbody>
            {gnc.map((carga) => (
              <tr key={carga.id}>
                <td>{carga.fecha}</td>
                <td>{carga.hora}</td>
                <td>${carga.monto.toLocaleString("es-AR")}</td>
                <td>
                    <button onClick={() => eliminarGNC(carga.id)}>
                        🗑️
                    </button>
                </td>
              </tr>
            ))}
          </tbody>

        </table>
      )}

    </div>
  );
}

export default ListaGNC;