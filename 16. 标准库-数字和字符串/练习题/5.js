// name转换成驼峰命名
var name = 'has own property'; // --> hasOwnProperty

let names = name.split(' ');
let result = '';
for (let i = 0; i < names.length; i++) {

    if(i===0){
        result += names[i];
    }else {
        result += names[i][0].toLocaleUpperCase() +names[i].substring(1);
    }
}
console.log(result);