var inp = document.querySelector('input')
var newInput = debounce(function(e) {
    console.log('用户输入', this.value, e.target);
}, 500)
inp.addEventListener('input', newInput)


var newMove = debounce(function(e) {
    console.log('mousemove', e);
}, 1000)
window.addEventListener('mousemove', newMove)

function debounce(fn, duration) {
    var timer = null
    return function() {
        if (timer) clearTimeout(timer)
        var curThis = this
        var args = Array.prototype.slice.call(arguments)
        
        timer = setTimeout(function() {
            fn.apply(curThis, args)
        }, duration)
    }
}