let setA = new Set([1, 2, 3, 4]);
let setB = new Set([2, 3]);
let setC = new Set([3, 4, 5, 6]);

/**
 * shows the difference of first set to second
 * @param {set} set1 - first set
 * @param {set} set2 - second set
 */
function difference(set1, set2) {
  let res = new Set();
  for (let item of set1.values()) {
    if (!set2.has(item)) {
      res.add(item);
    }
  }
  return res;
}

difference(setA, setC); // => Set [1, 2]
