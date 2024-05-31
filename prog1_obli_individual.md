# Obligatorio Individual Analista Programador CTC Programación 1

## Juana Albin

Durante clase se discutió con el alumno su interés en realizar un proyecto alrededor del concepto de mejorar la eficiencia de la gestión de la ropa en su ropero. Este proyecto, si bien en esta instancia será acotado, tiene grandes posibilidades de crecimiento si se buscara llevarlo a una aplicación web multi-usuarios.

### Requerimientos

Historias de Usuario:

**Como usuario quiero poder agregar una prenda a mi ropero**
  - Criterio de Aceptacion:
    - En la pantalla principal debo poder ver todo el tiempo, en la barra lateral, un formulario donde pueda pueda ingresar todos los datos de una prenda y agregarla a mi ropero clickeando en el boton "Guardar"
      - La prenda debe tener un nombre
      - La prenda debe tener un tipo (calzado, pantalon, remera, etc)
      - La prenda debe tener una temporada
      - La prenda debe tener una marca

**Como usuario quiero poder ver todas las prendas de mi ropero**
  - Criterio de Aceptacion:
    - Cuando veo el listado, debo poder ver el nombre de la prenda
    - Cuando veo el listado, debo poder ver el tipo de la prenda
    - Cuando veo el listado, debo poder ver la temporada de la prenda
    - Cuando veo el listado, debo poder ver la marca de la prenda
    - Cuando agrego una prenda, el listado se debe actualizar y mostrar la nueva prenda como parte de la lista de todas las prendas

**Como usuario quiero poder eliminar una prenda de mi ropero**
  - Criterio de Aceptacion:
    - Cuando veo el listado, debo ver links o botones para eliminar una prenda
    - Cuando clickeo uno de esos links o botones, un mensaje de confirmacion debe aparecer, y si lo acepto, la prenda debe ser eliminada del ropero.

**Como usuario quiero poder editar una prenda de mi ropero**
  - Criterio de Aceptacion:
    - Cuando veo el listado, debo ver links o botones para editar una prenda
    - Cuando clickeo uno de esos links o botones, el formulario lateral debe ser completado con los datos de la prenda que quiero editar, y un boton de guardar debe aparecer
    - Cuando hago click en guardar, la prenda debe ser actualizada con sus nuevos datos en el listado

**Como usuario, cuando estoy en el listado de prendas, quiero poder filtrar las prendas por tipo**
  - Criterio de Aceptacion:
    - Cuando veo el listado, debo poder ver un control que liste los tipos de prenda y me permita seleccionar uno, al seleccionar el tipo de prenda, solo deben quedar visibles en el listado aquellas prendas del tipo que seleccioné

**Como usuario quiero poder ver un resumen de las prendas que tengo en mi ropero**
  - Criterio de Aceptacion:
    - Debo poder ver cuantas prendas tengo en total
    - Debo poder ver cuantas prendas tengo en total por tipo
    - Debo poder ver cuantas prendas tengo en total por temporada
    - Debo poder ver cuantas prendas tengo en total por marca

## Matias Bejar

Durante clase se discutió con el alumno su interés en realizar un proyecto alrededor del concepto de llevar una historia clinica de mascotas. Este proyecto, si bien en esta instancia será acotado al uso de un solo usuario localmente, tiene grandes posibilidades de crecimiento como su posible uso en veterinarias, hogares, o cualquier establecimiento de cria de animales.

Esta versión del proyecto se limitará a ingresar instancias de observación de una o mas mascotas del hogar, y poder ver el historial y resumen de las mismas. 

La Interfaz de Usuario se realizará teniendo en cuenta que en un hogar el número de mascotas es normalmente menor a 5. Por lo que no habrá necesidad de implementar búsquedas complejas, ni paginación de resultados.

### Requerimientos

Historias de Usuario:

**Como usuario quiero poder agregar una mascota a mi hogar****
  - Criterio de Aceptacion:
    - En la pantalla principal debo poder ver todo el tiempo, en la barra lateral, un formulario donde pueda pueda ingresar todos los datos de una mascota y agregarla a mi hogar clickeando en el boton "Guardar"
      - La mascota debe tener un nombre
      - La mascota debe tener una especie (perro, gato, etc)
      - La mascota debe tener una raza
      - La mascota debe tener una fecha de nacimiento

**Como usuario quiero poder agregar una observación a una mascota**
  - Criterio de Aceptacion:
    - En la pantalla principal debo poder ver todo el tiempo en el panel lateral, un formulario donde pueda ingresar una observación sobre una mascota
      - La observación debe tener una fecha. Por default la fecha de hoy.
      - La observación debe tener un titulo
      - La observación debe tener un detalle
      - La observación debe tener el peso de la mascota en ese momento

**Como usuario quiero poder filtrar las observaciones por mascota**
  - Criterio de Aceptacion:
    - Cuando veo el listado de observaciones, debo poder ver un control que liste las mascotas y me permita seleccionar una, al seleccionar una mascota, solo deben quedar visibles en el listado aquellas observaciones de la mascota que seleccioné

**Como usuario quiero poder ver un resumen de las observaciones de todas las msacotas**
  - Criterio de Aceptacion:
    - Debo poder ver cuantas observaciones tengo en total
    - Debo poder ver cuantas observaciones tengo en total por mascota
    - Debo poder ver la última medición de peso de cada mascota

## Simón Chileff

