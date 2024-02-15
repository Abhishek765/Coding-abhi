const radiusArr = [2, 4, 5, 6, 3, 15];

const checkEven = (num) => num % 2 === 0;
const checkOdd = (num) => num % 2 !== 0;

console.log("using inbuilt filter");
console.log(radiusArr.filter(checkEven));

Array.prototype.customFilter = function (cb) {
  const output = [];
  for (let i = 0; i < this.length; i++) {
    if (cb(this[i])) {
      output.push(this[i]);
    }
  }
  return output;
};

console.log("using custom filter");
console.log(radiusArr.customFilter(checkEven));
