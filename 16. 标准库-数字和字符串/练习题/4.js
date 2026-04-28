// 将下面的rgb格式转换成为HEX格式
var rgb = 'rgb(253, 183, 25)';

const rgpList = rgb.replace('rgb(', '').replace(')','').split(',');
let result = '#';
for (let i = 0; i < rgpList.length; i++) {
    result += parseInt(rgpList[i]).toString(16);
}
console.log(result);