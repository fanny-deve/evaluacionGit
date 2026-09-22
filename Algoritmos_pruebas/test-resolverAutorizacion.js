const assert = require('assert');
function resolver(autorizacion) {
  return autorizacion.costo > 5000000 ? 'PENDIENTE_COMITE' : 'APROBADA';
}
assert.strictEqual(resolver({ costo: 1000000 }), 'APROBADA');
assert.strictEqual(resolver({ costo: 8000000 }), 'PENDIENTE_COMITE');
console.log('OK: resolver (ms-autorizaciones)');
