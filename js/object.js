const customObject = {
  toString() {
    return "custom value";
  },
};

console.log(String(customObject));
console.log(customObject.toString());
console.log(String("hoge"));
