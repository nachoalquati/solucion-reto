# solucion-reto

Esta es la solución técnica para la empresa Innpactia realizada por Ignacio Alquati.

Para comenzar el proyecto fue creado con Node.js y Express para el backend , Angular 13 para el frontend y MySQL para la base de datos.

Para poder correr el proyecto completo primero es importante realizar los siguientes pasos:


Hacer uso del archivo Reparaciones.SQL que se encuentra en la raíz del repositorio para generar la base de datos e insertar algunos datos de prueba.
Asegurarse de tener instalado el entorno de node.js, sino, descargarlo desde https://nodejs.org/es/ 

Abrir XAMPP o MAMP y activar el servicio en el puerto 3306.

El siguiente paso es abrir una terminal en la raíz de la carpeta “Backend” e insertar el siguiente comando:
npm i
Al insertar este comando instalaremos todas las dependencias del proyecto.

Ahora haremos el mismo procedimiento con la carpeta “Frontend”, accederemos a la raíz y ejecutaremos el comando desde una terminal:
npm i


Una vez que se hayan instalado las dependencias de ambos proyectos vamos a volver a la terminal que está abierta en la raíz de la carpeta backend y ejecutaremos el comando:
npm start
Si todo salio bien ahora deberíamos ver en la terminal algo parecido a lo siguiente:
> backend@0.0.0 start
> node ./bin/www
Ahora realizaremos el mismo procedimiento con la terminal abierta en la raíz de la carpeta frontend, si todo sale bien deberíamos ver lo siguiente:
√ Compiled successfully.


Ahora debemos abrir un navegador e ingresar lo siguiente en la barra de navegación: http://localhost:4200/login


Si todo ha salido bien ya debería estar corriendo el sitio, las credenciales de ingreso son: 
	email: user@user.com
	password: 123456

También puede crearse un usuario con una request de tipo POST con los headers de “content/type”:application/json y un cuerpo con los siguiente:
{
   "email": "cliente40@example.com",
   "name" : "Lionel Messi",
  "password" : "aquimipassword"
}
Atención, todas las contraseñas están hasheadas, por lo que no hay que intentar modificarlas desde la base de datos directamente.
Listo!


Desarrollado por Ignacio Alquati.
