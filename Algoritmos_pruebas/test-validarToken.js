const assert = require('assert');
function validarToken(token) {
  return typeof token === 'string' && token.split('.').length === 3;
}
assert.strictEqual(validarToken('abc.def.ghi'), true);
assert.strictEqual(validarToken('token-invalido'), false);
console.log('OK: validarToken (ms-autenticacion)');
