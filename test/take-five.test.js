const assert = require('assert');
const takeFive = require('../lib/take-five');

it('takes five', done => {
    const start = new Date();

    takeFive(() => {
        const elapsed = new Date() - start;
        assert.ok(elapsed > 5000 && elapsed < 5025);
        done();
    });

}).timeout(5500);