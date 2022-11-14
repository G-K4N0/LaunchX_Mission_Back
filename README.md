# LaunchX_Mission_Back

**Bienvenid@ a mi recorrido en la misión Backend, espero te entretengas viendo las prácticas hechas en este viaje.**

Primero empezamos por el principio, comenzamos con el pre-working --> Instalación de las cosas que necesitamos.

En este viaje, instalamos:

[+] Nodejs

[+] Mongodb

[+] MySql

[+] Git

[+] Visual Studio Code

Los comienzos:

En mi caso creé una carpeta llamada **"PRIMERA_PRACTICA"**

Adentro de esta carpeta creé un archivo ´index.js´ para un pequeño ejercicio de el primer hola mundo con JavaScript corriendolo
con Nodejs

El código es el siguiente

```
const http = require('http');

const host = '0.0.0.0';

const port = 3000;

const server = http.createServer((req,res)=>{
    res.statusCode = 200;
    res.setHeader('Content-type','text-plain');
    res.end("Hola mundo");
	});
```

Ejecuto mi `index.js`

![index](/img/ejecucion_index.png)

accedo a mi navegador ingresando al `localhost:3000` y me aparece esto

![hola_mundo](/img/hola_mundo_js.png)