Durante clase se discutió con el alumno su interés en realizar un proyecto sobre futbol. Este proyecto se enfocará en la gestión de los jugadores del equipo, permitiendole a un organizador de torneos tener registrados los jugadores de cada equipo y la posición en la que juegan. Si bien en esta instancia será acotado al uso de un solo usuario localmente, tiene grandes posibilidades de crecimiento como su posible uso en torneos de futbol amateur, campeonatos de futbol 5, etc.

Los equipos del torneo serán registrados en el sistema de antemano mediante un Array de Strings(cadenas de texto), con el nombre de cada equipo. Ejemplo de código:
```javascript

const EQUIPOS = ["Los 5 fantásticos", "Peñarol Jrs", "Rocabili", "Primeras nupcias"];

```

### Requerimientos

Historias de Usuario:


**Como usuario quiero poder agregar un jugador a un equipo**
  - Criterio de Aceptacion:
    - En la pantalla principal debo poder ver todo el tiempo, en el panel lateral, un formulario donde pueda pueda ingresar todos los datos de un jugador y agregarlo a un equipo clickeando en el boton "Guardar"
      - El jugador debe tener un nombre
      - El jugador debe tener una posición en la que juega (arquero, defensor, mediocampista, delantero)
      - El jugador debe tener una edad
      - El jugador debe tener un equipo al que pertenece (seleccionado del listado de equipos)

**Como usuario quiero eliminar un jugador**
  - Criterio de Aceptacion:
    - Cuando veo el listado de jugadores, debo ver links o botones para eliminar un jugador
    - Cuando clickeo uno de esos links o botones, un mensaje de confirmacion debe aparecer, y si lo acepto, el jugador debe ser eliminado del listado.

**Como usuario quiero poder ver todos los jugadores de un equipo**
  - Criterio de Aceptacion:
    - Cuando veo el listado, debo poder ver el nombre del jugador
    - Cuando veo el listado, debo poder ver la posición del jugador
    - Cuando veo el listado, debo poder ver la edad del jugador
    - Cuando veo el listado, debo poder ver el equipo al que pertenece el jugador
    - Cuando agrego un jugador, el listado se debe actualizar y mostrar el nuevo jugador como parte de la lista de todos los jugadores

**Como usuario quiero poder filtrar los jugadores por posición**
  - Criterio de Aceptacion:
    - Cuando veo el listado, debo poder ver un control que liste las posiciones de los jugadores y me permita seleccionar una, al seleccionar la posición, solo deben quedar visibles en el listado aquellos jugadores de la posición que seleccioné

**Como usuario quiero poder ver un resumen la cantidad de jugadores por posicion de cada equipo**
  - Criterio de Aceptacion:
    - En una tabla de resumen, debo poder ver una fila por equipo, y en cada fila, los siguientes datos:
      - Nombre del equipo
      - Cantidad de arqueros
      - Cantidad de defensores
      - Cantidad de mediocampistas
      - Cantidad de delanteros
      - Cantidad de jugadores en total

## Damasco Ana Laura

Durante clase se discutió con el alumno su interés en realizar un proyecto alrededor del concepto de sugerir ejercicios dependiendo de la comida que se ingiere en cada dia de la semana. Este proyecto, si bien en esta instancia será acotado al uso de un solo usuario localmente, tiene grandes posibilidades de crecimiento como su posible uso en gimnasios, hogares, o cualquier establecimiento de entrenamiento personalizado.

Los tipos de comida serán registrados en el sistema de antemano mediante un Array de Strings(cadenas de texto), con el nombre de cada tipo de comida. Ejemplo de código:
```javascript

const TIPOS_COMIDA = ["Desayuno", "Almuerzo", "Merienda", "Cena"];

```

### Requerimientos

Historias de Usuario:

**Como usuario quiero poder agregar un combo de comida y ejercicio a mi lista**
  - Criterio de Aceptacion:
    - En la pantalla principal debo poder ver todo el tiempo, en la barra lateral, un formulario donde pueda pueda ingresar todos los datos de los combos y agregarlo a mi lista clickeando en el boton "Guardar"
      - El combo debe tener un nombre
      - El combo debe tener un tipo de comida
      - El combo debe tener una descripción de comida
      - El combo debe tener cuantas calorías tiene la comida
      - El combo debe tener cuantas calorías debería quemar el ejercicio
      - El combo debe tener un nombre de ejercicio
      - El combo debe tener una descripción de ejercicio

**Como usuario quiero poder ver todos los combos de comida y ejercicio de mi lista**
  - Criterio de Aceptacion:
    - Cuando veo el listado, debo poder ver el nombre del combo
    - Cuando veo el listado, debo poder ver el tipo de comida del combo
    - Cuando veo el listado, debo poder ver cuantas calorías tiene la comida del combo
    - Cuando veo el listado, debo poder ver el nombre de ejercicio del combo
    - Cuando veo el listado, debo poder ver la descripción de ejercicio del combo
    - Cuando agrego un combo, el listado se debe actualizar y mostrar el nuevo combo como parte de la lista de todos los combos

**Como usuario quiero poder eliminar un combo de mi lista**
  - Criterio de Aceptacion:
    - Cuando veo el listado, debo ver links o botones para eliminar un combo
    - Cuando clickeo uno de esos links o botones, un mensaje de confirmacion debe aparecer, y si lo acepto, el combo debe ser eliminado de la lista.

**Como usuario quiero poder editar un combo de mi lista**
  - Criterio de Aceptacion:
    - Cuando veo el listado, debo ver links o botones para editar un combo
    - Cuando clickeo uno de esos links o botones, el formulario lateral debe ser completado con los datos del combo que quiero editar, y un boton de guardar debe aparecer
    - Cuando hago click en guardar, el combo debe ser actualizado con sus nuevos datos en el listado

