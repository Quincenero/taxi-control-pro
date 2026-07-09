import "./ListaNafta.css";

function ListaNafta({ nafta, eliminarNafta }) {

  console.log("Datos Nafta:", nafta);

  return (
    <div className="card">
      <h2>⛽ Historial Nafta</h2>

      {nafta.length === 0 ? (
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
            {nafta.map((carga) => (
              <tr key={carga.id}>
                <td>{carga.fecha}</td>
                <td>{carga.hora}</td>
                <td>
                  ${carga.monto.toLocaleString("es-AR")}
                </td>
                <td>
                  <button
                    onClick={() => eliminarNafta(carga.id)}
                  >
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

export default ListaNafta;