// Tipos de Animales - Clases representadas ene el diagrama implementando herencia

import Animal from "./Animal.js";
// import {playSound} from "./index.js";

class Leon extends Animal {
  constructor(nombre, edad, img, comentarios, sonido) {
    super(nombre, edad, img, comentarios, sonido);
  }

  Rugir() {
    playSound.miFuncionPublica(this.sonido);;
  }
}

class Lobo extends Animal {
  constructor(nombre, edad, img, comentarios, sonido) {
    super(nombre, edad, img, comentarios, sonido);
  }

  Aullar() {
    playSound.miFuncionPublica(this.sonido);;
  }
}

class Oso extends Animal {
  constructor(nombre, edad, img, comentarios, sonido) {
    super(nombre, edad, img, comentarios, sonido);
  }

  Gruñir() {
    playSound.miFuncionPublica(this.sonido);;
  }
}
class Serpiente extends Animal {
  constructor(nombre, edad, img, comentarios, sonido) {
    super(nombre, edad, img, comentarios, sonido);
  }

  Sisear() {
    playSound.miFuncionPublica(this.sonido);;
  }
}

class Aguila extends Animal {
  constructor(nombre, edad, img, comentarios, sonido) {
    super(nombre, edad, img, comentarios, sonido);
  }

  Chillar() {
    playSound.miFuncionPublica(this.sonido);;
  }
}

export { Leon, Lobo, Oso, Serpiente, Aguila };