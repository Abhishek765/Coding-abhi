function add(x) {
  return function (y) {
    if (y) return add(x + y);
    return x;
  };
}

console.log(add(2)(3)(4)());
