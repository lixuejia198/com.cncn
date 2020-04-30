$(function () {
  // 1.头部部分
  // 鼠标移入移出搜索框线路的变化
  $('.header-search-curt').on('mouseover', function () {
    $('.header-search-curt .curtlist').show()
    $(this).addClass('curtlist-list')
  })
  $('.header-search-curt').on('mouseleave', function () {
    $('.header-search-curt .curtlist').hide()
    $(this).removeClass('curtlist-list')
  })
  // 搜索框获得焦点与失去焦点时的变化
  $('.header-search-input').on('focus', function () {
    $('.hearder-search-keyword').hide()
  })
  $('.header-search-input').on('blur', function () {
    $('.hearder-search-keyword').show()
  })

  // 2.主体部分的tab切换
  $('.two .main-floor-item-title>div.list-nav>a').on('mouseover',function(){
    let index = $(this).index();
    // console.log(index);
    $('.two .main-floor-item-title>div.list-nav>a').eq(index).addClass('on');
    $('.two .main-floor-item-title>div.list-nav>a').eq(index).siblings('a').removeClass('on');
    // console.log($('.main-floor-item-slidercon>div.txt').eq(index));
    $('.two .main-floor-item-slidercon>div.txt').eq(index).show();
    $('.two .main-floor-item-slidercon>div.txt').eq(index).siblings('.txt').hide();
  })

  $('.three .main-floor-item-title>div.list-nav>a').on('mouseover',function(){
    let index = $(this).index();
    // console.log(index);
    $('.three .main-floor-item-title>div.list-nav>a').eq(index).addClass('on');
    $('.three .main-floor-item-title>div.list-nav>a').eq(index).siblings('a').removeClass('on');
    // console.log($('.main-floor-item-slidercon>div.txt').eq(index));
    $('.three .main-floor-item-slidercon>div.txt').eq(index).show();
    $('.three .main-floor-item-slidercon>div.txt').eq(index).siblings('.txt').hide();
  })



})