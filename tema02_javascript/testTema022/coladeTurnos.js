/*
1. Cuando usamos correctamente (es decir, sin generar errores) la función setTimeout() en un programa, entonces Estamos programando la inserción de un "callback" en la cola de turnos del 
     proceso, una vez haya transcurrido un intervalo de tiempo determinado
2. Para optimizar el rendimiento y reducir el tiempo de respuesta en lenguajes como JavaScript, basados en una cola de turnos, debemos organizar los callbacks de una aplicación de la siguiente
     manera: Los callbacks  deben ser lo más breves posible, para minimizar las esperas y optimizar los tiempos de respuesta.
3. Los nuevos eventos no pueden procesarse, como mínimo, hasta que finalice el evento actualmente gestionado
4. Un fichero Node.js que implante un módulo puede exportar Los elementos (es decir, métodos, propiedades...) que se hayan declarado como pertenecientes al objeto global "exports".
5. La gestión de módulos tradicional de Node.js No cumple con el estándar ECMAScript 6 por lo que respecta a la gestión de módulos
*/