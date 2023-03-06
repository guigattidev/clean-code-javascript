// 1. Nomendo variáveis e funções

// Jeito errado
const d = new Date();
const x = 5;
const y = 10;

// Jeito certo
const currentDate = new Date();
const speed = 5;
const numOfTires = 4;

// Jeito errado
function fn(a, b) {
  return a * b;
}

// Jeito certo
function multiply(num1, num2) {
  return num1 * num2;
}

// Jeito errado
const p = {
  n: "John",
  a: 28,
};

// Jeito certo
const person = {
  name: "João",
  age: 28,
};
