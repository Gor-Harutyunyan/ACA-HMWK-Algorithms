/** Class representing a dictionary*/
class Dictionary {
  /**
   * create a dictionary with keys and values from parametr object
   * @param {obj} obj - the object which entries are used
   */
  constructor(obj) {
    for (let [key, value] of Object.entries(obj)) {
      this[key] = new Set([value]);
    }
  }

  /**
   * get the values by key
   * @param {string} key
   */
  get(key) {
    return String(Array.from(this[key]));
  }

  /**
   * add new value by the key, if key dont exist create new one, else add value
   * @param {string} key
   * @param {} value
   */
  add(key, value) {
    if (Object.keys(this).includes(key)) {
      this[key].add(value);
      return this;
    }
    this[key] = new Set([value]);
    return this;
  }

  /**
   * get values by key
   * @param {string} key
   */
  getByKey(key) {
    console.log(this[key]);
    return this;
  }

  /**
   * get the count of the values by key
   * @param {string} key
   */
  getCountByKey(key) {
    return this[key].size;
  }

  /**
   * if param is key, remove all values of the key,
   * if param is value, delete that value
   * @param {} param
   */
  remove(param) {
    for (let [key, value] of Object.entries(this)) {
      if (key === param) {
        this[key].clear();
      }
      if (value.has(param)) {
        value.delete(param);
      }
    }
    return this;
  }

  /**
   * returns all keys
   */
  keys() {
    let keys = Object.keys(this);
    return String(keys);
  }

  /**
   * returns all values
   */
  values() {
    let res = [];
    for (let item of Object.values(this)) {
      res.push(...Array.from(item));
    }
    return String(res);
  }
}

const dict = new Dictionary({ key: "value", key1: "value1" });

dict.get("key1"); // 'value'

dict.add("num", 10);
dict.add("negNum", -10);
dict.add("num", 200);

dict.getByKey("num"); // [ 10, 200 ]

dict.getByKey("num").remove(10);

dict.getByKey("num"); // [200]

dict.getCountByKey("num"); // 2
//dict.getCountByKey('negNum'); // 1

dict.remove("negNum");

dict.getCountByKey("negNum"); // 0

dict.keys(); // 'negNum', 'num'
dict.values(); // 10, -10, 200
