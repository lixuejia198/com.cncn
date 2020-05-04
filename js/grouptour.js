$(function () {
  // 主体部分 banner 搜索框
  $('.main-banner-searchbox-text2 input[type="text"]').focus(function(){
    $(this).val('')
    $('.main-banner-searchbox-text2 .hidebox').show();
  })
  $('.main-banner-searchbox-text2 input[type="text"]').blur(function(){
    $(this).val('请输入想去的目的地')
    $('.main-banner-searchbox-text2 .hidebox').hide();
  })
  
  // 主体部分 旅游部分 tab切换
  $('.first .main-travel-boxcon-title>div.list>a').on('mouseover',function(){
    let index = $(this).index();
    // console.log(index);
    $('.first .main-travel-boxcon-title>div.list>a').eq(index).addClass('on');
    $('.first .main-travel-boxcon-title>div.list>a').eq(index).siblings('a').removeClass('on');
    $('.first .main-travel-boxcon-slidercon>div.txt').eq(index).show();
    $('.first .main-travel-boxcon-slidercon>div.txt').eq(index).siblings('.txt').hide();
  })

  $('.second .main-travel-boxcon-title>div.list>a').on('mouseover',function(){
    let index = $(this).index();
    // console.log(index);
    $('.second .main-travel-boxcon-title>div.list>a').eq(index).addClass('on');
    $('.second .main-travel-boxcon-title>div.list>a').eq(index).siblings('a').removeClass('on');
    $('.second .main-travel-boxcon-slidercon>div.txt').eq(index).show();
    $('.second .main-travel-boxcon-slidercon>div.txt').eq(index).siblings('.txt').hide();
  })

})