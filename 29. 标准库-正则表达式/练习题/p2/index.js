let content = document.querySelector('.content')

let text = content.innerHTML
let reg = /\s+.+/g

const text1 = text.replaceAll(reg, (s)=>{
    s = s.replace(/\s+/g, '')
    return `<p>${s}</p>`
})
content.innerHTML = text1