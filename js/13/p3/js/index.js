/**
 * 根据协议的多选框是否选中设置注册按钮状态
 */
function setSubmitButtonStatus() {
  var inputCb = document.querySelector('input[type=checkbox]')
  var btn = document.querySelector('button[type=submit]')
  if (inputCb.checked) {
    btn.disabled = false
  } else {
    btn.disabled = true
  }
}

/**
 * 根据手机号文本框中的文本，设置发送验证码按钮的状态
 */
function setSendCodeButtonStatus() {
  const phoneRegex = /^1[3-9]\d{9}$/;
  const str = document.querySelector('#tel').value
  console.log(str);
  
  const vaild = phoneRegex.test(str);
  var btn = document.querySelector('#testCode')
  btn.disabled = !vaild
}

/**
 * 根据当前选中的爱好，设置已选择爱好文本
 */
function setSelectedLoves() {
  const options = document.getElementsByTagName('option') 
  let arr = [].slice.call(options) 
  //const options = document.querySelectorAll('select option')
  const span = document.querySelector('#showLoves')
  let str = '';
  
  arr.forEach(o => {
    if (o.selected) str += o.label
  })
  span.innerHTML = str
}

