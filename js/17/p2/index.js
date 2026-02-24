var content = document.querySelector('.content')

var str = content.innerHTML

var reg = /\s+.+/g
var newHtml = str.replace(reg, function(s) {
    s = s.replace(/\s/g, '')
    s = '<p>'+s+'<p>'
    return s
})
    console.log(newHtml);

content.innerHTML = newHtml