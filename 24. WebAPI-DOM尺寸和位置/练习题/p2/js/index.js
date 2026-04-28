// 让小球向右下运动，遇到边缘后反弹

// 改变球的left top
let ball = document.querySelector('.ball')
let disX = 5, disY = 5
// 获取视口宽高
let w = document.documentElement.clientWidth
let h = document.documentElement.clientHeight
let ew = ball.offsetWidth
let eh = ball.offsetWidth

setInterval(function () {
    function setColor() {
        const r = Math.random() * 200
        const g = Math.random() * 200
        const b = Math.random() * 200
        ball.style.background = `rgb(${r}, ${g}, ${b})`
    }

    let reat = ball.getBoundingClientRect()
    let x = reat.left
    let y = reat.top
    let left = x + disX
    let top = y + disY
    if (left < 0) {
        left = 0
        disX = -disX
        setColor()
    }


    if (left > w - ew) {
        left = w - ew
        disX = -disX
        setColor()
    }
    if (top < 0) {
        top = 0
        disY = -disY
        setColor()
    }
    if (top > h - eh) {
        top = h - eh
        disY = -disY
        setColor()
    }

    ball.style.left = left + 'px'
    ball.style.top = top + 'px'
}, 20)
