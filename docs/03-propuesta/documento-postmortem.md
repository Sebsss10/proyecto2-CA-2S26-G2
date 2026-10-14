# Documento Post-Mortem: Analisis de Incidente en Produccion

---

## 1. Resumen del Incidente
El domingo de operacion a las 6:45 PM, durante el pico de mayor afluencia de clientes en Refacciones Las Delicias, la pantalla del mostrador dejo de actualizar las nuevas comandas ingresadas desde la caja registradora. Las comandas continuaban guardandose localmente, pero el canal de sincronizacion en tiempo real hacia la pantalla de despacho en cocina se congelo por un lapso de 35 minutos, afectando la preparacion de 22 pedidos.

---

## 2. Linea de Tiempo (Timeline)

* **06:00 PM:** Inicio del horario pico de atencion. El sistema registra y despliega comandas con normalidad.
* **06:40 PM:** La red Wi-Fi local experimenta una caida momentanea de señal debido a interferencia en el mostrador.
* **06:45 PM:** La interfaz de despacho deja de recibir eventos de actualizacion de comandas. Las colaboradoras continúan despachando unicamente los pedidos visibles en pantalla.
* **07:05 PM:** El personal de cocina detecta que hay clientes en caja con tickets impresos cuya comanda no aparece en el panel digital.
* **07:12 PM:** Se realiza un reinicio manual de la aplicacion web en la tablet de despacho.
* **07:20 PM:** El sistema reconecta exitosamente con el almacenamiento local, sincroniza las 22 comandas pendientes y restablece el flujo normal en cocina.

---

## 3. Impacto

* **Procesos afectados:** Retraso directo en la preparacion y entrega de 22 pedidos en el horario de mayor demanda.
* **Impacto en el cliente:** Aumento en el tiempo de espera promedio de 8 a 25 minutos por pedido durante el incidente.
* **Impacto operativo:** Estrés temporal en el equipo de cocina al acumularse de golpe 22 comandas atrasadas tras el reinicio del sistema.

---

## 4. Causa Raiz (Analisis de los 5 Porques)

1. **¿Por que se congelo la pantalla de despacho?**
   Porque el script de escucha de la interfaz no recibio los eventos de nuevas comandas emitidos por la caja.
2. **¿Por que no recibio los eventos?**
   Porque el WebSocket de la aplicacion web se desconecto tras la caida momentanea de la red Wi-Fi local.
3. **¿Por que no se reconecto automaticamente al volver la red?**
   Porque el cliente de eventos carecia de una funcion de reintento automatico (auto-reconnect) en segundo plano.
4. **¿Por que no se detecto la falta de reconexion en tiempo real?**
   Porque el sistema no contaba con un indicador visual de estado de conexion (Online/Offline) en la interfaz.
5. **¿Causa Raiz Principal?:** Falta de manejo de excepciones de red y reconexion automatica en el modulo de comunicacion en tiempo real de la capa de presentacion.

---

## 5. Acciones Tomadas para Solucionarlo

* **Accion Inmediata (Durante el incidente):** Se ejecuto un reinicio forzado del navegador en la tablet de despacho para limpiar la memoria cache y forzar el reestablecimiento del socket.
* **Correccion Temporal:** Se habilito un boton manual de "Refrescar Comandas" en la esquina superior de la pantalla para permitir la actualizacion forzada sin reiniciar el sistema.

---

## 6. Acciones a Futuro

* **Implementacion de Auto-Reconnect:** Agregar una libreria de reconexion automatica con reintentos exponenciales ante cualquier interrupcion de red.
* **Indicador Visual de Estado de Red:** Colocar un distintivo de color (Verde = Sincronizado, Rojo = Sin Red) en el encabezado del panel de comandas para alertar al operador si se pierde la conexion.
* **Persistencia PWA Offline:** Configurar un Service Worker para garantizar que la interfaz siga funcionando y reconecte de forma transparente sin intervencion humana.
