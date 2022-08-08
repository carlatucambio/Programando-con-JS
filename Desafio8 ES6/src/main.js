import Impuestos from "./impuestos.js";

import Cliente from "./cliente";

let impuesto1 = new Impuestos(10000, 5000);
let cliente = new Cliente("Ana", impuesto1);

cliente.calcularImpuesto();
