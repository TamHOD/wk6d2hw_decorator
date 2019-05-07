const assert = require('assert');
const PaintCan = require('../paint_can.js');


describe('Paint Can', function () {
  let paintCan;

  beforeEach(function () {
    paintCan = new PaintCan(5)
  });

  it('should have a volume', function () {
    const actual = paintCan.volume;
    assert.strictEqual(actual, 5);
  });
  it('should be able to check if its empty', function () {
    const actual = paintCan.isEmpty;
    assert.strictEqual(actual, false);
  });
  it('should be able to empty itself', function () {
    paintCan.emptyMe();
    let actual = paintCan.isEmpty;
    assert.strictEqual(actual, true)
  });
});