**Como usuario, cuando estoy en el listado de combos, quiero poder filtrar los combos por tipo de comida**
  - Criterio de Aceptacion:
    - Cuando veo el listado, debo poder ver un control que liste los tipos de comida y me permita seleccionar uno, al seleccionar el tipo de comida, solo deben quedar visibles en el listado aquellos combos del tipo que seleccioné

**Como usuario quiero poder ver un resumen de los combos que tengo en mi lista**
  - Criterio de Aceptacion:
    - Debo poder ver cuantos combos tengo en total
    - Debo poder ver cuantos combos tengo en total por tipo de comida

## Santino Capuano

Durante clase se discutió con el alumno su interés en realizar un proyecto alrededor del concepto de un apuntador de estadísticas en vivo para combates de la UFC. Este proyecto, si bien en esta instancia será acotado al uso de un solo usuario localmente, tiene grandes posibilidades de crecimiento como su posible uso en gimnasios, hogares, o cualquier establecimiento de entrenamiento personalizado.

El apuntador de estadísticas tiene como principal objetivo permitir el ingreso de datos de forma rápida y sencilla, ya que quien lo utilice estará viendo el combate en vivo y no podrá distraerse con la interfaz. Debido a esto se espera que si bien se puedanutilizar botones, la mayor parte de la interfaz sea manejable con el teclado.

Las estadísticas a recabar por el programa son:

**Golpes significantes conectados por el combatiente A**

**Golpes significantes conectados por el combatiente B**

Un total de 2 estadísticas, a las que se le sumarán teclas para empezar y terminar cada round, y una tecla para terminar el combate.

### Requerimientos

Historias de Usuario:

**Como usuario quiero poder ingresar los nombres de los combatientes**
  - Criterio de Aceptacion:
    - En la pagina principal, debo poder ver dos cajas para ingresar texto, donde pueda escribir el nombre del combatiente A y el combatiente B

**Como usuario quiero poder ver un historial de todos los eventos del combate**
  - Criterio de Aceptacion:
    - En la pagina principal, debo poder ver un listado de eventos, donde se muestre el tiempo en el que ocurrió el evento, y cual fue el evento

**Como usuario, quiero ver un boton para marcar el inicio de un round**
  - Criterio de Aceptacion:
    - En la pagina principal, debo poder ver un boton que diga "Empezar Round", al clickear en el boton se debe registrar en un historial de eventos el inicio del round

**Como usuario, quiero poder ingresar los golpes conectados por el combatiente A**
  - Criterio de Aceptacion:
    - En la pagina principal, debo poder ver un boton que diga "Golpe combatiente A", al clickear el boton se debe registrar en el historial de eventos
    - El historial de eventos debe guardar el nombre del combatiente que lo conecta, y el tiempo en el que se conecta

**Como usuario, quiero poder ingresar los golpes conectados por el combatiente B**
  - Criterio de Aceptacion:
    - En la pagina principal, debo poder ver un boton que diga "Golpe combatiente B", al clickear el boton se debe registrar en el historial de eventos
    - El historial de eventos debe guardar el nombre del combatiente que lo conecta, y el tiempo en el que se conecta

**Como usuario quiero ver todo el tiempo la suma de todos los golpes conectados por cada combatiente**
  - Criterio de Aceptacion:
    - En la pagina principal, debo poder ver un contador que muestre la cantidad de golpes conectados por el combatiente A
    - En la pagina principal, debo poder ver un contador que muestre la cantidad de golpes conectados por el combatiente B

**Como usuario quiero ver todo el tiempo un contador con el round actual**
  - Criterio de Aceptacion:
    - En la pagina principal, debo poder ver un contador que muestre el round actual

**Como usuario quiero poder ingresar un golpe conectado por el combatiente A presionando una tecla**
  - Criterio de Aceptacion:
    - En la pagina principal, debo poder presionar una tecla para registrar un golpe conectado por el combatiente A

**Como usuario quiero poder ingresar un golpe conectado por el combatiente B presionando una tecla**
  - Criterio de Aceptacion:
    - En la pagina principal, debo poder presionar una tecla para registrar un golpe conectado por el combatiente B

## Santino Ercoli

Durante clase se discutió con el alumno su interés en realizar un proyecto alrededor del concepto de un apuntador de estadísticas en vivo para partidos de futbol. Este proyecto, si bien en esta instancia será acotado al uso de un solo usuario localmente, tiene grandes posibilidades de crecimiento como su posible uso en campeonatos amateurs, campeonatos de futbol 5, etc.

El apuntador de estadísticas tiene como principal objetivo permitir el ingreso de datos de forma rápida y sencilla, ya que quien lo utilice estará viendo el partido en vivo y no podrá distraerse con la interfaz. Debido a esto se espera que si bien se puedanutilizar botones, la mayor parte de la interfaz sea manejable con el teclado.

Las estadísticas a recabar por el programa son:

**Tiros a puerta del equipo A**

**Tiros a puerta del equipo B**

**Pases exitosos del equipo A**

**Pases exitosos del equipo B**

Un total de 4 estadísticas.

### Requerimientos

Historias de Usuario:

**Como usuario quiero poder ingresar los nombres de los equipos del partido**
  - Criterio de Aceptacion:
    - En la pagina principal, debo poder ver dos cajas para ingresar texto, donde pueda escribir el nombre de los equipos A y B

**Como usuario quiero poder ver un historial de todos los eventos del partido**
  - Criterio de Aceptacion:
    - En la pagina principal, debo poder ver un listado de eventos, donde se muestre el tiempo en el que ocurrió el evento, y cual fue el evento

