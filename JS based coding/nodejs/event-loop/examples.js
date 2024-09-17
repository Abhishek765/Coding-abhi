// process.nextTick(() => {
//   console.log("this is process.nextTick 1");
// });
// process.nextTick(() => {
//   console.log("this is process.nextTick 2");
//   Promise.resolve().then(() =>
//     console.log("this is inner promise.resolve in process.nextTick 2")
//   );
// });
// process.nextTick(() => {
//   console.log("this is process.nextTick 3");
// });

// Promise.resolve().then(() => {
//   console.log("this is Promise.resolve 1");
// });
// Promise.resolve().then(() => {
//   console.log("this is Promise.resolve 2");
//   process.nextTick(() =>
//     console.log("this is inner process.nextTick in promise.resolve 2")
//   );
// });
// Promise.resolve().then(() => {
//   console.log("this is Promise.resolve 3");
// });

setImmediate(() => console.log("this is setImmediate 1"));
setImmediate(() => {
  console.log("this is setImmediate 2");
  process.nextTick(() =>
    console.log("this is process.nextTick in setImmediate 2")
  );
  Promise.resolve().then(() =>
    console.log("this is Promise.resolve in setImmediate 2")
  );
});
setImmediate(() => console.log("this is setImmediate 3"));
