const arr = [1, 2, 4, 5];

Array.prototype.myReduce = function (callback, initialValue) {
  const array = this;
  //adding initial value to accumulator
  let accumulator = initialValue;

  for (let i = 0; i < array.length; i++) {
    if (accumulator) {
      // if initial value exists
      accumulator = callback.call(undefined, accumulator, array[i], i, array);
    } else {
      accumulator = array[i];
    }
  }

  return accumulator;
};

const sum = arr.reduce((acc, curr) => acc + curr, 0);
const sum2 = arr.myReduce((acc, curr) => acc + curr, 2);

console.log({ sum, sum2 });
// const maxElement = Math.max(...arr);
const maxElement = arr.reduce((acc, curr) => {
  return Math.max(acc, curr);
});

const users = [
  {
    firstName: "John",
    lastName: "Smith",
    age: 34,
  },
  {
    firstName: "John2",
    lastName: "Smith",
    age: 12,
  },
  {
    firstName: "John3",
    lastName: "Smith",
    age: 34,
  },
  {
    firstName: "John4",
    lastName: "Smith",
    age: 24,
  },
];

const ageCountMap = users.reduce((acc, curr) => {
  acc[curr.age] = acc[curr.age] ? acc[curr.age] + 1 : 1;
  return acc;
}, {});

// Return a list of users with firstName whole age is < 30

// const filteredUsers = users
//   .filter((user) => user.age < 30)
//   .map((user) => user.firstName);

// const filteredUsers = users.reduce((acc, curr) => {
//   if (curr.age < 30) {
//     return [...acc, curr.firstName];
//   }
//   return acc;
// }, []);

// console.log(filteredUsers);
