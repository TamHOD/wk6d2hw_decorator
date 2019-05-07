const PaintCan = function (volume = 10, isEmpty = false) {
  this.volume = volume;
  this.isEmpty = isEmpty;
}

PaintCan.prototype.emptyMe = function () {
  this.isEmpty = true;
}

module.exports = PaintCan;
