# Especificacion de Requisitos del Sistema

A partir del diagnostico operativo realizado en Refacciones Las Delicias, se establecen los requisitos funcionales y no funcionales para la arquitectura de software propuesta.

---

## Requisitos Funcionales (RF)

### Modulo 1: Gestion Visual de Comandas en Mostrador
* **RQ-01 (Registro Rapido de Orden):** El sistema debe permitir la creacion de comandas digitales asociadas a un numero consecutivo de orden con un maximo de 3 toques en pantalla.
* **RQ-02 (Panel Visual de Despacho):** El sistema debe desplegar un tablero visual en tiempo real que reemplace la barra metalica de tickets, ordenando los pedidos por hora de llegada.
* **RQ-03 (Cambio de Estado de Pedidos):** El usuario debe poder actualizar el estado de una comanda (En preparacion, Listo para entregar, Entregado) mediante un solo toque.
* **RQ-04 (Alertas Visuales de Tiempos de Espera):** El sistema debe cambiar el color de fondo de la comanda cuando un pedido supere el limite de tiempo configurado sin ser entregado.

### Modulo 2: Cobro Digital Rapido y Menu Estacional
* **RQ-05 (Pasarela de Cobro Simplificada):** El sistema debe integrarse con lectores de cobro inalambricos y generacion de codigos QR para procesar transacciones en menos de 10 segundos.
* **RQ-06 (Gestor de Catalogo Dinamico):** El sistema debe permitir activar o desactivar productos de alta variabilidad estacional (como frappes o smoothies) mediante un conmutador de un solo clic desde la interfaz principal.
* **RQ-07 (Arqueo y Cuadre Rapido de Caja):** El sistema debe generar un resumen automatico al cierre del turno comparando el total de ventas digitales y en efectivo registradas.

---

## Requisitos No Funcionales (RNF)

* **RNF-01 (Usabilidad y Curva de Aprendizaje Nula):** La interfaz debe ser de alto contraste, con botones tactiles de minimo 48px, diseñada para operarse sin capacitacion previa y con una mano.
* **RNF-02 (Rendimiento y Tiempo de Respuesta):** El tiempo de procesamiento entre la toma de comanda y su reflejo en la pantalla de despacho no debe superar los 500 milisegundos.
* **RNF-03 (Disponibilidad y Modo Offline):** El sistema debe mantener su funcionalidad core (toma de comandas y registro local) ante perdida temporal de conexion a internet, sincronizando datos automaticamente al reestablecerse la red.
* **RNF-04 (Compatibilidad de Dispositivos):** La aplicacion web debe adaptarse a tablets, telefonos inteligentes y pantallas de mostrador sin perder proporcion visual.
