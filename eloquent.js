// Exercises

// Minimum
function min(x, y) {
  if (x < y)
    return x;
  else
    return y;
}

console.log(min(0, 10));
console.log(min(0, -10));

// Recursion
function isEven(a) {
  if (a == 0)
    return true;
  else if (a != 0)
    return false;
}

console.log(isEven(50));
console.log(isEven(75));
console.log(isEven(-1));