const upper_case = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lower_case = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbols = "!@#$%^&*_-+=";
let length = 16;

function createPassword(upper_case, lower_case, numbers, symbols, length) {
  let characters = upper_case + lower_case + numbers + symbols;
  let password = "";

  for (let i = 0; i < length; i++) {
    let randomIndex = Math.floor(Math.random() * characters.length);
    password += characters[randomIndex];
  }

  return password;
}

console.log(createPassword(upper_case, lower_case, numbers, symbols, length));
