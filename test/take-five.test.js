const assert = require('assert');
const takeFive = require('../lib/take-five');

it('takes five seconds', done => {
  const start = new Date();

  takeFive(() => {
    const elapsed = new Date - start;
    assert.ok(elapsed > 5000 && elapsed < 6000);
    done();
  });
}).timeout(7000);