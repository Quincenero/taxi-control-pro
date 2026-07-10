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
    const diasTrabajados = historial.length;

      const ingresosTotales = historial.reduce(
        (total, dia) => total + dia.ingresos,
        0
      );

      const gastosTotales = historial.reduce(
        (total, dia) => total + dia.gastos,
        0
      );

      const gananciaTotal = historial.reduce(
        (total, dia) => total + dia.ganancia,
        0
      );

      const viajesTotales  = historial.reduce(

        (total, dia) => total + dia.viajes,
        0
      );

      const promedioGanancia =
        diasTrabajados > 0
          ? gananciaTotal / diasTrabajados
          : 0;


  return (
    <div className="card historial">

      <h2>📅 Historial de días</h2>

      <div className="estadisticas-historial">

        <div className="estadistica">
          <span>📅 Días</span>
          <strong>{diasTrabajados}</strong>
        </div>

        <div className="estadistica">
          <span>🚕 Viajes</span>
          <strong>{viajesTotales}</strong>
        </div>

        <div className="estadistica">
          <span>💰 Ingresos</span>
          <strong>
            ${ingresosTotales.toLocaleString("es-AR")}
          </strong>
        </div>

        <div className="estadistica">
          <span>💸 Gastos</span>
          <strong>
            ${gastosTotales.toLocaleString("es-AR")}
          </strong>
        </div>

        <div className="estadistica">
          <span>📈 Ganancia</span>
          <strong>
            ${gananciaTotal.toLocaleString("es-AR")}
          </strong>
        </div>

        <div className="estadistica">
          <span>📊 Promedio</span>
          <strong>
            ${Math.round(promedioGanancia).toLocaleString("es-AR")}
          </strong>
        </div>

      </div>

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