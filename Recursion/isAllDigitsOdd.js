/**
 * checks if all the digits of a number are odd
 * @param {number} num - the number we want to check
 */
function isAllDigitsOdd(num) {
  if (num < 10) {
    return num % 2 !== 0;
  }
  let lastDigit = num % 10;
  if (lastDigit % 2 !== 0) {
    return isAllDigitsOdd((num - lastDigit) / 10);
  } else {
    return false;
  }
}

isAllDigitsOdd(5);
