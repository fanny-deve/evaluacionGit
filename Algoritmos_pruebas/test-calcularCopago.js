const assert = require('assert');
function calcularCopago(valorTotal, porcentaje) {
  return +(valorTotal * porcentaje).toFixed(2);
}
assert.strictEqual(calcularCopago(100000, 0.1), 10000);
assert.strictEqual(calcularCopago(50000, 0.2), 10000);
console.log('OK: calcularCopago (ms-facturacion)');
