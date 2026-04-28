// 每隔一段时间，切换英雄的图片，让英雄动起来
var img = document.querySelector('img');
var curindex = 1
setInterval(() => {
    curindex = curindex % 4 + 1
    img.src = `./img/${curindex}.png`
}, 100)

// 每隔一段时间，改变英雄的位置，让英雄向右移动
var x = 0
var innerWidth = window.innerWidth
setInterval(() => {
    x += 10
    if (innerWidth < x) {
        x = 0
    }
    img.style.left = x + 'px'
}, 100)