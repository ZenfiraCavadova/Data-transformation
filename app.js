//? const numbers = [1, 2, 3, 4, 5];
//? array-i iki qatı olan array yaradın — c // [2, 4, 6, 8, 10]

const numbers = [1, 2, 3, 4, 5];
const twicednumbers = numbers.map((num) => num * 2);
console.log(twicednumbers);

//?const numbers = [1, 2, 3, 4, 5];
//?array-in cüt ədədərdən ibarət arrayı yaradın —  // [2, 4]

const numbers2 = [1, 2, 3, 4, 5];
const evenNumbers = numbers2.filter((nums) => nums % 2 == 0);
console.log(evenNumbers);

//?const users = [
//? { id: 1, name: 'Alice', age: 28 },
//?  { id: 2, name: 'Bob', age: 32 },
//?  { id: 3, name: 'Charlie', age: 25 },
//?  { id: 4, name: 'David', age: 40 },
//?];
//? arrayın-dən yaşı 30-da yuxarı olanların adlarından ibarət array yaradın — console.log(namesOver30); // ['Bob', 'David']

const users = [
  { id: 1, name: "Alice", age: 28 },
  { id: 2, name: "Bob", age: 32 },
  { id: 3, name: "Charlie", age: 25 },
  { id: 4, name: "David", age: 40 },
];

console.log(users.filter((user) => user.age > 30).map((user) => user.name));

//? const defaultSettings = { theme: 'light', fontSize: 16 };
//? const userSettings = { fontSize: 18, showSidebar: true };
//? mergedSettings  iki obyektin dəyərlərini birəşdirin bir obyekt yaradın

const defaultSettings = { theme: "light", fontSize: 16 };
const userSettings = { fontSize: 18, showSidebar: true };
//const mergedSettings = { ...defaultSettings, ...userSettings };
const mergedSettings = Object.assign({}, defaultSettings, userSettings);
console.log(mergedSettings);

//?const numbers = [1, 2, 3, 4, 5, 6]; arrayınin cüt ədədlərinin iki qatını cəmini tap
//?console.log(result); // 24 (2*2 + 4*2 + 6*2)

const numbers3 = [1, 2, 3, 4, 5, 6];
const SumOfevennums = numbers3
  .filter((num) => num % 2 == 0)
  .map((num) => num * 2)
  .reduce((acc, curVal) => acc + curVal);
console.log(SumOfevennums);

//?const person = {
//?  name: 'Alice',
//?   address: {
//?     city: 'New York',
//?     zip: '10001',
//?   },
//? };
//? obyektinin
//? console.log(name); // 'Alice'
//? console.log(city); // 'New York'
//? console.log(zip); // '10001'  dəyərlərinin ayrı ayrı dəyişən kimi yaz

const person = {
  firstName: "Alice",
  address: {
    city: "New York",
    zip: "10001",
  },
};

const {
  firstName,
  address: { city, zip },
} = person;

console.log(firstName);
console.log(city);
console.log(zip);
