const income = [0, 10000, 30000, 100000];
const rate = [0, 0.1, 0.25, 0.4];

function tax(num) {
  if (num > income[3]) {
    return Math.floor(tax(income[3]) + (num - income[3]) * rate[3]);
  } else if (num > income[2]) {
    return Math.floor(tax(income[2]) + (num - income[2]) * rate[2]);
  } else if (num > income[1]) {
    return Math.floor(tax(income[1]) + (num - income[1]) * rate[1]);
  } else if (num <= income[1] && num >= income[0]) {
    return Math.floor(num * rate[0]);
  } else {
    return "error";
  }
}

userAmount = prompt("Please enter your income");

console.log(tax(userAmount));
document.getElementById("result").innerHTML = tax(userAmount);
