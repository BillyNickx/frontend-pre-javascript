var person1 = {
  name: 'monica',
  age: 17,
  sayHi: function () {
    // 完成该方法，打印姓名和年龄
    console.log(this.name,this.age)
  },
};

var person2 = person1

person1.sayHi();