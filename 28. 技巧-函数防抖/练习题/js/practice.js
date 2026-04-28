// 当窗口尺寸变化后，调用layout函数
function debounce(fn, duration) {
    var timerId;
    return function () {
        clearTimeout(timerId);
        // 将该函数的this传递到fn
        var curThis = this;
        // 将该函数的参数全部传递给fn
        function slice() {
            this;
        }
        var args = Array.prototype.slice.call(arguments, 0);

        timerId = setTimeout(function () {
            fn.apply(curThis, args);
        }, duration);
    };
}

window.addEventListener('resize', debounce(function () {
    console.log('运行了layout')
    layout()
}, 500));
