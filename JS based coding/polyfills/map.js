const radiusArr = [2, 4, 5, 6];

const area = (radius) => Math.PI * radius * radius;
console.log(radiusArr.map(area));

Array.prototype.customMap = function (cb) {
  const output = [];
  for (let i = 0; i < this.length; i++) {
    output.push(cb(this[i]));
  }
  return output;
};

console.log(radiusArr.customMap(area));
