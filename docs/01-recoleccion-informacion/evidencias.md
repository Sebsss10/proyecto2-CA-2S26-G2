# Evidencias de Recoleccion de Informacion

A continuacion se presentan las entrevistas realizadas como parte del levantamiento de requerimientos y analisis del contexto operativo de los comercios locales evaluados.

---

## Entrevista 1: Refacciones Las Delicias

* **Entrevistada:** Alicis Rojas
* **Puesto / Rol:** Propietaria y Encargada de Operaciones
* **Giro del negocio:** Venta de comida rapida y refacciones de fin de semana (hamburguesas, papas, frappes, smoothies, pasteles, nachos, cappuccinos, bebidas).
* **Dias de atencion:** Exclusivamente domingos (de 3:00 PM a 10:00 PM).
* **Personal:** 4 colaboradoras fijas + 2 propietarios en caja.
* **Tiempo de trayectoria:** 21 años de servicio.

### Grabacion de Audio
<iframe src="https://drive.google.com/file/d/1_qOM9MJdWU5AYJlhr7WA44DsVuSdzcs3/preview" width="100%" height="80" allow="autoplay" style={{ borderRadius: '8px', border: '1px solid #ccc', marginBottom: '1.5rem' }}></iframe>

---

### Resumen Operativo y Puntos de Dolor Identificados
1. **Picos de saturacion:** La mayor afluencia de clientes ocurre de 6:00 PM a 8:00 PM, momentos en los que el flujo de pedidos se concentra de forma intensiva.
2. **Gestion de comandas:** Utilizan una caja registradora para imprimir comprobantes y los organizan en una barra metalica fisica. Ocasionalmente ocurren retrasos o entregas incorrectas debido al bajado accidental o prematuro de tickets.
3. **Modalidad de pago:** Operan 100% en efectivo. Han considerado incorporar pago con tarjeta de credito/debito, pero existe temor a que el proceso aliente la atencion en el mostrador.
4. **Planificacion de insumos:** Realizan compras semanales y mensuales en la capital para mantener stock. La demanda de productos como frappes y smoothies varia segun las condiciones climaticas del fin de semana.

---

## Entrevista 2: Refacciones Anlu

* **Entrevistada:** Ana Lucia Lopez
* **Puesto / Rol:** Propietaria y Encargada Unica
* **Giro del negocio:** Venta de refacciones y desayunos rapidos en entorno universitario.
* **Horario de atencion:** Lunes a viernes, de 6:00 AM a 10:00 AM.
* **Personal:** 1 persona (atendido unicamente por la propietaria).

### Grabacion de Audio
<iframe src="https://drive.google.com/file/d/1m4ZXPaa-QN2-CIpQhRdbVBB2nM1N-dA-/preview" width="100%" height="80" allow="autoplay" style={{ borderRadius: '8px', border: '1px solid #ccc', marginBottom: '1.5rem' }}></iframe>

---

### Resumen Operativo y Puntos de Dolor Identificados
1. **Horario critico y alta presion:** El momento de mayor demanda ocurre entre las 7:00 AM y 8:30 AM, donde debe atender de forma individual a clientes que van con el tiempo justo hacia sus labores o clases.
2. **Operacion unipersonal:** Al no contar con asistentes, la propietaria debe encargarse simultaneamente de tomar pedidos, preparar alimentos, cobrar y despachar, confiando principalmente en su memoria y organizacion mental.
3. **Manejo de stock y sustituciones:** Realiza compras por mayoreo 3 veces por semana y recibe pan diariamente. A pesar de calcular las proporciones, es comun que se agote algun ingrediente en horas pico, requiriendo improvisar o sustituir insumos de forma agil.
4. **Arqueo diario:** Al finalizar la jornada (10:00 AM), efectua un cuadre manual del inventario residual contra los ingresos de caja en efectivo.
5. **Barrera tecnologica:** Intentó utilizar herramientas digitales en el pasado, pero las descartó porque siente que operar pantallas o aplicaciones en el mostrador le resta segundos valiosos durante la atencion al cliente.


# Análisis de Flujo de Negocio y Contexto Operativo

El presente análisis evalúa la dinámica operativa, estructura de trabajo y restricciones técnicas de Refacciones Las Delicias para el diseño de soluciones tecnológicas adaptadas a su entorno real.

---

## Comercio Evaluado: Refacciones Las Delicias

### Descripción General

Negocio familiar con 21 años de trayectoria, enfocado en la preparación y venta de comida rápida (hamburguesas, papas, frappes, smoothies, pasteles, nachos y bebidas) durante jornadas dominicales.

- **Horario de operación:** Exclusivamente domingos de 3:00 PM a 10:00 PM.
- **Estructura del equipo:** 6 personas en total (2 encargados en caja y administración + 4 colaboradoras en área de preparación y despacho).
- **Flujo de atención:** Picos intensivos de demanda concentrados entre las 6:00 PM y las 8:00 PM.

### Diagrama del Flujo Operativo Actual

```mermaid
graph TD
    A[Cliente realiza pedido en caja] --> B[Caja registradora imprime ticket de papel]
    B --> C[Ticket se clava en la barra metálica del mostrador]
    C --> D[Colaboradoras preparan el pedido según el ticket]
    D --> E[Se retira el ticket de la barra y se entrega la orden]
    E --> F[Cobro 100% en efectivo]
```

### Desafíos y Puntos de Dolor Identificados

1. **Saturación en horas pico:** Durante el intervalo de 6:00 PM a 8:00 PM, la acumulación masiva de pedidos genera confusión en el orden de llegada.
2. **Manejo físico de tickets:** Ocurre traspapeleo o retiro accidental de comandas impresas antes de ser despachadas, derivando en retrasos o platillos entregados por error.
3. **Limitación en medios de pago:** La preferencia por cobro en efectivo responde al temor de alentar la atención en caja con la manipulación de terminales bancarias o claves.
4. **Insumos estacionales:** La demanda de productos helados (frappes y smoothies) varía drásticamente según las condiciones climáticas del fin de semana.
