import "./CerrarDia.css";

function CerrarDia({
  viajes,
  gnc,
  nafta,
  setViajes,
  setGnc,
  setNafta
}) {


  function cerrarDia() {

    const confirmar = window.confirm(
      "¿Está seguro de cerrar el día?\n\nSe guardará el resumen y se limpiarán los registros actuales."
    );

    if (!confirmar) {
      return;
    }

     if (
        viajes.length === 0 &&
        gnc.length === 0 &&
        nafta.length === 0
      ) {

        alert(
          "⚠️ No hay datos para cerrar el día"
        );

        return;
      }

    const totalIngresos = viajes.reduce(
      (total, viaje) =>
        total + Number(viaje.monto),
      0
    );


    const totalGNC = gnc.reduce(
      (total, carga) =>
        total + Number(carga.monto),
      0
    );


    const totalNafta = nafta.reduce(
      (total, carga) =>
        total + Number(carga.monto),
      0
    );


    const resumenDia = {

      id: Date.now(),

      fecha: new Date()
        .toLocaleDateString("es-AR"),

      hora: new Date()
        .toLocaleTimeString("es-AR"),

      viajes: viajes.length,

      ingresos: totalIngresos,

      gnc: totalGNC,

      nafta: totalNafta,

      gastos:
        totalGNC + totalNafta,

      ganancia:
        totalIngresos -
        (totalGNC + totalNafta)

    };


    const historial =
      JSON.parse(
        localStorage.getItem("historial")
      ) || [];


    const nuevoHistorial = [
      ...historial,
      resumenDia
    ];


    localStorage.setItem(
      "historial",
      JSON.stringify(nuevoHistorial)
    );

    setViajes([]);
    setGnc([]);
    setNafta([]);

    window.dispatchEvent(
      new Event("historialActualizado")
    );

    alert("✅ Día cerrado y guardado");
  }


  return (
  <div className="cerrar-dia">

    <button
      className="boton-cerrar"
      onClick={cerrarDia}
    >
      🔒 Cerrar Día
    </button>

  </div>
);
}

export default CerrarDia;