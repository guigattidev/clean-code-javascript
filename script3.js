// 3. Comentários

// Jeito errado
function sumNumbers(a, b) {
  return a + b;
}

// Jeito certo
/*
 * Soma dois números e retorna o resultado
 * @param {Number} a - O primeiro número
 * @param {Number} b - O segundo número
 * @returns {Number} - O resultado da soma
 */
function sumNumbers2(a, b) {
  return a + b;
}

// Jeito errado
const result1 = x < 0 ? 0 : x > 100 ? 100 : x;

// Jeito certo
const result2 = x < 0 ? 0 : x > 100 ? 100 : x;
