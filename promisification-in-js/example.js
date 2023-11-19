/**
 ** Promisification ->  Promisification in JavaScript is the process of converting callback-based functions into Promise-based functions, enabling easier handling of asynchronous operations and improved code flow management.
 */

// Original callback-based function
function getCallbackData(id, callback) {
  setTimeout(() => {
    if (id > 0) {
      callback(null, { id: id, name: `Success callback` });
    } else {
      callback(new Error("Invalid id"));
    }
  }, 2000);
}

//! Usage
// getCallbackData(0, (err, data) => {
//   if (err) {
//     console.error(err);
//   } else {
//     console.log(data);
//   }
// });

//! Promise based Approach

function getPromiseData(id) {
  return new Promise((resolve, reject) => {
    getCallbackData(id, (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
}

//! Usage with async/await
async function printData(id) {
  try {
    const data = await getPromiseData(id);
    console.log(data);
  } catch (err) {
    console.error(err);
  }
}

// printData(2);

// ----------------------------------------------------------------

//! common pattern for Promisifying a function with a single callback
function promisifiedFunction(params) {
  return new Promise((resolve, reject) => {
    originalFunction(params, (error, result) => {
      if (error) {
        reject(error);
      } else {
        resolve(result);
      }
    });
  });
}

// ----------------------------------------------------------------
//! Handling of multiple callbacks

function originalMultipleCallbackFunc(success1, success2, error) {
  // Two successful callbacks and one failed callback
  setTimeout(() => {
    const num = Math.random();
    // 80% chance of success
    if (num > 0.2) {
      success1("Success 1 result");
      success2("Success 2 result");
    } else {
      error("Error result");
    }
  }, 1000);
}

function promisifiedFunction() {
  return new Promise((resolve, reject) => {
    let successMessages = {};
    originalMultipleCallbackFunc(
      (successMessage1) => {
        successMessages.successMessage1 = successMessage1;
        if (successMessages.successMessage2) {
          resolve(successMessages);
        }
      },
      (successMessage2) => {
        successMessages.successMessage2 = successMessage2;
        if (successMessages.successMessage1) {
          resolve(successMessages);
        }
      },
      (errorMessage) => reject({ errorMessage })
    );
  });
}

async function printMultipleCallbackExample() {
  try {
    const result = await promisifiedFunction();
    console.log({ result });
  } catch (error) {
    console.error(error);
  }
}

printMultipleCallbackExample();
