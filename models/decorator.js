const Decorator = function (paintStock = []) {
  this.paintStock = paintStock;
}

Decorator.prototype.addPaintCan = function (paintCan) {
  this.paintStock.push(paintCan);
}

Decorator.prototype.totalVolume = function () {
  total = 0
  for (let can of this.paintStock) {
    total += can.volume
  }
  return total;
}

Decorator.prototype.canPaintRoom = function (room) {
  totalVolume = this.totalVolume();
  if (totalVolume === room.area) {
    return true
  } else {
    return false
  }
}

Decorator.prototype.paintRoom = function (room) {
  if (this.canPaintRoom) {
    room.paintMe();
  } else {
    console.log("Get more paint ya bass.")
  }

}

module.exports = Decorator;
