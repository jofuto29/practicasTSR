/*  1. si un proceso genera un evento A la rutinas que gestionaran esa ocurrencia de a se ejecutan  Sincrónicamente. Las rutinas gestoras son ejecutadas secuencialmente en el turno actual.
         La cola de turnos no se utiliza para nada en estas gestiones.
    2. el nombre que se da en la documentacion nodejs para referirse a la rutina que gestiona cada ocurrencia de un evento es listener
    3. ¿Cuántos parámetros debe usar la rutina o función que gestiona la ocurrencia de un evento?  Ese número depende del número de argumentos utilizados en la operación emit() correspondiente.
    3. para generar un evento en un porgrama nodejs debemos utilizar la siguiente operacion: metodo emit() setListener()
    4. Para asociar una función gestora a un determinado tipo de evento, debemos utilizar esta operación en un objeto emisor de eventos
    4. El identificador "resume" es el nombre de este elemento en el módulo 'stream' de Node.js: Una operación en streams de tipo Readable que reanuda la actividad en un stream previamente 
        pausado.
    5. Para especificar cómo enviar un mensaje a otro proceso en Node.js, podemos utilizar esta operación:  write(...) en un stream de tipo Writable.
    6. Para cerrar el extremo emisor en un stream de comunicaciones, la operación recomendada es: end()
    7. Para especificar cómo recibir un mensaje desde otro proceso, debemos utilizar esta operación: on('data',...) en un stream de tipo Readable.





*/