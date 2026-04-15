var arr1 = [1, 2, 3, 4]; // 真数组
// 类数组(伪数组)
var arr2 = {
  0: 1,
  1: 2,
  2: 3,
  3: 4,
  length: 4,
};

// 判断arr1和arr2是否是真数组

console.log(arr1 instanceof Array);
console.log(arr2 instanceof Array);

console.log(Object.getPrototypeOf(arr1) === Array.prototype);
console.log(Object.getPrototypeOf(arr2) === Array.prototype);