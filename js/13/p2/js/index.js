// 每隔一段时间，切换英雄的图片，让英雄动起来
var timer = null
var n=0
var img = document.querySelector('img')
var imgs = ['1.png', '2.png', '3.png', '4.png']
timer = setInterval(() => {
  var index = n%3
  img.src= `./img/${imgs[index]}`
  var move = 5
  if (n===0) {
    img.style.marginLeft = 0
  } else {
    var ml = img.style.marginLeft.split('px')[0]
    img.style.marginLeft = (parseInt(ml)+move)+'px'
  }
  n++
}, 200)

// 每隔一段时间，改变英雄的位置，让英雄向右移动

function stop() {
  clearInterval(timer)
  timer = null
}
