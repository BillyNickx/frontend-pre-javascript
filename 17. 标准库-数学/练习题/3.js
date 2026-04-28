/**
 * 从一个数组中随机取出一项
 * @param {any[]} arr 数组
 * @return {any} 数组的随机一项
 */
function getRandomItem(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

console.log(getRandomItem([1, 2, 3, 4, 5]));