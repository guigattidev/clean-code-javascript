// 5. Estruturas de controle

// Jeito errado
// true ou false ! => false ou true
if (!isNotValid) {
}

// Jeito limpo
if (isValid) {
}

// Jeito errado
let message1;

if (isSuccess) {
  message1 = "Win";
} else {
  message1 = "Lose";
}

// Jeito certo
const message2 = isSuccess ? "Win" : "Lose";
