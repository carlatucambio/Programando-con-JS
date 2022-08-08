//Clase Padre

export default class Animal {
  constructor(nombre, edad, img, comentarios, sonido) {
    this._nombre = nombre;
    this._edad = edad;
    this._img = img;
    this._comentarios = comentarios;
    this._sonido = sonido;
  }

  get Nombre() {
    return this._nombre;
  }

  get Edad() {
    return this._edad;
  }

  get img() {
    return this._img;
  }

  set comentarios(nuevo_comentarios) {
    this._comentarios = nuevo_comentarios;

 
  }

  get sonido() {
    return this._sonido;
  }

}