**Como usuario, quiero poder ingresar los tiros a puerta del equipo A**
  - Criterio de Aceptacion:
    - En la pagina principal, debo poder ver un boton que diga "Tiro a puerta equipo A", al clickear el boton se debe registrar en el historial de eventos
    - El historial de eventos debe guardar el combatiente que lo conecta, y el tiempo en el que se conecta

**Como usuario, quiero poder ingresar los tiros a puerta del equipo B**
  - Criterio de Aceptacion:
    - En la pagina principal, debo poder ver un boton que diga "Tiro a puerta equipo B", al clickear el boton se debe registrar en el historial de eventos
    - El historial de eventos debe guardar el combatiente que lo conecta, y el tiempo en el que se conecta

**Como usuario, quiero ingresar los pases exitosos del equipo A**
  - Criterio de Aceptacion:
    - En la pagina principal, debo poder ver un boton que diga "Pase exitoso equipo A", al clickear el boton se debe registrar en el historial de eventos
    - El historial de eventos debe guardar el combatiente que lo conecta, y el tiempo en el que se conecta

**Como usuario, quiero ingresar los pases exitosos del equipo B**
  - Criterio de Aceptacion:
    - En la pagina principal, debo poder ver un boton que diga "Pase exitoso equipo B", al clickear el boton se debe registrar en el historial de eventos
    - El historial de eventos debe guardar el combatiente que lo conecta, y el tiempo en el que se conecta

**Como usuario quiero ver todo el tiempo la suma de todos los tiros a puerta de cada equipo**
  - Criterio de Aceptacion:
    - En la pagina principal, debo poder ver un contador que muestre la cantidad de tiros a puerta del equipo A
    - En la pagina principal, debo poder ver un contador que muestre la cantidad de tiros a puerta del equipo B

**Como usuario quiero ver todo el tiempo la suma de todos los pases exitosos de cada equipo**
  - Criterio de Aceptacion:
    - En la pagina principal, debo poder ver un contador que muestre la cantidad de pases exitosos del equipo A
    - En la pagina principal, debo poder ver un contador que muestre la cantidad de pases exitosos del equipo B

**Como usuario quiero poder ingresar un tiro a puerta del equipo A presionando una tecla**
  - Criterio de Aceptacion:
    - En la pagina principal, debo poder presionar una tecla para registrar un tiro a puerta del equipo A

**Como usuario quiero poder ingresar un tiro a puerta del equipo B presionando una tecla**
  - Criterio de Aceptacion:
    - En la pagina principal, debo poder presionar una tecla para registrar un tiro a puerta del equipo B

**Como usuario quiero poder ingresar un pase exitoso del equipo A presionando una tecla**
  - Criterio de Aceptacion:
    - En la pagina principal, debo poder presionar una tecla para registrar un pase exitoso del equipo A

**Como usuario quiero poder ingresar un pase exitoso del equipo B presionando una tecla**
  - Criterio de Aceptacion:
    - En la pagina principal, debo poder presionar una tecla para registrar un pase exitoso del equipo B

## Emanuel Giussiano

Durante clase se discutió con el alumno su interés en realizar un proyecto alrededor de la organización de torneos. Para mantener la complejidad al nivel de este obligatorio, el proyecto se limitará al ingreso de equipos, y la organización de los primeros partidos del torneo entre ellos. El programa permitirá elegir si el torneo va a jugarse por grupos, o llaves(eliminación directa), y como resultado ofrecerá una lista de grupos o una lista de partidos para iniciar la eliminación directa.

### Requerimientos

Historias de Usuario:

**Como usuario quiero poder agregar un equipo al torneo**
  - Criterio de Aceptacion:
    - En la pantalla principal debo poder ver todo el tiempo, en la barra lateral, un formulario donde pueda pueda ingresar todos los datos de un equipo y agregarlo al torneo clickeando en el boton "Guardar"
      - El equipo debe tener un nombre
      - El equipo debe tener una ciudad
      - El equipo debe tener una fecha de fundación

**Como usuario quiero poder ver todos los equipos del torneo**
  - Criterio de Aceptacion:
    - Cuando veo el listado, debo poder ver el nombre del equipo
    - Cuando veo el listado, debo poder ver la ciudad del equipo
    - Cuando veo el listado, debo poder ver la fecha de fundación del equipo
    - Cuando agrego un equipo, el listado se debe actualizar y mostrar el nuevo equipo como parte de la lista de todos los equipos

**Como usuario quiero poder eliminar un equipo del torneo**
  - Criterio de Aceptacion:
    - Cuando veo el listado, debo ver links o botones para eliminar un equipo
    - Cuando clickeo uno de esos links o botones, un mensaje de confirmacion debe aparecer, y si lo acepto, el equipo debe ser eliminado del torneo.

**Como usuario, cuando quiero organizar un torneo que comienza con una clasificacion por grupos, quiero que el programa me genere aleatoriamente la cantidad de grupos que yo indique**
  - Criterio de Aceptacion:
    - En la pantalla principal, debo poder ver un formulario donde pueda ingresar la cantidad de grupos que quiero que se generen
    - Cuando hago click en "Generar Grupos", el programa debe generar la cantidad de grupos que indiqué, y asignar aleatoriamente los equipos a cada grupo
    - Cada grupo debe estar identificado con una letra, y cada equipo debe estar asignado a un grupo

