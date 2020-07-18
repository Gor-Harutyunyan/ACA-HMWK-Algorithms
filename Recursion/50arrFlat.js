function arrFlat(array) {
  return array.reduce((res, item) => {
    if (Array.isArray(item)) {
      return res.concat(arrFlat(item));
    }
    return res.concat(item);
  }, []);
}

arrFlat([1, [3, 4, [1, [1, 2, 3], 2]], 10]);
