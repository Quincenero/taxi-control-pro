# Changelog

Todos los cambios importantes de **Taxi Control Pro** se documentarán en este archivo.

El formato está inspirado en *Keep a Changelog* y utiliza versionado semántico.

---

## [0.6.0] - 2026-07-09

### ✨ Agregado

* Formulario para registrar viajes.
* Formulario para registrar cargas de GNC.
* Formulario para registrar cargas de Nafta.
* Historial de viajes.
* Historial de cargas de GNC.
* Historial de cargas de Nafta.
* Resumen diario con:

  * Ingresos.
  * Gastos.
  * Ganancia.
  * Cantidad de viajes.
  * Promedio por viaje.
* Función **Cerrar Día**.
* Historial de cierres diarios.
* Actualización automática del historial después de cerrar el día.
* Confirmación antes de cerrar el día.
* Validación para evitar cerrar un día sin datos.

### 🎨 Mejoras

* Rediseño del resumen con tarjetas.
* Formularios unificados.
* Soporte para la tecla **Enter** en los formularios.
* Mejoras de experiencia en dispositivos móviles.
* Limpieza y reorganización del CSS global.
* Mejor organización de componentes React.

### 🐛 Correcciones

* Corrección de cálculos del resumen.
* Corrección del manejo de valores numéricos.
* Corrección del historial para actualizarse automáticamente.
* Corrección de errores relacionados con `useEffect` y `useState`.
* Mejoras generales de estabilidad.

---

## Próximas versiones

* Dashboard de estadísticas.
* Filtro por mes.
* Exportación a CSV.
* Gráficos de ingresos y gastos.
* Configuración de la aplicación.
* Sincronización en la nube.
