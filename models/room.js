const Room = function (area = 0, isPainted = false) {
  this.area = area;
  this.isPainted = isPainted;
}

Room.prototype.paintMe = function () {
  this.isPainted = true;
};

module.exports = Room;
