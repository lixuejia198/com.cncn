$(function () {
  // 1.头部部分
  // 鼠标移入移出定位地点的变化
  $('.header-city').on('mouseover', function () {
    $('.header-city .hide-box').show()
    $(this).addClass('currt-city')
  })
  $('.header-city').on('mouseleave', function () {
    $('.header-city .hide-box').hide()
    $(this).removeClass('currt-city')
  })
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
  // 鼠标移入移出头部网站导航 导航栏显示与隐藏
  $('.header-other-webnav').hover(function () {
    $(this).addClass('hov-webnav')
    $('.header-other-webnav-con').show().mouseover(function () {
      $(this).show()
      $('.header-other-webnav').addClass('hov-webnav')
    })
  }, function () {
    $(this).removeClass('hov-webnav')
    $('.header-other-webnav-con').hide().mouseleave(function () {
      $(this).hide()
      $('.header-other-webnav').removeClass('hov-webnav')
    })
  })
  // 鼠标移入移出头部扫一扫区域，二维码显示与隐藏
  $('.header-ewn').hover(function () {
    $('.header-ewn .header-ewn-eweima').show()
    $(this).addClass('ewn-on')
  }, function () {
    $('.header-ewn .header-ewn-eweima').hide()
    $(this).removeClass('ewn-on')
  })
  // 鼠标移入移出登录注册的时候，登录框显示与隐藏
  $('.header-login').hover(function () {
    $('.header-login-message').show()
  }, function () {
    $('.header-login-message').hide()
  })
  // 2.主体部分
  // 2.1 主体部分中的banner
  // 出发地和目的地后面的输入框input获取焦点和失去焦点的时候，
  // 输入框input的背景颜色以及边框的颜色要变化
  $('.ipt-text').focus(function () {
    $(this).css({
      'backgroundColor': '#effdf4',
      'border': '1px solid #00bf49'
    })
  })
  $('.ipt-text').blur(function () {
    $(this).css({
      'backgroundColor': '#fafafa',
      'border': '1px solid #ddd'
    })
  })
  // 出发地后面的输入框获得和失去焦点的时候，对应的表单显示与隐藏
  $('.main-banner-search-dest>li:first-child>input').focus(function () {
    $('.form-search-hide').show()
  })
  $('.main-banner-search-dest>li:first-child>input').blur(function () {
    $('.form-search-hide').hide()
  })

  // banner中的轮播图
  // 创建小圆点
  $('.main-banner-slider>ul>li').each(function (index, item) {
    // console.log(index,item)
    $('<li></li>').appendTo('.main-banner-slider-xyd')
  })
  // 默认给第一个小圆点添加样式
  $('.main-banner-slider-xyd>li').eq(0).addClass('active');
  let firstLi = $('.main-banner-slider>ul>li:first-child').clone(true);
  // console.log(firstLi);
  $('.main-banner-slider>ul').append(firstLi)
  $('.main-banner-slider>ul').width($('.main-banner-slider>ul>li').length * $('.main-banner-slider').width())
  let sliderNum = 0;
  let sliderCircle = 0;
  // 点击右箭头让轮播图滚动
  $('.main-banner-slider-arrow-right').on('click', function () {
    if (sliderNum == $('.main-banner-slider>ul>li').length - 1) {
      $('.main-banner-slider>ul').css('left', 0)
      sliderNum = 0;
    }
    sliderNum++
    $('.main-banner-slider>ul').animate({
      left: -sliderNum * $('.main-banner-slider').width()
    }, 1000)
    sliderCircle++
    if (sliderCircle == $('.main-banner-slider-xyd>li').length) {
      sliderCircle = 0
    }
    sliderCircleChange();
  })
  // 设置小圆点样式的变化
  function sliderCircleChange() {
    $('.main-banner-slider-xyd>li').eq(sliderCircle).addClass('active')
    $('.main-banner-slider-xyd>li').eq(sliderCircle).siblings().removeClass('active')
  }
  // 让轮播图自动轮播
  let timer = null;
  timer = setInterval(function () {
    $('.main-banner-slider-arrow-right').click()
  }, 3000);
  // 鼠标移入移出轮播图，轮播暂停轮播与继续轮播，以及左右箭头的显示与隐藏
  $('.main-banner-slider').on('mouseover', function () {
    $('.main-banner-slider-arrow').show()
    clearInterval(timer);
  })
  $('.main-banner-slider').on('mouseleave', function () {
    $('.main-banner-slider-arrow').hide()
    timer = setInterval(function () {
      $('.main-banner-slider-arrow-right').click()
    }, 3000);
  })

  //  主体 floor部分 特惠门票侧边栏中的功能
  $('.main-floor-special-sliderbar-recommend-title>.recommend-tit>a').on('mousemove', function () {
    let $index = $(this).index();
    // console.log($index);
    $('.main-floor-special-sliderbar-recommend-title>.recommend-tit>a').eq($index).addClass('active-on');
    $('.main-floor-special-sliderbar-recommend-title>.recommend-tit>a').eq($index).siblings().removeClass('active-on');

    $('.main-floor-special-sliderbar-recommend-item').eq($index).show();
    $('.main-floor-special-sliderbar-recommend-item').eq($index).siblings().hide();
  })

})