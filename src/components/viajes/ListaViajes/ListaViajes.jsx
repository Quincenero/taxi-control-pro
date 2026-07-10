import "./ListaViajes.css";


function formatoDinero(valor) {
    return new Intl.NumberFormat("es-Ar", {
        style:"currency",
        currency: "ARS",
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
    }).format(valor);
}

function ListaViajes({ viajes, eliminarViaje }) {
  return (
    <div className="card">
      <h2>📋 Historial de Viajes</h2>

      {viajes.length === 0 ? (
        <p>No hay viajes registrados.</p>
      ) : 
        <div className="tabla-wrapper">
            <table>
                <thead>
                    <tr>
                        <th>Fecha</th>
                        <th>Hora</th>
                        <th>Forma de Pago</th>
                        <th>Monto</th>
                        <th>Acción</th>
                    </tr>
                </thead>
                <tbody>
                    {viajes.map((viaje) => (
                        <tr key={viaje.id}>
                            <td>{viaje.fecha}</td>
                            <td>{viaje.hora}</td>
                            <td>{viaje.formaPago}</td>
                            <td>{formatoDinero(viaje.monto)}</td>
                            <td>
                                <button onClick={() => {
                                console.log("Eliminar:", viaje.id);
                                eliminarViaje(viaje.id);
                                }}>
                                🗑️
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
                
            </table>
        </div>
    }      
   </div>
);
}

export default ListaViajes;