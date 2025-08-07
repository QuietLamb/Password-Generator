const passwordBox = document.getElementById("password");

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const number = Math.floor(Math.random() * 10);
const symbol = "@#$%^&*()_+~|}{[]<>/-=";

const length = 12;
const allChar = upperCase + lowerCase + symbol;

function createPassword() {
  let password = "";
  password += upperCase[Math.floor(Math.random() * upperCase.length)];
  password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
  password += number;
  password += symbol[Math.floor(Math.random() * symbol.length)];

  while (password.length != length) {
    password += allChar[Math.floor(Math.random() * allChar.length)];
  }
  passwordBox.value = password;
}

function copyPassword() {
  passwordBox.select(); /* select text content of input box reference by passwordBox */
  document.execCommand(
    "copy"
  ); /* code to trigger native browser commands like "copy", "cut", or "paste". */
}
