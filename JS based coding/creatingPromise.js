const cart = [
  {
    itemId: 1,
    name: "Pants",
  },
];

const cartPromise = createCart(cart);

cartPromise
  .then((orderId) => console.log(orderId))
  .catch((err) => console.error(err.message));

function createCart(cart) {
  return new Promise((resolve, reject) => {
    if (!validateCart(cart)) {
      reject(new Error(`Card is not valid`));
      return;
    }

    const orderId = "112323"; // any DB call
    if (orderId) {
      setTimeout(() => {
        resolve(orderId);
      }, 5000);
    }
  });
}

function validateCart(cart) {
  return true;
}
