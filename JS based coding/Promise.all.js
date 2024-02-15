const p1 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("p1 success"), 3000);
});
const p2 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("p2 success"), 1000);
});
const p3 = new Promise((resolve, reject) => {
  setTimeout(() => reject("p3 fail"), 2000);
});

// All or none -> Here is this case this will get rejected after 2 seconds
Promise.all([p1, p2, p3])
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.error(err);
  });
