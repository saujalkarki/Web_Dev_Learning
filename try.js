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
