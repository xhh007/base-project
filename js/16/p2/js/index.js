// 让小球向右下运动，遇到边缘后反弹

var ball = document.querySelector('.ball')
var disX = 10, disY = 10
var clietWidth = document.documentElement.clientWidth
var clientHeight = document.documentElement.clientHeight


setInterval(function() {
    var rect = ball.getBoundingClientRect()
    let left = rect.left + disX, top = rect.top + disY
    let maxLeft = clietWidth - rect.width, maxTop = clientHeight - rect.height
    if (left < 0) {
        disX = -disX
        left = 0
        ball.style.background = `rgba(${random(0, 255)},${random(0, 255)},${random(0, 255)})`
    }
    if (left>maxLeft) {
        disX = -disX
        left = maxLeft
        ball.style.background = `rgba(${random(0, 255)},${random(0, 255)},${random(0, 255)})`
    }
    if (top < 0) {
        disY = -disY
        top = 0
        ball.style.background = `rgba(${random(0, 255)},${random(0, 255)},${random(0, 255)})`
    }
    if (top>maxTop) {
        disY = -disY
        top = maxTop
        ball.style.background = `rgba(${random(0, 255)},${random(0, 255)},${random(0, 255)})`
    }
    ball.style.left = left + 'px'
    ball.style.top = top + 'px'
}, 20)

function random(min, max) {
    return Math.floor(Math.random()*(max-min)+min)
}