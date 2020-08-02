const tree = {
  value: 12,
  next: {
    value: 20,
    next: {
      value: 30,
      next: {
        value: -10,
        next: null,
      },
    },
  },
};

/**
 * recursive function returns array of values of nested objects
 * @param {obj} tree
 * @param {array} res
 */
const fn = (tree, res = []) => {
  if (tree === null || tree === undefined) {
    return res;
  }
  res.push(tree.value);
  return fn(tree.next, res);
};

fn(tree); // [12, 20, 30, -10]
