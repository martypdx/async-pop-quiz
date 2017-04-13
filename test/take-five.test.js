const assert = require('assert');
const takeFive = require('../lib/take-five');

it('takes five seconds', done => {
  this.timeout(7000);
  const start = new Date();
  const elapsed = new Date - start;
  takeFive(start, err => {
    if(err) return done(err);
    assert.ok(elapsed > 5000 && elapsed < 6000);
    done();
  });
});