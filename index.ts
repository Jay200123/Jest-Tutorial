const sum = (a: number, b: number) => {
  let total: number = a + b;
  return total;
};

const subtract = (a: number, b: number) => {
  let total: number = a - b;
  return total;
};

const multiply = (a: number, b: number) => {
  let total: number = a * b;
  return total;
};

const calculateRectangleArea = (height: number, width: number) => {
  let area: number = multiply(height, width);
  return area;
};

const users = [
  {
    name: "John Doe",
    age: 23,
  },
  {
    name: "James Doe",
    age: 25,
  },
  {
    name: "Jane Doe",
    age: 22,
  },
];

const user = users.pop();
console.log(user);

const fetchData = (callback: any) => {
  setTimeout(() => {
    callback("peanut butter");
  }, 1000);
};

export {
  sum,
  subtract,
  multiply,
  calculateRectangleArea,
  fetchData,
};
