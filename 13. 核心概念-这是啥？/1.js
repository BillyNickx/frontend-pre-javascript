function m(a, b) {
  console.log(this, a, b);
}

var arr = [1,2,3];
m.call(arr, 1, 2); // 调用m函数，让它里面的this指向arr
m.apply(arr, [1, 2]);

