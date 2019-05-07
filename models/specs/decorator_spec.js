const assert = require('assert');
const Decorator = require('../decorator.js');
const PaintCan = require('../paint_can.js');
const Room = require('../room.js');

describe('Decorator', function () {
  let decorator;
  let paintCan;
  let room;

  beforeEach(function () {
    decorator = new Decorator([]);
    paintCan = new PaintCan();
    room = new Room(20);
  });

  it('should start with an empty paint stock', function () {
    const actual = decorator.paintStock;
    assert.deepStrictEqual(actual, [])
  });
  it('should be able to add a can', function () {
    decorator.addPaintCan(paintCan);
    const actual = decorator.paintStock.length;
    assert.strictEqual(actual, 1);
  });
  it('should be able to calculate total litres of paint', function () {
    decorator.addPaintCan(paintCan);
    decorator.addPaintCan(paintCan);
    const actual = decorator.totalVolume();
    assert.strictEqual(actual, 20);
  })
  it('should be able to calculate whether can paint a room', function () {
    decorator.addPaintCan(paintCan);
    decorator.addPaintCan(paintCan);
    const actual = decorator.canPaintRoom(room);
    assert.strictEqual(actual, true);
  })
  it('should be able to paint room if paint in stock', function () {
    decorator.paintRoom(room);
    const actual = room.isPainted;
    assert.strictEqual(actual, true);
  })
});
