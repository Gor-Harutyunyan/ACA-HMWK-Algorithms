/**
 * called by mergesort function compares the elements and returns sorted array
 * @param {array} leftArr
 * @param {array} rightArr
 */
function mergeParts(leftArr, rightArr) {
  let sorted = [];
  while (leftArr.length && rightArr.length) {
    if (leftArr[0] <= rightArr[0]) {
      sorted.push(leftArr.shift());
    } else {
      sorted.push(rightArr.shift());
    }
  }
  while (leftArr.length) {
    sorted.push(leftArr.shift());
  }
  while (rightArr.length) {
    sorted.push(rightArr.shift());
  }
  return sorted;
}

/**
 * sorts an array using mergeSort algorithm
 * divide array in two pieces untill it has only one element
 * calls another function to compare the elements and return sorted array
 * @param {array} arr - the array you want to sort
 */
function mergesort(arr) {
  if (arr.length < 2) {
    return arr;
  } else {
    let middle = Math.floor(arr.length / 2);
    let leftArr = arr.slice(0, middle);
    let rightArr = arr.slice(middle);
    return mergeParts(mergesort(leftArr), mergesort(rightArr));
  }
}

let arr = [5, 10, 2, 3, 8, 950, 15, 9, 38];
console.log(mergesort(arr));
