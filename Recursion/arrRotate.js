/**
 * rotates an array N places to the left
 * @param {array} arr - the array you want to rotate
 * @param {number} num - how many places to left you wnat ot rotate
 */
function arrRotate(arr, num) {
  if (Number.isNaN(Number(num)) || num === undefined) {
    return arr;
  }
  function iter(restArr, counter = 0) {
    if (counter === arr.length - num) {
      return restArr;
    }
    let last = restArr[restArr.length - 1];
    restArr.unshift(last);
    restArr.pop();
    counter++;
    return iter(restArr, counter);
  }
  return iter(arr);
}

arrRotate(["a", "b", "c", "d", "e", "f", "g", "h"], 2);
