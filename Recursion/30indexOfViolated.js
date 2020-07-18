function indxeOfViolated(array) {
  function iter(restArray) {
    let [first, ...rest] = restArray;
    if (first > rest[0]) {
      return array.lastIndexOf(rest[0]);
    }
    if (rest.length === 1) {
      return -1;
    }
    return iter(rest);
  }
  return iter(array);
}

indxeOfViolated([-9, -4, -4, 3, 4, 6, 5]);
