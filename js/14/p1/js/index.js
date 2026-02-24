// 完成表单验证
function $(a) {
    return document.querySelector(a)
}
var btn = $('.submit')
var account  = $('.a input')
var password = $('.p input')
function validateAcc() {
    var res = true
    $('.a').classList.remove('err')
    if (!account.value.trim()) {
        $('.a').classList.add('err')
        res = false
    }
    return res
}
function validatePwd() {
    var res = true
    $('.p').classList.remove('err')
    if (!password.value.trim()) {
        $('.p').classList.add('err')
        res = false
    }
    return res
}

account.addEventListener('input', validateAcc)
password.addEventListener('input', validatePwd)

btn.addEventListener('click', function(e) {
    var r1 = validateAcc()
    var r2 = validatePwd()
    if(!r1 || !r2) {
        e.preventDefault()
    }
})
// btn.addEventListener('click', function(e) {
//     if (!$('.a input').value.trim()) {
//         $('.a').classList.add('err')
//         e.preventDefault()
//         return
//     } else {
//         $('.a').classList.remove('err')
//     }
//     if (!$('.p input').value.trim()) {
//         $('.p').classList.add('err')
//         e.preventDefault()
//         return
//     } else {
//         $('.p').classList.remove('err')
//     }
// })