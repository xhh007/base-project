// 每隔一段时间，切换英雄的图片，让英雄动起来
var timer = null
var n=0
var img = document.querySelector('img')
var imgs = ['1.png', '2.png', '3.png', '4.png']


// 每隔一段时间，改变英雄的位置，让英雄向右移动
function start() {
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
}
function stop() {
  clearInterval(timer)
  timer = null
}
start()

// 当鼠标移动到元素上时停止切换，移出后开始切换
img.addEventListener('mouseleave', () => {
  start()
})
img.addEventListener('mouseenter', () => {
  stop()
})