**Como usuario, cuando quiero organizar un torneo que comienza directamente con eliminación directa, quiero que el programa me genere los partidos de la primera ronda**
  - Criterio de Aceptacion:
    - En la pantalla principal, debo poder ver un boton que diga "Generar Partidos por elminiación directa"
    - Cuando hago click en "Generar Partidos", el programa debe generar los partidos de la primera ronda, asignando aleatoriamente los equipos a cada partido
    - Cada partido debe tener un equipo A y un equipo B, y no debe haber equipos repetidos en los partidos


## Lucas Gutierrez

En la clase se discutió con el alumno su interés en realizar un proyecto alrededor del concepto de recomendación de ejercicios, trackeo del progreso, y sugerencias. Este proyecto, si bien en esta instancia será acotado al uso de un solo usuario localmente, tiene grandes posibilidades de crecimiento como su posible uso en gimnasios, personal trainers, personas interesadas en hacer ejercicio, o cualquier establecimiento de entrenamiento personalizado.

### Requerimientos

Historias de Usuario:

**Como usuario quiero poder agregar un ejercicio a mi lista**
  - Criterio de Aceptacion:
    - En la pantalla principal debo poder ver todo el tiempo, en la barra lateral, un formulario donde pueda pueda ingresar todos los datos de un ejercicio y agregarlo a mi lista clickeando en el boton "Guardar"
      - El ejercicio debe tener un nombre
      - El ejercicio debe tener una descripción
      - El ejercicio debe tener una cantidad de repeticiones
      - El ejercicio debe tener una cantidad de series
      - El ejercicio debe tener una cantidad de peso

**Como usuario quiero poder ver todos los ejercicios de mi lista**
  - Criterio de Aceptacion:
    - Cuando veo el listado, debo poder ver el nombre del ejercicio
    - Cuando veo el listado, debo poder ver la descripción del ejercicio
    - Cuando veo el listado, debo poder ver la cantidad de repeticiones del ejercicio
    - Cuando veo el listado, debo poder ver la cantidad de series del ejercicio
    - Cuando veo el listado, debo poder ver la cantidad de peso del ejercicio
    - Cuando agrego un ejercicio, el listado se debe actualizar y mostrar el nuevo ejercicio como parte de la lista de todos los ejercicios

**Como usuario quiero poder eliminar un ejercicio de mi lista**
  - Criterio de Aceptacion:
    - Cuando veo el listado, debo ver links o botones para eliminar un ejercicio
    - Cuando clickeo uno de esos links o botones, un mensaje de confirmacion debe aparecer, y si lo acepto, el ejercicio debe ser eliminado de la lista.

**Como usuario, quiero ver un historial de ejercicios realizados**
  - Criterio de Aceptacion:
    - En la pantalla principal, debo poder ver un listado de ejercicios, donde se muestre el dia en el que ocurrió el ejercicio, y cual fue el ejercicio

**Como usuario, quiero poder agregar un ejercicio realizado al historial**
  - Criterio de Aceptacion:
    - En la pantalla principal, debo poder ver un boton que diga "Agregar ejercicio realizado", al clickear en el boton se debe registrar en un historial de ejercicios el ejercicio realizado
    - La entrada en el historial de ejercicios debe guardar el nombre del ejercicio, y el dia en el que se realizó

## Gabriel Larrosa

Durante clase se discutió con el alumno su interés en realizar un proyecto alrededor de la gestión de pedidos telefónicos para un supermercado. Este proyecto, si bien en esta instancia será acotado al uso de un solo usuario localmente, como sustituto de utilizar lapiz y papel para los mismos, tiene grandes posibilidades de crecimiento como su posible uso en supermercados, almacenes, o cualquier establecimiento de venta de productos.

### Requerimientos

Historias de Usuario:

**Como usuario, quiero poder ver un listado de pedidos**
  - Criterio de Aceptacion:
    - En la pantalla principal, debo poder ver un listado de pedidos con las siguientes columnas:
      - Nombre del cliente
      - Direccion de entrega
      - Telefono de contacto
      - Productos pedidos
      - Total del pedido
      - Entregado (si/no)
      - Fecha y hora del pedido

**Como usuario, quiero poder agregar un pedido**
  - Criterio de Aceptacion:
    - En la pantalla principal, debo poder ver un formulario donde pueda ingresar todos los datos de un pedido y agregarlo a la lista de pedidos
      - El pedido debe tener un nombre de cliente
      - El pedido debe tener una direccion de entrega
      - El pedido debe tener un telefono de contacto
      - El pedido debe tener una lista de productos pedidos
      - El pedido debe tener un total
      - El pedidio debe guardar la fecha y hora actual al momento de ingresarlo, pero no pedirselo al usuario

**Como usuario, quiero poder marcar un pedido como entregado**
  - Criterio de Aceptacion:
    - En la pantalla principal, debo poder ver un boton que diga "Marcar como entregado", al clickear en el boton se debe cambiar el estado del pedido a entregado

**Como usuario, quiero que los pedidos ingresados esten ordenados por fecha de ingreso, el mas reciente primero**
  - Criterio de Aceptacion:
    - En la pantalla principal, debo poder ver los pedidos ordenados por fecha de ingreso, el mas reciente primero

**Como usuario, quiero poder filtrar los pedidos por si fueron entregados o no**
  - Criterio de Aceptacion:
    - En la pantalla principal, debo poder ver un control que me permita seleccionar si quiero ver todos los pedidos, solo los entregados, o solo los no entregados
    - Al seleccionar una de las opciones, solo deben quedar visibles en el listado aquellos pedidos que cumplan con la condicion seleccionada

## Juan Lluvieras

