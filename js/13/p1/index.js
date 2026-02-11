// 根据hero.js提供的数据heros，创建合适的元素，将英雄数据显示到页面上


{/* <a
href="https://pvp.qq.com/web201605/herodetail/528.shtml"
target="_blank"
class="item"
>
<img
  src="https://game.gtimg.cn/images/yxzj/img201606/heroimg/528/528.jpg"
  alt=""
/>
<span>澜</span>
</a> 
  {
    ename: 105,
    cname: '廉颇',
    title: '正义爆轰',
    new_type: 0,
    hero_type: 3,
    skin_name: '正义爆轰|地狱岩魂',
  },
*/}

function createEl(item) {
  var a = document.createElement('a')
  a.href = "https://pvp.qq.com/web201605/herodetail/528.shtml"
  a.target = '_blank'
  a.className = 'item'
  var img = document.createElement('img')
  img.src = "https://game.gtimg.cn/images/yxzj/img201606/heroimg/528/528.jpg"
  a.append(img)
  var span = document.createElement('span')
  span.innerHTML = item.cname
  a.append(span)
  return a
}

function initPage() {
  var container = document.querySelector('.container')
  for(var i=0;i<heros.length;i++) {
    var el = createEl(heros[i])
    container.append(el)
  }
}
initPage()