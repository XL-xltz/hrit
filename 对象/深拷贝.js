let obj = {
  name: "小明",
  age: "19",
  number: [1, 2, 3, 4, 5],
  family: {
    name: "王",
  },
};

//  deepClone
function deepClone(obj = {}) {
  if (typeof obj != "object" || obj == null) {
    return obj;
  }

  let res = obj instanceof Array ? [] : {};

  for (let key in obj) {
    res[key] = deepClone(obj[key]);
  }
  return res;
}
const deepCopy = deepClone(obj);
deepCopy.family.name = "liu";
console.log(obj, deepCopy);
