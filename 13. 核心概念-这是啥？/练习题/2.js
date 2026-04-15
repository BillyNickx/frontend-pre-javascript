// 为所有对象添加方法print，打印对象的键值对
Object.prototype.print = function () {
    for (const objectKey in this) {
        if (this.hasOwnProperty(objectKey)) {
            console.log(objectKey, this[objectKey]);
        }
    }
}

var arr = {
    a:1,
    b:3,
    c:4,
};

arr.print()