const assert = require('assert');
const Room = require('../room.js');

describe('Room', function () {

  let room;

  beforeEach(function () {
    room = new Room(20)
  });

  it('should have an area in sq m', function () {
    const actual = room.area;
    assert.strictEqual(actual, 20);
  });
  it('should start not painted', function () {
    const actual = room.isPainted;
    assert.strictEqual(actual, false);
  });
  it('should be able to be painted', function () {
    room.paintMe();
    let actual = room.isPainted;
    assert.strictEqual(actual, true);
  });
});
