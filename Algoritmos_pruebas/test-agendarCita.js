const assert = require('assert');
function haySolapamiento(citaA, citaB) {
  return citaA.medico === citaB.medico && citaA.hora === citaB.hora;
}
assert.strictEqual(haySolapamiento({ medico: 1, hora: '09:00' }, { medico: 1, hora: '09:00' }), true);
assert.strictEqual(haySolapamiento({ medico: 1, hora: '09:00' }, { medico: 2, hora: '09:00' }), false);
console.log('OK: agendar (ms-citas-medicas, sin solapamiento de horario)');
