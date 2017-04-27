window.tabs = function(element){
  console.log('tabs') 
  var $tabs = $(element)
  let selector = 'ol[data-role="nav"]>li'
  $tabs.on('click',selector,e=>{
    console.log('click')
    let $li = $(e.currentTarget)
    let index = $li.index()
    $li.addClass('active').siblings().removeClass('active')
    $li.closest('ol[data-role="nav"]').siblings('ol[data-role="panes"]').
    find('li').eq(index).addClass('active')
    .siblings().removeClass('active')
 
  })
}
tabs($('.tabs'))