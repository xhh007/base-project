// 完成表单验证
function $(a) {
    return document.querySelector(a)
}
var btn = $('.submit')
btn.addEventListener('click', function(e) {
    if (!$('.a input').value.trim()) {
        $('.a').classList.add('err')
        e.preventDefault()
        return
    } else {
        $('.a').classList.remove('err')
    }
    if (!$('.p input').value.trim()) {
        $('.p').classList.add('err')
        e.preventDefault()
        return
    } else {
        $('.p').classList.remove('err')
    }
})