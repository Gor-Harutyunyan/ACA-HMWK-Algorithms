class Dictionary {
  constructor(obj) {
    for (let [key, value] of Object.entries(obj)) {
      this[key] = new Set([value]);
    }
  }

  get(key) {
    return String(Array.from(this[key]));
  }

  add(key, value) {
    if (Object.keys(this).includes(key)) {
      this[key].add(value);
      return this;
    }
    this[key] = new Set([value]);
    return this;
  }

  getByKey(key) {
    console.log(this[key]);
    return this;
  }

  getCountByKey(key) {
    return this[key].size;
  }

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

  keys() {
    let keys = Object.keys(this);
    return String(keys);
  }

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
