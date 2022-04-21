# E-commerce con ReactJS

Tienda generica y minimalista, de facil uso y mantenimiento hecho con ReactJS, SASS y Firebase

Facundo Toffolo Pasquini - [LinkedIn](https://www.linkedin.com/in/faqtoff/)

- [Demo - Vercel](https://tiendaecommerce.vercel.app/)

## Simulacion de la App

![Image text](./src/assets/demo/Demo.gif)

## Uso/Instalacion

1. Clonar el repositorio:
   ```
   git@github.com:faqtoff/CoderHouse_ReactJS.git
   cd CoderHouse_ReactJS
   ```
2. Instalar los paquetes y carpeta node_modules:
   ```
   npm install
   ```
3. Reviso las variables de entorno para la conexion con firebase.

   Para esto se debe configurar el archivo `.env` en la raiz del proyecto con el siguiente formato:

   - [Configuracion de firebase:](https://firebase.google.com/docs/web/learn-more#config-object)
     ```
     REACT_APP_FIREBASE_CONFIG.apiKey = XXXXXXXXXXXXXX
     REACT_APP_FIREBASE_CONFIG.authDomain = XXXXXX.firebaseapp.com
     REACT_APP_FIREBASE_CONFIG.projectId = XXXXXXXX
     REACT_APP_FIREBASE_CONFIG.storageBucket = XXXXXXX.appspot.com
     REACT_APP_FIREBASE_CONFIG.messagingSenderId = XXXXXXX
     REACT_APP_FIREBASE_CONFIG.appIdX= XXXXXXXX
     REACT_APP_FIREBASE_CONFIG.measurementId = XXXXXXXXXXX
     ```
   - Configuracion de las colecciones de datos (Seran las colecciones de Firebase Firestore desde donde la app leera la informacion):

     ```
     REACT_APP_DBPATH.stock=stock
     REACT_APP_DBPATH.orders=orders
     ```

   - Configuracion de los links de redes del footer:
     ```
     REACT_APP_SOCIAL.linkedin=https://www.linkedin.com/in/faqtoff
     REACT_APP_SOCIAL.github=https://www.linkedin.com/in/faqtoff
     REACT_APP_SOCIAL.facebook=https://www.linkedin.com/in/faqtoff
     REACT_APP_SOCIAL.instagram=https://www.linkedin.com/in/faqtoff
     ```
     En el footer apareceran los iconos solo de los links que existan en las variables de entorno
   - Si queremos obtener mas de un entorno (desarrollo y produccion), se deben agregar las variables correspondientes a cada uno, en el mismo formato mostrado, pero en los archivos `.env.development` y `.env.production`. Verificar archivo .gitignore

4. Levanto la app de modo local:

   ```
   npm run start
   ```

   - Si tengo dos entornos (desarrollo y produccion):
     - Desarrollo:
       ```
       npm run start
       ```
     - Produccion:
       ```
       npm run start:prod
       ```

## Tecnologias Usadas

- [fontawesome](https://fontawesome.com/)
- [react](https://reactjs.org/)
- [env-cmd](https://github.com/toddbluhm/env-cmd#readme)
- [react-toastify](https://github.com/fkhadra/react-toastify#readme)
- [react-router-dom](https://reactrouter.com/)
- [firebase](https://firebase.google.com/)
- [node-sass](https://github.com/sass/node-sass)

## Comandos GIT utiles

- `git checkout -b nuevobranch`: crea un nuevo branch con el nombre `nuevobranch`
- `git checkout branch`: se mueve al branch llamado `branch`
- `git pull`: Obtiene los datos actualizados del repositorio en la nube
- `git pull origin master`: Obtiene los datos actualizados de la rama master en la nube
- `git add .`: Agrega los cambios al commit
- `git commit -m 'Comentario de lo que se esta guardando'`: Guarda el commit con un texto
- `git push`: Envia los cambios locales al repositorio en la nube

## Imagenes de la App

- Inicio
  ![Image text](./src/assets/demo/Inicio.png)

- Articulo
  ![Image text](./src/assets/demo/Producto.png)

- Carrito
  ![Image text](./src/assets/demo/CarritoConProducto.png)