Durante clase se discutió con el alumno su interés en realizar un proyecto alrededor de una cancha de futbol 5. Este proyecto, si bien en esta instancia será acotado al uso de un solo usuario localmente, tiene grandes posibilidades de crecimiento como su posible uso para otros deportes como padel, tenis, y cualquier otra actividad que requiera la reserva de un espacio.

### Requerimientos

Historias de Usuario:

**Como usuario quiero poder definir los horarios en que la cancha esta abierta para reservas**
  - Criterio de Aceptacion:
    - En la pantalla principal, debo poder ver un formulario donde pueda ingresar los horarios de apertura y cierre de la cancha
    - El horario de apertura y cierre sera el mismo para todos los dias de la semana

**Como usuario quiero poder definir cuanto tiempo en minutos dura una reserva**
  - Criterio de Aceptacion:
    - En la pantalla principal, debo poder ver un formulario donde pueda ingresar la duracion de una reserva en minutos

**Como usuario quiero poder ver una tabla con los horarios disponibles para reservar en los siguientes 15 dias**
  - Criterio de Aceptacion:
    - Luego de que la configuracion de horarios y tiempos de reservas esta hecho, quiero ver un boton que me permita bloquear las configuraciones
    - Tras presionar el boton para bloquear las configuraciones, en la pantalla principal, debo poder ver una tabla con los horarios disponibles para reservar en los siguientes 15 dias
    - Cada fila de la tabla debe representar un horario, y cada columna un dia
    - Cada celda de la tabla debe mostrar si el horario esta disponible o no
    - En la cabecera de las columnas se debe mostrar el dia de la semana y la fecha
    - Los sabados y domingos se deben resaltar de alguna forma para indicar que son fin de semana

**Como usuario quiero poder reservar un horario**
  - Criterio de Aceptacion:
    - En la pantalla principal, en la tabla de horarios disponibles, cada celda debe tener un boton que sea "reservar"
    - Cuando apreto uno de esos botones, el programa me debe pedir el nombre de la reserva, y si lo ingreso, la celda debe cambiar de color para indicar que esta reservada
    - Luego de reservada, la celda debe mostrar el nombre de la reserva

**Como usuario quiero poder cancelar una reserva**
  - Criterio de Aceptacion:
    - En la pantalla principal, en la tabla de horarios reservados, cada celda reservada debe tener un boton que sea "cancelar"
    - Cuando apreto uno de esos botones, la celda debe cambiar de color para indicar que esta disponible nuevamente
    - Luego de cancelada, la celda debe volver a mostrar el boton de "reservar"

## Alejo Monteagudo

Durante la clase, se conversó con el alumno sobre su interés en realizar un proyecto enfocado en torneos de videojuegos. El objetivo del proyecto es asistir a un coach o líder de equipo en la anotación de observaciones durante cada partida. Así, al finalizar la partida, se dispondrá de una lista detallada de aspectos a discutir con el equipo para mejorar su rendimiento.

### Requerimientos

Historias de Usuario:

**Como coach quiero poder agregar una nota a mi lista**
  - Criterio de Aceptacion:
    - En la pantalla principal debo poder ver todo el tiempo, en la barra lateral, un formulario donde pueda ingresar todos los datos de una nota y agregarla a mi lista clickeando en el boton "Guardar"
      - La nota debe tener un detalle
      - La nota debe tener un tipo (positiva, negativa, neutral)
      - La nota debe tener un jugador

**Como coach quiero poder ver todas las notas de mi lista**
  - Criterio de Aceptacion:
    - Cuando veo el listado, debo poder ver el detalle de la nota
    - Cuando veo el listado, debo poder ver el tipo de la nota
    - Cuando veo el listado, debo poder ver el jugador al que se le asignó la nota
    - Cuando veo el listado, debo poder ver si ya marque la nota como comentada o no
    - Cuando agrego una nota, el listado se debe actualizar y mostrar la nueva nota como parte de la lista de todas las notas

**Como coach quiero poder eliminar una nota de mi lista**
  - Criterio de Aceptacion:
    - Cuando veo el listado, debo ver links o botones para eliminar una nota
    - Cuando clickeo uno de esos links o botones, un mensaje de confirmacion debe aparecer, y si lo acepto, la nota debe ser eliminada de la lista.

**Como coach quiero poder marcar una nota como comentada**
  - Criterio de Aceptacion:
    - Cuando veo el listado, debo ver links o botones para marcar una nota como comentada
    - Cuando clickeo uno de esos links o botones, la nota debe cambiar de color para indicar que ya fue comentada
    - Opcional: Que el coach pueda marcar la nota como comentada haciendo swipe right sobre la nota

**Como coach quiero poder filtrar las notas por jugador**
  - Criterio de Aceptacion:
    - Cuando veo el listado, debo poder ver un control que liste los jugadores y me permita seleccionar uno, al seleccionar el jugador, solo deben quedar visibles en el listado aquellas notas del jugador que seleccioné 
    - Debo poder aplicar mas de un filtro a la vez

**Como coach quiero poder filtrar las notas por tipo**
  - Criterio de Aceptacion:
    - Cuando veo el listado, debo poder ver un control que liste los tipos de notas y me permita seleccionar uno, al seleccionar el tipo de nota, solo deben quedar visibles en el listado aquellas notas del tipo que seleccioné
    - Debo poder aplicar mas de un filtro a la vez

**Como coach quiero poder filtrar las notas por comentadas o no comentadas**
  - Criterio de Aceptacion:
    - Cuando veo el listado, debo poder ver un control que me permita seleccionar si quiero ver todas las notas, solo las comentadas, o solo las no comentadas
    - Al seleccionar una de las opciones, solo deben quedar visibles en el listado aquellas notas que cumplan con la condicion seleccionada
    - Debo poder aplicar mas de un filtro a la vez

