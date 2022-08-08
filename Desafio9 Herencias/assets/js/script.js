class Propietario {
  constructor(Nombre, Direccion, Telefono) {
    this._Nombre = Nombre;
    this._Direccion = Direccion;
    this._Telefono = Telefono;
  }

  datosPropietario() {
    return `El nombre del dueño es: ${this._Nombre}, El domicilio es: ${this._Direccion} 
    y el número telefónico de contacto: ${this._Telefono}`;
  }
}

class Animal extends Propietario {
  constructor(Nombre, Direccion, Telefono, Tipo) {
    super(Nombre, Direccion, Telefono);
    this._Tipo = Tipo;
  }

  gettipo() {
    return `El tipo de animal es un: ${this._Tipo}`;
  }
}

class Mascota extends Animal {
  constructor(Nombre, Direccion, Telefono, Tipo, nombreMasc, Enfermedad) {
    super(Nombre, Direccion, Telefono, Tipo);
    this._nombreMasc = nombreMasc;
    this._Enfermedad = Enfermedad;
  }

  get nombre() {
    //Get & Set para recibir y modificar datos
    return this._nombreMasc;
  }

  set nombre(nuevoNombre) {
    this._nombreMasc = nuevoNombre;
  }

  get enfermedad() {
    return this._Enfermedad;
  }

  set enfermedad(nuevaEnfermedad) {
    this._Enfermedad = nuevaEnfermedad;
  }
}

let formulario = document.querySelector("form"); // Impresion de Resultados en HTML

let evaluacion = (event) => {
  event.preventDefault();

  let Nombre = document.getElementById("propietario").value;
  let Direccion = document.getElementById("direccion").value;
  let Telefono = document.getElementById("telefono").value;
  let nombre = document.getElementById("nombreMascota").value;
  let Tipo = document.getElementById("tipo").value;
  let enfermedad = document.getElementById("enfermedad").value;
  let resultado = document.getElementById("resultado");

  if (Tipo == "Perro") {
    let perro = new Mascota(
      Nombre,
      Direccion,
      Telefono,
      Tipo,
      nombre,
      enfermedad
    );
    resultado.innerHTML = `${perro.datosPropietario()} <br> ${perro.gettipo()} , mientras el nombre de la mascota es: 
    ${perro.nombre}  y la enfermedad es: ${perro.enfermedad}`;
  } else if (Tipo == "Gato") {
    let gato = new Mascota(
      Nombre,
      Direccion,
      Telefono,
      Tipo,
      nombre,
      enfermedad
    );
    resultado.innerHTML = `${gato.datosPropietario()} <br></br>${gato.gettipo()}, mientras el nombre de la mascota es: 
    ${gato.nombre}  y la enfermedad es: ${gato.enfermedad} `;
  } else {
    let conejo = new Mascota(
      Nombre,
      Direccion,
      Telefono,
      Tipo,
      nombre,
      enfermedad
    );
    resultado.innerHTML = `${conejo.datosPropietario()} <br></br>${conejo.gettipo()}, mientras el nombre de la mascota es: 
    ${conejo.nombre}  y la enfermedad es: ${conejo.enfermedad} `;
  }
};
formulario.addEventListener("submit", evaluacion);
