# solucion-reto
# Solución técnica para la empresa Innpactia

Este es el proyecto desarrollado por Ignacio Alquati para la empresa Innpactia. El proyecto fue creado utilizando Node.js y Express para el backend, Angular 13 para el frontend y MySQL para la base de datos.

## Instalación

Para poder correr el proyecto completo es necesario seguir los siguientes pasos:

1. Descargar el archivo "Reparaciones.SQL" que se encuentra en la raíz del repositorio y utilizarlo para generar la base de datos e insertar algunos datos de prueba.

2. Asegurarse de tener instalado Node.js. En caso contrario, se puede descargar desde https://nodejs.org/es/.

3. Abrir XAMPP o MAMP y activar el servicio en el puerto 3306.

4. En la carpeta "Backend", abrir una terminal y ejecutar el siguiente comando:
npm i


Este comando instalará todas las dependencias del proyecto.

5. Repetir el mismo procedimiento en la carpeta "Frontend". Abrir una terminal en la carpeta y ejecutar el comando:
npm i


Este comando instalará todas las dependencias del proyecto.

6. Una vez instaladas las dependencias en ambos proyectos, abrir una terminal en la raíz de la carpeta "Backend" y ejecutar el comando:
npm start


Si todo sale bien, se verá en la terminal algo similar a lo siguiente:

backend@0.0.0 start
node ./bin/www


7. Repetir el mismo procedimiento en la carpeta "Frontend". Abrir una terminal en la carpeta y ejecutar el comando:
npm start


Si todo sale bien, se verá en la terminal lo siguiente:
√ Compiled successfully.



8. Abrir un navegador e ingresar la siguiente dirección en la barra de navegación: http://localhost:4200/login

9. Si todo ha salido bien, el sitio debería estar corriendo. Las credenciales de ingreso son:
email: user@user.com
password: 123456


10. También se puede crear un usuario con una solicitud de tipo POST con los headers "content/type": application/json y el siguiente cuerpo:

 ```
 {
    "email": "cliente40@example.com",
    "name" : "Lionel Messi",
   "password" : "aquimipassword"
 }
 ```

 Todas las contraseñas están encriptadas, por lo que no se deben modificar directamente desde la base de datos.

## Desarrollado por

Ignacio Alquati.