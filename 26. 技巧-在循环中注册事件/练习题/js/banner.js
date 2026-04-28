(function () {
    // 完成横幅区的图片切换
    // 横幅区数据
    var datas = [{
        img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/15c05b32cf948b594477dfc3eb69fb69.jpg?w=2452&h=920',
        link: 'https://www.mi.com/mi11le-5g-ne',
    }, {
        img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/a532e33470d046b3f044d5ea49fc5e9e.png?thumb=1&w=2452&h=920&f=webp&q=90',
        link: 'https://www.mi.com/xiaomipad5',
    }, {
        img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/918820682e4a490221cfd92b24c14b86.jpg?thumb=1&w=2452&h=920&f=webp&q=90',
        link: 'https://www.mi.com/a/h/22033.html?sign=b60a6ca9167bce2d1ed8ee319cf83c75',
    }, {
        img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/af7be8f65065f405f57f46a02731f78d.jpg?thumb=1&w=2452&h=920&f=webp&q=90',
        link: 'https://www.mi.com/a/h/22812.html?sign=aab397a7ecf2ae4c1765e9d11fdccca6',
    },];

    /**
     * 1.设置超链接地址和图片路径 变化
     * 2.动态生产span 一次
     * 3. 控制span元素样式 变化
     */
    const banner = document.querySelector('.banner');
    const bannerDots = document.querySelector('.banner-dots');
    const bannerCover = document.querySelector('.banner-cover');
    const bannerImg = bannerCover.querySelector('img')
    const pointerLeft = document.querySelector('.banner-pointer-left');
    const pointerRight = document.querySelector('.banner-pointer-right');

    /**
     * 初始化
     */
    function init() {
        for (let i = 0; i < datas.length; i++) {
            let span = document.createElement("span");
            span.className = 'fl'
            span.onclick = function () {
                currentIndex = i
                change(i)
            }
            bannerDots.appendChild(span);
        }
        change(0)
    }

    init();

    /**
     * 将指定下标的数据显示到页面
     * @param index 设置的数据索引
     */
    function change(index) {
        let data = datas[index];
        bannerCover.href = data.link
        bannerImg.src = data.img

        // 获取选中 清除
        let sel = bannerDots.querySelector('.banner-dots-selected')
        if (sel) {
            sel.className = 'fl'
        }
        bannerDots.children[index].className = 'banner-dots-selected fl'
    }

    let currentIndex = 0;

    function toPrev() {
        currentIndex--
        if (currentIndex < 0) {
            currentIndex = datas.length - 1
        }
        change(currentIndex)
    }

    function toNext() {
        currentIndex++
        if (currentIndex > datas.length - 1) {
            currentIndex = 0
        }
        change(currentIndex)
    }

    pointerLeft.onclick = toPrev
    pointerRight.onclick = toNext

    // 自动循环
    let timerId = null
    function start(){
        if (timerId) {
            return;
        }
        timerId = setInterval(toNext, 1000)
    }

    function stop(){
        clearInterval(timerId);
        timerId = null;
    }
    start()
    banner.onmouseenter = stop
    banner.onmouseleave = start
})();

