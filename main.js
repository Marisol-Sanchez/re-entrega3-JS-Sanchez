
//class constructora
class Pelicula{
    constructor(id, director, titulo, precio, imagen){
       this.id = id,
       this.director = director,
       this.titulo = titulo,
       this.precio = precio,
       this.imagen = imagen
 
    }
 }
 
 //Instanciación de objetos: 
 const pelicula1 = new Pelicula(1,"Alejandro Doria","Esperando la Carroza",1000,"carroza.jpg")
 
 const pelicula2 = new Pelicula(2, "Juan José Campanella", "El secreto de sus ojos", 1000, "secreto.jpg")
 
 const pelicula3 = new Pelicula(3, "Luis Ortega", "El ángel", 1000, "angel.jpg" ) 
 
 const pelicula4 = new Pelicula(4, "Juan Szifron", "Relatos Salvajes", 1000, "salvajes.jpg" )
 
 const pelicula5 = new Pelicula(5, "Gastón Duprat", "El ciudadano Ilustre", 1000, "ciudadano.jpg")
 
 const pelicula6 = new Pelicula(6,"Fabián Bielinsky", "9 reinas", 1000, "reinas.jpg")
 
 const pelicula7 = new Pelicula(7,"Lucas Santa Ana","Yo Adolescente",1000,"adolescente.jpg")

 const pelicula8 = new Pelicula(8,"Santiago Mitre","Argentina 1985",1000,"argentina.jpg")

 const pelicula9 = new Pelicula(9,"Juan José Campanella","Metegol",1000,"metegol.jpg")

 const pelicula10 = new Pelicula(10," Sebastián Schindel","El patrón, radiografía de un crimen",1000,"patron.jpg")

 const pelicula11 = new Pelicula(11,"Juan Pablo Buscarini","El ratón Pérez",1000,"raton.jpg")

 const pelicula12 = new Pelicula(12,"Ariel Winograd","El robo del siglo",1000,"robo.jpg")



 //CREAR UN ARRAY DE OBJETOS
 const cartelera = []
 cartelera.push(pelicula1, pelicula2, pelicula3, pelicula4, pelicula5, pelicula6, pelicula7, pelicula8, pelicula9, pelicula10,
   pelicula11, pelicula12)


 //DOM CON ARRAY DE OBJETOS
 let peliculasDiv = document.getElementById("peliculas")
 
 //recorrer estanteria para imprimir TOOODOS los elementos de mi array
 function mostrarCartelera(array){
    //resetear el DOM
    peliculasDiv.innerHTML = ``
    //Recorrer array para imprimir en el DOM
    for(let pelicula of array ){
       let nuevaPeliculaDiv = document.createElement("div")
       //agregar class
       nuevaPeliculaDiv.className = "col-12 col-md-6 col-lg-4 my-2"
       nuevaPeliculaDiv.innerHTML = `<div id="${pelicula.id}" class="card" style="width: 18rem;">
                                  <img class="card-img-top img-fluid" style="height: 200px; "src="assets/${pelicula.imagen}" alt="${pelicula.titulo} de ${pelicula.director}">
                                  <div class="card-body">
                                     <h4 class="card-title">${pelicula.titulo}</h4>
                                     <p> Director: ${pelicula.director}</p>
                                     <p class="">Precio: ${pelicula.precio}</p>
                                  <button id="agregarBtn${pelicula.id}" class="btn btn-outline-success">Agregar al carrito</button>
                                  </div>
                               </div>`
      peliculasDiv.appendChild(nuevaPeliculaDiv)
 
      let agregarBtn = document.getElementById(`agregarBtn${pelicula.id}`)
      console.log(agregarBtn)

      agregarBtn.addEventListener("click", () => {
      console.log(`La pelicula ${pelicula.titulo} fue agregado al carrito`)
      agregarAlCarrito(pelicula);//nuevo

  



    })
 
   }
   }
   mostrarCartelera(cartelera)   
 
 

 
   //ordenar array por criterio
   let selectOrden = document.getElementById("selectOrden")
   
   selectOrden.addEventListener("change", () => {
      console.log(selectOrden.value)
      switch(selectOrden.value){
         case "1":
            ordenarMayorMenor(cartelera)
         break
         case "2":
            ordenarMenorMayor(cartelera)
         break
         case "3":
            ordenarAlfabeticamenteTitulo(cartelera)
         break
         default:
            mostrarCatalogo(cartelera)
         break
      }
   }
   )

   function ordenarMenorMayor(array){
    const menorMayor = [].concat(array)
    console.log(menorMayor)
    menorMayor.sort((a,b) => a.precio - b.precio)
    mostrarCartelera(menorMayor)
   }
  
   function ordenarMayorMenor(array){
    const mayorMenor = [].concat(array)
    mayorMenor.sort((elem1 ,elem2) => elem2.precio - elem1.precio)
    mostrarCartelera(mayorMenor)
   }
  
   function ordenarAlfabeticamenteTitulo(array){
    const arrayAlfabetico = [].concat(array)
    arrayAlfabetico.sort( (a,b) =>{
       if (a.titulo > b.titulo) {
          return 1
        }
        if (a.titulo < b.titulo) {
          return -1
        }
        return 0
    })
  
   mostrarCartelera(arrayAlfabetico)
   }
  
 
   let agregarPeliBtn = document.getElementById("agregarPeliBtn")
   
   agregarPeliBtn.addEventListener("click", function(event){

      event.preventDefault()
      
      agregarPelicula(cartelera)
   })


  function agregarPelicula(array){
    let formAgregarPelicula = document.getElementById("formAgregarPelicula")
    console.log(formAgregarPelicula[0])
    console.log(formAgregarPelicula[1])
    console.log(formAgregarPelicula[2])
   
    const peliNueva = new Pelicula(array.length+1,formAgregarPelicula[1].value, formAgregarPelicula[0].value, parseInt(formAgregarPelicula[2].value), "cine.jpg")
    console.log(peliNueva)
 
    array.push(peliNueva)
    mostrarCartelera(array)
 
    formAgregarPelicula.reset()
    
   }


