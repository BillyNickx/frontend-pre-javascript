/* 
邓哥，81岁，爱好香菜、秋葵、遛鸟
成哥，30岁，爱好扯淡、找邓嫂
monica，17岁，爱好奶茶、唱歌

用字面量描述上面的信息

思考：
1. 如何得到平均年龄
2. 如何得到所有人所有爱好的总数
*/

let list = [
    {name: '邓哥', age: 81, loves: ['香菜', '秋葵', '遛鸟']},
    {name: '成哥', age: 31, loves: ['扯淡', '找邓嫂']},
    {name: 'monica', age: 17, loves: ['奶茶', '唱歌']}
]
let av = 0, loveNum = 0, sum = 0
for (let i = 0; i < list.length; i++) {
    sum = sum + list[i].age
    loveNum = loveNum + list[i].loves.length
}
av = sum / list.length

console.log(av, loveNum)