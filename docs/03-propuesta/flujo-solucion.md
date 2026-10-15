# Flujo de la Solución Propuesta y Arquitectura de Prototipo

---

## Diagrama de Flujo del Sistema Web / Aplicación Local

El siguiente flujo representa el funcionamiento del sistema propuesto para optimizar la operación.

```mermaid
graph TD
    A[Inicio: Apertura de Turno] --> B[Interfaz Principal de Caja]
    B --> C[Registrar Orden]
    B --> D[Cobro Express]
    C --> E[Seleccionar Menú y Confirmar]
    D --> F[Procesar Pago: Efectivo / Tarjeta / QR]
    E --> G[Sincronización Local / Base de Datos]
    F --> G
    G --> H[Pantalla de Despacho en Cocina]
    H --> I[Estado: En Preparación]
    I --> J{¿Excede tiempo límite?}
    J -- Sí --> K[Alerta Visual en Pantalla]
    J -- No --> L[Estado: Listo para Entregar]
    K --> L
    L --> M[Despacho y Cierre de Comanda]
```

## Arquitectura General de Componentes

```mermaid
graph TD
    subgraph Capa_de_Presentacion
        A1[Panel Táctil Mostrador]
        A2[Terminal de Cobro Móvil]
    end

    subgraph Logica_de_Negocio
        B1[Gestor de Comandas y Tiempos]
        B2[Motor de Alertas Visuales]
        B3[Módulo de Cobro Integrado]
    end

    subgraph Capa_de_Datos_y_Red
        C1[Local Storage - Modo Offline]
        C2[Base de Datos / Cloud API]
    end

    A1 <--> B1
    A2 <--> B3
    B1 <--> C1
    B1 <--> C2
```

## Especificaciones del Prototipo de Interfaz (UI/UX)

### 1. Tablero de Comandas en Mostrador

- **Diseño visual:** Modo oscuro de alto contraste (Dark Mode) para reducir la fatiga visual.
- **Distribución de pantalla:**
  - **Columna Izquierda (Pendientes):** Tarjetas de color azul que muestran el número de orden.
  - **Columna Central (En Preparación):** Tarjetas que cambian a color amarillo si superan los 5 minutos.
  - **Columna Derecha (Listos para Despacho):** Tarjetas verdes con botón grande de confirmación.

### 2. Módulo de Cobro Express

- **Distribución:** Botones de gran tamaño (mínimo 48px × 48px) con iconografía clara para cada producto.
- **Flujo de selección:**
  1. Selección de producto.
  2. Selección de método de pago (Efectivo / QR / Tarjeta).
  3. Confirmación automática.