## Nicolas Olano

Durante la clase, se conversó con el alumno sobre su interés en realizar un proyecto enfocado la panificacion de entrenamientos de fútbol. El objetivo del proyecto es gestionar tener un conjunto de ejercicios y poder armar una planificación semanal de entrenamientos. Se definirá de antemano una lista de 5 categorías de ejercicios, y cada ejercicio pertenecerá a una de estas categorías. Para cada dia de entrenamiento, se seleccionara aleatoriamente un ejercicio de cada categoría. Este proyecto, si bien en esta instancia será acotado al uso de un solo usuario localmente, tiene grandes posibilidades de crecimiento como su posible uso por partes de equipos de futbol amateur o profesionales.

Las categorías serán registradas en el sistema de antemano mediante un Array de Strings(cadenas de texto), con el nombre de cada categoría. Ejemplo de código:
```javascript

const CATEGORIAS_EJERCICIOS = ["Físico", "Técnico", "Táctico", "Estratégico", "Mental"];

```

### Requerimientos

Historias de Usuario:

**Como usuario quiero poder agregar un ejercicio a mi lista**
  - Criterio de Aceptacion:
    - En la pantalla principal debo poder ver todo el tiempo, en la barra lateral, un formulario donde pueda pueda ingresar todos los datos de un ejercicio y agregarlo a mi lista clickeando en el boton "Guardar"
      - El ejercicio debe tener un nombre
      - El ejercicio debe tener una descripción
      - El ejercicio debe tener una categoría

**Como usuario quiero poder ver todos los ejercicios de mi lista**
  - Criterio de Aceptacion:
    - Cuando veo el listado, debo poder ver el nombre del ejercicio
    - Cuando veo el listado, debo poder ver la descripción del ejercicio
    - Cuando veo el listado, debo poder ver la categoría del ejercicio
    - Cuando agrego un ejercicio, el listado se debe actualizar y mostrar el nuevo ejercicio como parte de la lista de todos los ejercicios

**Como usuario quiero poder eliminar un ejercicio de mi lista**
  - Criterio de Aceptacion:
    - Cuando veo el listado, debo ver links o botones para eliminar un ejercicio
    - Cuando clickeo uno de esos links o botones, un mensaje de confirmacion debe aparecer, y si lo acepto, el ejercicio debe ser eliminado de la lista.

**Como usuario quiero poder generar una combinacion de ejercicios para cada dia de la semana**
  - Criterio de Aceptacion:
    - En la pantalla principal, debo poder ver un boton que diga "Generar Planificación Semanal"
    - Cuando hago click en "Generar Planificación Semanal", el programa debe generar una combinacion de ejercicios para cada dia de la semana
    - Cada dia de la semana debe tener un ejercicio de cada categoría
    - Cada ejercicio debe ser seleccionado aleatoriamente de la lista de ejercicios de esa categoría
    - Cada día debe estar identificado con el nombre del dia de la semana, y mostrar el nombre de cada ejercicio seleccionado

## Mateo Quiroga

Durante la clase, se conversó con el alumno sobre su interés en realizar un proyecto enfocado en la cyberseguridad y criptografía. El objetivo del proyecto es asistir a un usuario en el almacenamiento de contraseñas. Se espera que el programa permita almacenarlas contraseñas, y recuperarlas. El énfasis esta en guardar las contraseñas de forma segura mediante técnicas sencillas de encriptación. Este proyecto, si bien en esta instancia será acotado al uso de un solo usuario localmente, tiene grandes posibilidades de crecimiento como su posible uso por partes de empresas, o usuarios que deseen tener un almacenamiento seguro de sus contraseñas.

### Requerimientos

Historias de Usuario:

**Como usuario quiero que el programa me pida que ingrese una llave de encriptación al iniciar**
  - Criterio de Aceptacion:
    - Al iniciar el programa, se debe pedir al usuario que ingrese una llave de encriptación
    - La llave de encriptación debe ser guardada en memoria y utilizada para encriptar y desencriptar las contraseñas
    - Nota el usuario deberá anotar esta llave en un lugar seguro, ya que si la pierde no podrá recuperar las contraseñas

**Como usuario quiero poder agregar una contraseña a mi lista**
  - Criterio de Aceptacion:
    - En la pantalla principal debo poder ver todo el tiempo, en la barra lateral, un formulario donde pueda pueda ingresar todos los datos de una contraseña y agregarla a mi lista clickeando en el boton "Guardar"
      - La contraseña debe tener un nombre de servicio
      - La contraseña debe tener un nivel de seguridad: Alto, Medio, Bajo
      - La contraseña debe tener un usuario
      - La contraseña debe tener una contraseña
    - El usuario y la contraseña deben encriptarse utilizando un cifrado XOR, donde la clave es aquella ingresada por el usuario al iniciar el programa

**Como usuario quiero poder ver todas las contraseñas de mi lista**
  - Criterio de Aceptacion:
    - Cuando veo el listado, debo poder ver el nombre del servicio
    - Cuando veo el listado, debo ver un botón que diga "Mostrar contraseña", al clickear en el boton se debe mostrar el nombre de usuario y la contraseña en un alert

**Como usuario quiero poder filtrar la lista de contraseñas por nivel de seguridad**
  - Criterio de Aceptacion:
    - Cuando veo el listado, debo poder ver un control que liste los niveles de seguridad y me permita seleccionar uno, al seleccionar el nivel de seguridad, solo deben quedar visibles en el listado aquellas contraseñas del nivel que seleccioné

