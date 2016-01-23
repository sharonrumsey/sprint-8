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
  if (a === 0)
    return true;
  else if (a == 1)
    return false;
  else 
    return isEven (a-2);
  }

console.log(isEven(50));
console.log(isEven(75));
console.log(isEven(-1));

// -1 blew the stack

//Bean Counting

function countBs(str) {
  var counter = 0;
  for (var i = str.length; i--; ) {
    if (str.charAt(i) == "B")
      counter++;
  } 
  return counter;
}
console.log(countBs("BBC"));

function countChar(str, target) {
  var counter = 0;
  for (var i = 0; i < str.length; i++) {
    if (str.charAt(i) == target)
      counter++;
  } 
  return counter;
}
console.log(countChar("kakkerlak", "k"));

function countBs(str) {
  return countChar(str, "B");
}
console.log(countBs("BBC"));