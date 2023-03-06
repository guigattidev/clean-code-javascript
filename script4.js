// 4. Duplicação
const SPACE = " ";

function getFullName(firstName, lastName) {
  const fullName = firstName + SPACE + lastName;

  return fullName;
}

function getEmployeeFullName(firstName, lastName) {
  const fullName = firstName + SPACE + lastName;

  return fullName;
}

// Jeito errado
function getPrice(product) {
  let price;

  if (product === "Pen") {
    price = 20;
  } else if (product === "Eraser") {
    price = 30;
  } else if (product === "Pencil") {
    price = 5;
  }

  return price;
}

// Jeito certo
const products = {
  pen: 20,
  eraser: 30,
  pencil: 5,
};

function getProductPrice(product) {
  return products[product];
}
