//apiKey Spoonacular ver linea 3 uso, la API solo tiene 150 peticiones por día OJO.
const apiKey = "49e4f23e85de42e6a78882fc07fd1b00";
/*Trae recetas al azar, la URL contiene:
 * number = Total de recetas al azar que desea
 * apiKey = la Key de Spoonacular
 * limitLicense = true este parametro tiene que ver con licencia de uso, sin restricciones en true.
 * se pueden añadir mas parametros en la URL actuan como filtros
 */
const url = `https://api.spoonacular.com/recipes/random?number=4&apiKey=${apiKey}&limitLicense=true`;

//Función fetch me trae un array con resultados
fetch(url, {
  // metodo para traer la info, en la web de Spoonacular especifican que para este debe ser GET
  method: "GET",
})
  //Leo los datos que trae y los coloco en formato JSON
  .then((respuesta) => respuesta.json())
  //Los datos de respuesta los traigo y meto en la funcion imprimirHTML el parametro datos.recipes es el nombre del array que trae
  .then((datos) => imprimirHTML(datos.recipes));
//.then(datos => console.log(datos.recipes));
//Esta función me modifica el HTML, recibe los datos obtenidos en fetch
function imprimirHTML(datos) {
  //Ciclo for para recorrer el array traido del fetch "receta" es el indice actual del for
  datos.forEach((receta) => {
    //Creo un li que me hará una lista en mi HTML
    const div = document.createElement("div");
    //Estos son las "etiquetas" del JSON que trae la API, yo seleccione estas pero hay cientas más, los datos los trae del indice actual receta
    const { title, readyInMinutes, image, summary, sourceUrl } = receta;
    /* Aquí es donde va ir escribiendo el codigo HMTL como un <li>
     * las etiquetas de arriba las escribo abajo, este ejemplo me traerá titulo, tiempo empleado para la receta,
     * la imagen de la receta en un img src, el resumen de la receta en un <p> y el link en un href de la receta
     */
    
    div.setAttribute("class","col-sm-12 col-md-6");
    div.innerHTML = `
        <div class="pt-3 col-sm-12">
            <div class="card bg-light flex-row-reverse">      
                <img src="${image}" class="img-fluid" alt="imagen restaurante" style="width: 40%; height: auto; object-fit: cover;">
                <div class="card-body">
                   <h2 class="card-title text-dark">"${title}"</h2>
                    <p class="card-text text-dark">
                    "${summary}"
                    </p>
                <a href="${sourceUrl}" class="btn btn-dark float-right">Seguir leyendo</a>
              </div>
           </div>
        </div>           
        `;
    // Los resultados del HTML los va a mostrar en el div de la etiqueta app
    document.querySelector("#news-section").appendChild(div);
  });
}