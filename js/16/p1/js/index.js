// 让便签可被拖动，但不能超出视口

var moveBar = document.querySelector('.move-bar')
var note = document.querySelector('.note')
var clientWidth = document.documentElement.clientWidth
var clientHeight = document.documentElement.clientHeight

moveBar.addEventListener('mousedown', function(e) {
    // 按下的坐标
    let x = e.clientX, y = e.clientY
    // note元素坐标
    let rect = note.getBoundingClientRect()
    function handleMove(e) {
        let disX = e.clientX - x, disY = e.clientY - y
        let left = rect.left+disX, top=rect.top+disY
        if (left<0) left = 0
        if (left>clientWidth - rect.width) left = clientWidth - rect.width
        if (top<0) top = 0
        if (top>clientHeight - rect.height) top = clientHeight-rect.height
        note.style.left = left + 'px'
        note.style.top = top + 'px'
    }
    window.addEventListener('mousemove', handleMove)
    window.addEventListener('mouseup', function(e) {
        console.log('抬起');
        window.removeEventListener('mousemove', handleMove)
    })
})


