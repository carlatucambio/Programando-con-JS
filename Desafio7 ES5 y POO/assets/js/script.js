function Consultorio(nombreconsult, pacientes) {
  //Funcion Constructora Objeto Consultorio usando ES5
  this._nombreconsult = nombreconsult;
  this._pacientes = pacientes || [];

  Object.defineProperty(this, "_getNombreconsult", {
    // Encapsulamiento en funcion constructora Getter & Setter
    get: function () {
      return _nombreconsult;
    },
  });

  Object.defineProperty(this, "_setNombreconsult", {
    set: function (nombreconsult) {
      _nombreconsult = nombreconsult;
    },
  });

  Object.defineProperty(this, "_getPacientes", {
    // Encapsulamiento en funcion constructora Getter & Setter
    get: function () {
      return pacientes;
    },
  });

  Object.defineProperty(this, "_setPacientes", {
    set: function (pacientes) {
      _pacientes = pacientes;
    },
  });
}

function Paciente(nombre, edad, rut, diagnostico) {
  //Funcion Constructora Objeto Paciente usando ES5
  this._nombre = nombre;
  this._edad = edad;
  this._rut = rut;
  this._diagnostico = diagnostico;

  Object.defineProperty(this, "_getNombre", {
    // Encapsulamiento en funcion constructora Getter & Setter
    get: function () {
      return nombre;
    },
  });

  Object.defineProperty(this, "_setNombre", {
    set: function (nombre) {
      _nombre = nombre;
    },
  });

  Object.defineProperty(this, "_getEdad", {
    // Encapsulamiento en funcion constructora Getter & Setter
    get: function () {
      return edad;
    },
  });

  Object.defineProperty(this, "_setEdad", {
    set: function (edad) {
      _edad = edad;
    },
  });

  Object.defineProperty(this, "_getRut", {
    // Encapsulamiento en funcion constructora Getter & Setter
    get: function () {
      return rut;
    },
  });

  Object.defineProperty(this, "_setRut", {
    set: function (rut) {
      _rut = rut;
    },
  });

  Object.defineProperty(this, "_getDiagnostico", {
    // Encapsulamiento en funcion constructora Getter & Setter
    get: function () {
      return diagnostico;
    },
  });

  Object.defineProperty(this, "_setDiagnostico", {
    set: function (diagnostico) {
      _diagnostico = diagnostico;
    },
  });
};

Consultorio.prototype.mostrar = function () {
  // Metodo para mostrar todos los datos de los pacientes registrados
  console.log("TODOS LOS PACIENTES");
  this._getPacientes.forEach((Paciente) => {
    console.log(
      "Nombre:",
      Paciente._getNombre,
      "Edad:",
      Paciente._getEdad,
      "Rut:",
      Paciente._getRut,
      "Diagnos:",
      Paciente._getDiagnostico
    );
  });
};

Consultorio.prototype.buscar_nombre = function (nom) {
  // Metodo para buscar los datos de los pacientes por nombre
  console.log("PACIENTES BUSCADOS POR NOMBRE");
  this._getPacientes.forEach((Paciente) => {
    if (Paciente._nombre == nom) {
      console.log(
        "Nombre:",
        Paciente._getNombre,
        "Edad:",
        Paciente._getEdad,
        "Rut:",
        Paciente._getRut,
        "Diagnos:",
        Paciente._getDiagnostico
      );
    }
  });
};

p1 = new Paciente("Luca", "32", "254324556", "Sano"); // Instanciar cada objeto con la instruccion new
p2 = new Paciente("Raphael", "53", "254324556", "ACV");
p3 = new Paciente("Marco", "48", "254324556", "Sano");
p4 = new Paciente("Ruth", "35", "254324556", "Diabetes");
p5 = new Paciente("Luca", "70", "254324556", "Tension");
p6 = new Paciente("Raphael", "64", "254324556", "Hipertensión");
p7 = new Paciente("Marco", "57", "254324556", "Fractura");
p8 = new Paciente("Ruth", "45", "254324556", "Fiebre");
c1 = new Consultorio("Médico", [p1, p2, p3, p4, p5, p6, p7, p8]);

c1.mostrar();
c1.buscar_nombre("Luca");
