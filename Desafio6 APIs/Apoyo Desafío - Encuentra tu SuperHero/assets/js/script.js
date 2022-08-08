/*let formulario = document.getElementById("formulario");
formulario.addEventListener("button", function (event) {
  event.preventDefault();
  limpiarErrores();

  let buscar = document.getElementById("buscar").value;
  let resultado = validar(buscar);

  buscar = parseInt(buscar);

  if (resultado == true) {
    operacion();
  }
}); */

$(document).ready(function () {
  $("button").on("click", function () {
    $.ajax({
      type: "GET",
      url: "https://jsonplaceholder.typicode.com/users",
      dataType: "json",
      success: function (datosApi) {
        console.log(datosApi);
       /* datosApi.data.forEach((u) => {
          $(".resultado").append(`
                        <p> ${u.id} - ${u.email} - ${u.avatar}  </p>
                        `);
        }); */
      },
    });
  });
});

/* url: 'https://www.superheroapi.com/api.php/10226412742695209/${hero}',*/
