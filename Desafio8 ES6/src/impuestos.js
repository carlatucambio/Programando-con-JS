export default class Impuestos {
  constructor(monto_bruto_anual, deducciones) {
    this._monto_bruto_anual = monto_bruto_anual;
    this._deducciones = deducciones;
  }

  get monto_bruto_anual() {
    return this._monto_bruto_anual;
  }

  set monto_bruto_anual(nuevo_monto_anual) {
    this._monto_bruto_anual = nuevo_monto_anual;
  }

  get deducciones() {
    return this._deducciones;
  }

  set deducciones(nueva_deducciones) {
    this._deducciones = nueva_deducciones;
  }
}
