function $(a) {
    return document.querySelector(a)
}
// 输入待办事项，按下回车后，添加事项到列表
var inputEl = $('.txt')
var list = $('.todo-list')
inputEl.addEventListener('keydown', function(e) {
    if(!this.value.trim()) return
    if (e.key === "Enter") {
        addLi(this.value)
        this.value = ''
    }
})
// 点击删除后，删除对应的待办事项
list.addEventListener('click', function(e) {
    console.log(e);
    if (e.target.nodeName==='BUTTON') {
        console.log(e.target.parentNode);
        deleteLi(e.target.parentNode)
    }
})

function addLi(text) {
    var li = document.createElement('li')
    li.innerHTML = `<span>${text}</span><button>删除</button>`
    list.append(li)
}
function deleteLi(node) {
    node.remove()
}
