const assert = require('assert');
function verificarEstado(afiliado) {
  return afiliado.estado === 'ACTIVO';
}
assert.strictEqual(verificarEstado({ estado: 'ACTIVO' }), true);
assert.strictEqual(verificarEstado({ estado: 'SUSPENDIDO' }), false);
console.log('OK: verificarEstado (ms-afiliados)');
