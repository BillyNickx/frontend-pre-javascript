// 让便签可被拖动，但不能超出视口
var moveBar = document.querySelector('.move-bar')
let note = document.querySelector('.note')

moveBar.onmousedown = function (e) {
    // 鼠标按下的坐标
    var x = e.clientX
    var y = e.clientY
    let rect = moveBar.getBoundingClientRect()
    // 元素的坐标
    let ex = rect.left
    let ey = rect.top
    // 获取视口宽高、元素宽高
    let w = document.documentElement.clientWidth
    let h = document.documentElement.clientHeight
    let ew = note.offsetWidth
    let eh = note.offsetHeight
    let maxLeft = w - ew
    let maxTop = h - eh
    // 按下后,监听鼠标移动
    window.onmousemove = function (e) {
        let disx = e.clientX - x
        let disy = e.clientY - y
        let left = ex + disx
        let top = ex + disy
        if (left < 0) {
            left = 0
        }
        if (top < 0) {
            top = 0
        }
        if (left > maxLeft) {
            maxLeft = left
        }
        if (top > maxTop) {
            maxTop = top
        }
        note.style.left = left + 'px'
        note.style.top = top + 'px'
    }
    window.onmouseup = function () {
        console.log('停止')
        window.onmousemove = null
        window.onmouseup = null
    }
}
