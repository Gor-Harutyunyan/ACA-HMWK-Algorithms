/**
 * recursive function which calculates the sum of numbers digits until the sum is one digit number
 * @param {number} num - the number you want to sum digits
 */
function sumOfDigits(num) {
  function iter(num, sum = 0) {
    let lastDigit = num % 10;
    sum += lastDigit;
    num = Math.floor((num - lastDigit) / 10);
    if (!num) {
      if (sum < 10) {
        return sum;
      }
      return iter(sum);
    }
    return iter(num, sum);
  }
  return iter(num);
}

sumOfDigits(45156);
