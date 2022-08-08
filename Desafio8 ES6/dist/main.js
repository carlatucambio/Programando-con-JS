"use strict";

var _impuestos = _interopRequireDefault(require("./impuestos.js"));

var _cliente = _interopRequireDefault(require("./cliente"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var impuesto1 = new _impuestos["default"](10000, 5000);
var cliente = new _cliente["default"]("Ana", impuesto1);
cliente.calcularImpuesto();