// Variable para indicar si se realizó una compra exitosa
let compraExitosa = false;

// Función para agregar una película al carrito
function agregarAlCarrito(pelicula) {
  let carritoDiv = document.getElementById("carrito");

  // Crear una nueva card para la película
  let nuevaPeliculaDiv = document.createElement("div");
  nuevaPeliculaDiv.className = "card";
  nuevaPeliculaDiv.innerHTML = `
    <img class="card-img-top" src="assets/${pelicula.imagen}" alt="${pelicula.titulo} de ${pelicula.director}">
    <div class="card-body">
      <h5 class="card-title">${pelicula.titulo}</h5>
      <p class="card-text">Director: ${pelicula.director}</p>
      <p class="card-text">Precio: ${pelicula.precio}</p>
    </div>`;

  carritoDiv.appendChild(nuevaPeliculaDiv);
  carritoDiv.style.display = "block"; // Mostrar el carrito

  // Habilitar el botón de comprar nuevamente
  comprarBtn.disabled = false;
}

// Evento que se ejecuta cuando el botón de comprar es clickeado
const comprarBtn = document.getElementById("comprarBtn");
if (comprarBtn) {
  comprarBtn.addEventListener("click", () => {
    // Mostrar el mensaje de compra exitosa
    alert("Compra exitosa");

    // Deshabilitar el botón de comprar después de la compra exitosa
    comprarBtn.disabled = true;
    compraExitosa = true;

    // Ocultar y vaciar el carrito
    let carritoDiv = document.getElementById("carrito");
    carritoDiv.style.display = "none";
    carritoDiv.innerHTML = '';
  });
}

// Evento que se ejecuta cuando el botón de cancelar compra es clickeado
const cancelarCompraBtn = document.getElementById("cancelarCompraBtn");
if (cancelarCompraBtn) {
  cancelarCompraBtn.addEventListener("click", () => {
    // Deshabilitar el botón de comprar solo si no se realizó una compra exitosa
    if (!compraExitosa) {
      comprarBtn.disabled = true;
    }

    // Vaciar y ocultar el carrito
    let carritoDiv = document.getElementById("carrito");
    carritoDiv.innerHTML = '';
    carritoDiv.style.display = "none";
  });
}