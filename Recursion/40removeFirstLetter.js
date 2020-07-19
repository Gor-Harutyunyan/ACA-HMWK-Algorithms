/**
 * iterative function which removes the first element of an array and returns the given array
 * @param {array} array - the array you want to remove the first letter
 */
function removeFirstLetter(array) {
  if (array.length === 0) {
    return array;
  }
  function iter(array, counter = 0) {
    if (counter === array.length - 1) {
      --array.length;
      return array;
    }
    array[counter] = array[counter + 1];
    counter++;
    return iter(array, counter);
  }
  return iter(array);
}

let arr = [1, 2, 3, 4, 5];
console.log(removeFirstLetter(arr));
console.log(arr);