**Como usuario quiero poder eliminar una contraseña de mi lista**
  - Criterio de Aceptacion:
    - Cuando veo el listado, debo ver links o botones para eliminar una contraseña
    - Cuando clickeo uno de esos links o botones, un mensaje de confirmacion debe aparecer, y si lo acepto, la contraseña debe ser eliminada de la lista.

## Alejandra Rabaza

Durante la clase, se conversó con el alumno sobre su interés en realizar un proyecto enfocado en el cálculo de costos e historial de viajes de camiones. El objetivo del proyecto es asistir a un usuario en el cálculo de los costos de un viaje, y llevar un historial de los viajes realizados. Se espera que el programa permita ingresar los datos del camión, los datos de un viaje, y que calcule el costo del mismo, ya sea este de grano o de micro picado. Además, se espera que el programa permita ver un historial de los viajes realizados, y que permita filtrarlos por distintos criterios. Este proyecto, si bien en esta instancia será acotado al uso de un solo usuario localmente, tiene grandes posibilidades de crecimiento como su posible uso por partes de empresas de transporte, o usuarios que deseen llevar un registro de sus viajes.

Los tipos de viaje y las tablas de costos serán registradas en el sistema de antemano mediante un Array de Objetos, con el nombre de cada tipo de viaje, y una tabla de costos. Ejemplo de código:
```javascript

const TIPOS_VIAJE = [
  {
    nombre: "Grano",
    costos: [
      {distancia: 100, costo: 1000},
      {distancia: 200, costo: 2000},
      {distancia: 300, costo: 3000},
      {distancia: 400, costo: 4000},
      {distancia: 500, costo: 5000},
    ]
  },
  {
    nombre: "Micro Picado",
    costos: [
      {distancia: 100, costo: 2000},
      {distancia: 200, costo: 4000},
      {distancia: 300, costo: 6000},
      {distancia: 400, costo: 8000},
      {distancia: 500, costo: 10000},
    ]
  }
];

```

### Requerimientos

Historias de Usuario:


**Como usuario quiero poder agregar un camión a mi lista**
  - Criterio de Aceptacion:
    - En la pantalla principal debo poder ver todo el tiempo, en la barra lateral, un formulario donde pueda pueda ingresar todos los datos de un camión y agregarlo a mi lista clickeando en el boton "Guardar"
      - El camión debe tener una patente
      - El camión debe tener una marca
      - El camión debe tener un modelo
      - El camión debe tener un año de fabricación
      - El camión debe tener un costo por kilometro
      - El camión debe tener una capacidad de carga expresada en kilogramos

**Como usuario quiero poder ver todos los camiones de mi lista**
  - Criterio de Aceptacion:
    - Cuando veo el listado, debo poder ver la patente del camión
    - Cuando veo el listado, debo poder ver la marca del camión
    - Cuando veo el listado, debo poder ver el modelo del camión
    - Cuando veo el listado, debo poder ver el año de fabricación del camión
    - Cuando veo el listado, debo poder ver el costo por kilometro del camión
    - Cuando veo el listado, debo poder ver la capacidad de carga del camión
    - Cuando agrego un camión, el listado se debe actualizar y mostrar el nuevo camión como parte de la lista de todos los camiones

**Como usuario quiero poder eliminar un camión de mi lista**
  - Criterio de Aceptacion:
    - Cuando veo el listado, debo ver links o botones para eliminar un camión
    - Cuando clickeo uno de esos links o botones, un mensaje de confirmacion debe aparecer, y si lo acepto, el camión debe ser eliminado de la lista.

**Como usuario quiero poder agregar un viaje a mi lista**
  - Criterio de Aceptacion:
    - En la pantalla principal debo poder ver todo el tiempo, en la barra lateral, un formulario donde pueda pueda ingresar todos los datos de un viaje y agregarlo a mi lista clickeando en el boton "Guardar"
      - El viaje debe tener un camión
      - El viaje debe tener una distancia
      - El viaje debe tener un tipo de viaje
      - El viaje debe tener una fecha
    - El costo del viaje debe ser calculado en base a la distancia y el tipo de viaje, utilizando la tabla de costos

**Como usuario quiero poder ver todos los viajes de mi lista**
  - Criterio de Aceptacion:
    - Cuando veo el listado, debo poder ver la patente del camión
    - Cuando veo el listado, debo poder ver la distancia del viaje
    - Cuando veo el listado, debo poder ver el tipo de viaje
    - Cuando veo el listado, debo poder ver la fecha del viaje
    - Cuando veo el listado, debo poder ver el costo del viaje
    - Cuando agrego un viaje, el listado se debe actualizar y mostrar el nuevo viaje como parte de la lista de todos los viajes

**[OPCIONAL] Como usuario quiero poder filtrar los viajes por camión**
  - Criterio de Aceptacion:
    - Cuando veo el listado, debo poder ver un control que liste los camiones y me permita seleccionar uno, al seleccionar el camión, solo deben quedar visibles en el listado aquellos viajes del camión que seleccioné

**[OPCIONAL] Como usuario quiero poder filtrar los viajes por tipo de viaje**
  - Criterio de Aceptacion:
    - Cuando veo el listado, debo poder ver un control que liste los tipos de viaje y me permita seleccionar uno, al seleccionar el tipo de viaje, solo deben quedar visibles en el listado aquellos viajes del tipo que seleccioné

## Julián Vazquez

## Fausto Dominguez