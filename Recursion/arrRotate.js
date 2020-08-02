/**
 * rotates an array N places to the left
 * @param {array} arr - the array you want to rotate
 * @param {number} num - how many places to left you wnat ot rotate
 */
function arrRotate(arr, num) {
  let counter = 0;
  if (Number.isNaN(Number(num)) || num === undefined || num > arr.length) {
    return arr;
  }
  function iter(restArr) {
    if (counter === arr.length - num) {
      return restArr;
    }
    let last = restArr[restArr.length - 1];
    restArr.unshift(last);
    restArr.pop();
    counter++;
    return iter(restArr);
  }
  return iter(arr);
}

arrRotate(["a", "b", "c", "d", "e", "f", "g", "h"], 2);
