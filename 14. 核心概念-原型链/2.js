function Person() {}

const p = new Person()
const obj = {}
const arr = []

// 实例 -> 原型对象
console.log(p.__proto__ === Person.prototype) // true
console.log(arr.__proto__ === Array.prototype) // true
console.log(obj.__proto__ === Object.prototype) // true

// 构造函数本身也是对象
console.log(Person.__proto__ === Function.prototype) // true
console.log(Array.__proto__ === Function.prototype) // true
console.log(Object.__proto__ === Function.prototype) // true
console.log(Function.__proto__ === Function.prototype) // true

// prototype 继续向上
console.log(Person.prototype.__proto__ === Object.prototype) // true
console.log(Array.prototype.__proto__ === Object.prototype) // true
console.log(Array.prototype.__proto__ === Function.prototype)
console.log(Function.prototype.__proto__ === Object.prototype) // true
console.log(Object.prototype.__proto__ === null) // true
