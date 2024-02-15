const p1 = new Promise((resolve, reject) => {
  setTimeout(() => reject("p1 fail"), 3000);
});
const p2 = new Promise((resolve, reject) => {
  setTimeout(() => reject("p2 fail"), 1000);
});
const p3 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("p3 success"), 2000);
});

// It will return the first fulfilled promise or if all promises are rejected then it will return aggregated error
Promise.any([p1, p2, p3])
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.error(err);
  });
