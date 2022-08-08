const mostrarVideo = (() => {                              //Patron Modulo Funcion Privada y Publica
  let miMetodoPrivado;

  miMetodoPrivado = (url, id) => {
    //Funcion Privada
    id.setAttribute("src", url);
  };
  return {
    miFuncionPublica: (url, id) => {
      //Funcion Pública
      //
      miMetodoPrivado(url, id);
    },
  };
})();

class Multimedia {
  constructor(url) {
    let _url = url;             // Proteccion de atributo url implementando clousures: Para proteger url se elimina el this. y se crea el atributo como una variable
    this.getUrl = () => _url;  //  Para poder obtener la url protegida. Se crea la funcion que retorna la variable _url
    this.setUrl = (nuevo_url) => (_url = nuevo_url);
  }

  get url() {                  // Disponibiliza la variable url
    return this.getUrl();
  }

  setInicio() {
    return `Este método es para realizar un cambio en la URL del video`;
  }
}

class Reproductor extends Multimedia {
  constructor(url, id) {
    super(url);
    let _id = id;
    this.getId = () => _id; // Proteccion de atributo id implementando clousures
    this.setId = (nuevo_id) => (_id = nuevo_id);
  }

  get id() {
    return this.getId();
  }

  playMultimedia() {
    mostrarVideo.miFuncionPublica(this.url, this.id);
  }

  setInicio(tiempo) {
    return this.id.setAttribute("src", `${this.url}?start=${tiempo}`);
  }
}

// Instanciando la clase hija Reproductor para cada etiqueta del iframe

let musica1 = new Reproductor(`https://www.youtube.com/embed/HxEnEQTazgw`,musica);
let pelicula1 = new Reproductor(`https://www.youtube.com/embed/5PSNL1qE6VY`,peliculas);
let serie1 = new Reproductor(`https://www.youtube.com/embed/221F55VPp2M`,series);

musica1.playMultimedia();       // Invocación del método playMultimedia() para cada instancia
pelicula1.playMultimedia();
serie1.playMultimedia();

musica1.setInicio(30);    // Uso del método setInicio para modificar tiempo de inicio del video