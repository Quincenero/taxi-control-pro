import { useEffect, useState } from "react";
import "./HistorialDias.css";

function HistorialDias() {

  const [historial, setHistorial] = useState(() => {

    const datosGuardados =
        localStorage.getItem("historial");

    return datosGuardados
        ? JSON.parse(datosGuardados)
        : [];

    });

    useEffect(() => {

      function cargarHistorial() {

        const datos =
          JSON.parse(
            localStorage.getItem("historial")
          ) || [];

        setHistorial(datos);
      }


      window.addEventListener(
        "historialActualizado",
        cargarHistorial
      );


      return () => {
        window.removeEventListener(
          "historialActualizado",
          cargarHistorial
        );
      };

    }, []);

    function eliminarDia(id) {
        const nuevoHistorial =
            historial.filter(
            (dia) => dia.id !== id
        );
        setHistorial(nuevoHistorial);

        localStorage.setItem(
            "historial",
            JSON.stringify(nuevoHistorial)
        );
    }

  return (
    <div className="card historial">

      <h2>📅 Historial de días</h2>


      {historial.length === 0 ? (

        <p>
          No hay días cerrados todavía.
        </p>

      ) : (

        <table>

          <thead>
            <tr>
              <th>Fecha</th>
              <th>Viajes</th>
              <th>Ingresos</th>
              <th>Gastos</th>
              <th>Ganancia</th>
              <th>Acción</th>
            </tr>
          </thead>


          <tbody>

            {historial.map((dia) => (

              <tr key={dia.id}>

                <td>
                  {dia.fecha}
                </td>

                <td>
                  {dia.viajes}
                </td>

                <td>
                  ${dia.ingresos.toLocaleString("es-AR")}
                </td>

                <td>
                  ${dia.gastos.toLocaleString("es-AR")}
                </td>

                <td>
                  ${dia.ganancia.toLocaleString("es-AR")}
                </td>

                <td>
                    <button
                        onClick={() => eliminarDia(dia.id)}
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


export default HistorialDias;