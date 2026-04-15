// 创建一个没有隐式原型的用户对象，随意添加一些属性
var user = Object.create(null)
user.name = '123'
console.log(user);

var user2 = {
    firstName: 'John',
    lastName: 'Doe',
}
Object.setPrototypeOf(user2,null)
console.log(user2)