import Animal from "./Animal.js";
import { Leon, Lobo, Oso, Serpiente, Aguila } from "./Animales.js";
import getdatos from "./ConsultaJson.js";

//Obtener imagen de cada animal con la ruta dada por .JSON

let animales = [];
getdatos().then((data) => {
  animales = data;
  console.log(data);
});

const animalId = document.getElementById("animal");
animalId.addEventListener("change", (e) => {
  const animalSeleccion = e.target.value; // toma el valor del elemento clickeado
  const encontrarAnimal = animales.find(
    (afuncion) => afuncion.name == animalSeleccion
  ); // encontrar en el arreglo animales.json las propiedades del animal clickeado
  console.log(
    "propiedad imagen del animales.json para animal clickeado:",
    encontrarAnimal.imagen
  );
  preview.style.backgroundImage = `url(assets/imgs/${encontrarAnimal.imagen})`; //muestra imagen del animal previo
});

  //Manipulación del DOM que muestra en la tabla los animales registrados en el formulario.

const Registrar = document.getElementById("btnRegistrar");
Registrar.addEventListener("click", (event) => {
  event.preventDefault();

  const animalSeleccion = document.getElementById("animal").value; // toma el valor del elemento clickeado
  const encontrarAnimal = animales.find(
    (afuncion) => afuncion.name == animalSeleccion
  );

  let tablaAnimales = document.getElementById("Animales");
  let edad = document.getElementById("edad").value;
  let comentarios = document.getElementById("comentarios").value;

  console.log(
    `El animal seleccionado es un ${animal.value}, su edad es entre ${edad}, y sus comentarios son ${comentarios}`
  );


  let animalIngresado = [];
  if (encontrarAnimal.name === "Leon") {
    animalIngresado = new Leon(
      animal.value,
      edad,
      encontrarAnimal.imagen,
      comentarios,
      encontrarAnimal.sonido
    ); 
  } else if (encontrarAnimal.name === "Lobo") {
    animalIngresado = new Lobo(
      animal.value,
      edad,
      encontrarAnimal.imagen,
      comentarios,
      encontrarAnimal.sonido
    ); 
  } else if (encontrarAnimal.name === "Oso") {
    animalIngresado = new Oso(
      animal.value,
      edad,
      encontrarAnimal.imagen,
      comentarios,
      encontrarAnimal.sonido
    );
  } else if (encontrarAnimal.name === "Serpiente") {
    animalIngresado = new Serpiente(
      animal.value,
      edad,
      encontrarAnimal.imagen,
      comentarios,
      encontrarAnimal.sonido
    ); 
  } else {
    animalIngresado = new Aguila(
      animal.value,
      edad,
      encontrarAnimal.imagen,
      comentarios,
      encontrarAnimal.sonido
    ); 
  }

  tablaAnimales.innerHTML += `<article class = "col-4"> <img class ="img-fluid" src= "assets/imgs/${animalIngresado.img}" alt="" srcset="">
    <button class ="w-100 btn  btn-secondary" onclick="playSound(${encontrarAnimal.sonido.length})"><img src= "assets/imgs/audio.svg" height ="30" width="100"></button>
    </article>`;

  //Limpieza de Formulario
  document.getElementById("animal").value = "";
  document.getElementById("comentarios").value = "";
  document.getElementById("edad").value = "";
  preview.style.backgroundImage = `url(assets/imgs/lion.svg)`;

});

//Reproducción de Sonido Animales 
const playSound = (() => {
  //Patron Modulo Funcion Privada y Publica
  let miMetodoPrivado;

  miMetodoPrivado = (audio) => {
    //Funcion Privado
    audio = document.getElementById("player");
    audio.setAttribute("src", `assets/imgs/${encontrarAnimal.sonido}`);
  };
  return {
    miFuncionPublica: (audio) => {
      //Funcion Pública
      miMetodoPrivado(audio);
      playSound();
    },
  };
})();

/* window.playSound = function () {
  const animalId = document.getElementById("animal");
  animalId.addEventListener("change", (e) => {
    const animalSeleccion = e.target.value; // toma el valor del elemento clickeado
    const encontrarAnimal = animales.find(
      (afuncion) => afuncion.name == animalSeleccion
    ); // encontrar en el arreglo animales.json las propiedades del animal clickeado
    console.log(
      "propiedad imagen del animales.json para animal clickeado:",
      encontrarAnimal.imagen
    );

  console.log(encontrarAnimal.value)
  if (encontrarAnimal.name === "Leon") {
      encontrarAnimal.sonido;
  } else if (animal.value === "Lobo") {
    encontrarAnimal.sonido;
  }else if (animal.value === "Oso") {
    encontrarAnimal.sonido;
  }else if (animal.value === "Serpiente") {
    encontrarAnimal.sonido;
  }else {
    encontrarAnimal.sonido;
  };

});

}; */