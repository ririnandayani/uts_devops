const assert = require('assert');
const { tambah } = require('../public/script');

describe('Fungsi tambah()', function () {
  it('2 + 3 harus sama dengan 5', function () {
    assert.strictEqual(tambah(2, 3), 5);
  });
});