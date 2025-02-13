const arr = [1];
const [arra, arrb = 2] = arr;
console.log(arra, arrb);
console.log(arr);

const person = { name: "Alice", address: { city: "Wonderland", zip: 12345 } };
const {
  name,
  address,
  address: { city: town, zip },
} = person;
console.log(name, address, town, zip);

const arraa = [1, 2, 3, 4];
const [a, ...rest] = arraa;
console.log(a);
console.log(rest);

function sum(...numbers) {
  return numbers;
}

console.log(sum(1, 2, 3, 4));

// function taskOne() {
//   console.log("Task 1: Starting sync");
//   for (let i = 0; i < 10000000000; i++) {}
//   console.log("Task 1: Done sync");
// }

// function taskTwo() {
//   console.log("Task 2: Starting sync");
//   console.log("Task 2: Done sync");
// }

// console.log("Start sync");
// taskOne();
// taskTwo();
// console.log("End sync");

// function taskOne() {
//   console.log("Task 1: Starting async");
//   setTimeout(() => {
//     console.log("Task 1: Done async");
//   }, 2000);
// }

// function taskTwo() {
//   console.log("Task 2: Starting async");
//   console.log("Task 2: Done async");
// }

// console.log("Start async");
// taskOne();
// taskTwo();
// console.log("End async");

// function taskOne() {
//   return new Promise((resolve) => {
//     console.log("Task 1: Starting");
//     let count = 0;
//     for (let i = 0; i < 1e9; i++) {
//       count++;
//     }
//     console.log("Task 1: Done");
//     resolve();
//   });
// }

// function taskTwo() {
//   console.log("Task 2: Starting");
//   console.log("Task 2: Done");
// }

// console.log("Start");

// taskOne().then(() => {
//   taskTwo();
//   console.log("End");
// });

// promises
// const myPromise = new Promise((resolve, reject) => {
//   let success = true;

//   if (success) {
//     resolve("Task completed successfully.");
//   } else {
//     reject("Task thrown error.");
//   }
// });

// myPromise
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// Nested callbacks (Callback Hell)
// function step1(callback) {
//   setTimeout(() => {
//     console.log("Step 1 completed");
//     callback();
//   }, 1000);
// }

// function step2(callback) {
//   setTimeout(() => {
//     console.log("Step 2 completed");
//     callback();
//   }, 1000);
// }

// function step3() {
//   setTimeout(() => {
//     console.log("Step 3 completed");
//   }, 1000);
// }

// step1(() => {
//   step2(() => {
//     step3();
//   });
// });

// // .then
// function step1() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       console.log("Step 1 completed");
//       resolve();
//     }, 1000);
//   });
// }

// function step2() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       console.log("Step 2 completed");
//       resolve();
//     }, 1000);
//   });
// }

// function step3() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       console.log("Step 3 completed");
//       resolve();
//     }, 1000);
//   });
// }

// step1()
//   .then(step2)
//   .then(step3)
//   .catch((error) => {
//     console.log("Error:", error);
//   });

// // async await
// async function executeSteps() {
//   try {
//     step1();
//     step2();
//     step3();
//   } catch (error) {
//     console.log("Error:", error);
//   }
// }

// executeSteps();

//  Sunday classes practice examples
// example 1
const promise = new Promise((resolve, reject) => {
  let success = true;
  if (success) {
    resolve("Operation successful!");
  } else {
    reject("Operation failed!");
  }
});

console.log(promise);

// promise
//   .then((result) => console.log(result))
//   .catch((error) => console.log(error))
//   .finally(() => console.log("finally completed"));

// example 2
const fetchData = new Promise((resolve, reject) => {
  setTimeout(() => reject("Data fetched!"), 3000);
});

console.log(fetchData);

fetchData
  .then((result) => {
    console.log(result);
    return "Processing data...";
  })
  .then((processed) => console.log(processed))
  .catch((error) => console.log(error));

// // example 3
const handlePromise = async () => {
  try {
    const result = await fetchData;
    console.log(result);
    console.log("success");
  } catch (error) {
    console.log(error);
    console.log("error");
  } finally {
    console.log("something happened.");
  }
};

handlePromise();

console.log("try this2");

const orA = [1, 2, 3];

orA.map((ar) => console.log(ar + 1));
console.log(orA);

orA.forEach((ar) => console.log(ar + 1));
console.log(orA);

const arr0 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

console.log(arr0.slice(1, 5));
console.log(arr0.splice(1, 5));
console.log(arr0);
