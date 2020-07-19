/**
 * iterative function which returns minimum positive element in the array
 * @param {array} array - the array you want to check
 */
function minPosElem(array) {
  function iter(array, res = Infinity) {
    let [first, ...rest] = array;
    if (first >= 0) {
      if (first <= res) {
        res = first;
      }
    }
    if (array.length === 1) {
      if (res === Infinity) {
        return -1;
      }
      return rest[0] > res && rest[0] >= 0 ? rest[0] : res;
    }
    return iter(rest, res);
  }
  return iter(array);
}

minPosElem([-56, -9, -87, -1, -5, 0]);
