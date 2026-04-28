// 根据hero.js提供的数据heros，创建合适的元素，将英雄数据显示到页面上

function createHero(hero){
    let a = document.createElement('a');
    const container = document.querySelector('.container');
    a.href =`https://pvp.qq.com/web201605/herodetail/${hero.ename}.shtml`
    a.target = '_blank';
    a.className = 'item';
    let img = document.createElement('img');
    img.src= `https://game.gtimg.cn/images/yxzj/img201606/heroimg/${hero.ename}/${hero.ename}.jpg`
    img.alt = hero.skin_name
    let span = document.createElement('span');
    span.innerText = hero.cname;
    a.appendChild(img);
    a.appendChild(span);
    container.appendChild(a)
}

for (let i = 0; i < heros.length; i++) {
    createHero(heros[i]);
}