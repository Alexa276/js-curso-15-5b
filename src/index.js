
// Alexa Altagracia Reyes Rojas 15 5tob

const saludar = (nombre) => {
   
   console.log('creando etiqueta h1, en el HTML');
   
    // comentaria de una sola linea.
    // El codigo comentado no lo lee el interprete de js.

    /* 
       Comentario de varias lineas.
       Uso basico del DOCUMENTO OBJECT MODEL (DOM)
       permite a js modificar el HTML.

    */

   const h1 = document.createElement ('h1');
   h1.innerText = `Hola, ${nombre}`;

   document.body.append(h1);

}

const user = "Juancho";

saludar(user);