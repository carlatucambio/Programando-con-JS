//Requerimiento 3 - Consulta Asincrona utilizando una función async/await para obtener imagenes de animales

const getdatos = async () => {
    const url = "http://localhost:5500/animales.json";
    try {
      const response = await fetch(url);
      const { animales } = await response.json(); // {}
      return animales;
    } catch (err) {
      console.log(err);
    }
  };

  
  export default getdatos;


