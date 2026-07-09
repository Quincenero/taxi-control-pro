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


    localStorage.setItem(
      "historial",
      JSON.stringify([
        ...historial,
        resumenDia
      ])
    );


    setViajes([]);
    setGnc([]);
    setNafta([]);


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