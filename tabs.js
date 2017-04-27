window.tabs = function(element){
  //选中页面中的元素
  var $tabs = $(element)
  //选中被标记为'data-role="nav"的ol的li子元素
  let selector = 'ol[data-role="nav"]>li'
  //监听li元素的点击事件
  $tabs.on('click',selector,e=>{
    let $li = $(e.currentTarget)
    //记住被点击的li元素的索引
    let index = $li.index()
    //给被点击的li元素添加class'active',把li的兄弟的'active'class移除
    $li.addClass('active').siblings().removeClass('active')
    //给li最近的祖先元素中标记为'data-role="nav"'的ol元素的
    //兄弟元素中被标记为'data-role="pane"'的ol元素中
    //索引与被点击的li元素一致的li子元素添加class'active'
    $li.closest('ol[data-role="nav"]').siblings('ol[data-role="panes"]').
    find('li').eq(index).addClass('active')
    .siblings().removeClass('active')
  })
}
tabs($('.tabs'))