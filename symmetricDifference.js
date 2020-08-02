let setA = new Set([1, 2, 3, 4]);
let setC = new Set([3, 4, 5, 6]);

/**
 * merge two sets
 * @param {set} setA
 * @param {set} setB
 */
function union(setA, setB) {
  let unionSet = new Set(setA);
  for (let item of setB.values()) {
    unionSet.add(item);
  }
  return unionSet;
}
/**
 * shows symmetric difference of two sets
 * @param {set} set1
 * @param {set} set2
 */
function symmetricDifference(set1, set2) {
  let res = union(set1, set2);
  for (let item of res.values()) {
    if (set1.has(item) && set2.has(item)) {
      res.delete(item);
    }
  }
  return res;
}

symmetricDifference(setA, setC); // => Set [1, 2, 5, 6]
