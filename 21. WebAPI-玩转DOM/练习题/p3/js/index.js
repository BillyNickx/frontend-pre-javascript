/**
 * 根据协议的多选框是否选中设置注册按钮状态
 */
function setSubmitButtonStatus() {
    document.querySelector('button[type="submit"]').disabled = !document.querySelector('.policy input').checked;
}

/**
 * 根据手机号文本框中的文本，设置发送验证码按钮的状态
 */
function setSendCodeButtonStatus() {
    document.querySelector('.captcha .right').disabled = !document.querySelector('#txtPhone').value;
}

/**
 * 根据当前选中的爱好，设置已选择爱好文本
 */
function setSelectedLoves() {
    let sel = $('select')
    let choose = $('#selChoose')
    let loves = []
    for (let i = 0; i < sel.children.length; i++) {
        var option = sel.children[i]
        if (option.selected) {
            loves.push(option.innerText)
        }
    }
    choose.innerText = '已选择的爱好：' + loves.join(', ')

}

