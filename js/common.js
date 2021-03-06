$(function () {
  // 鼠标移入移出定位地点的变化
  $('.header-city').on('mouseover', function () {
    $('.header-city .hide-box').show()
    $(this).addClass('currt-city')
  })
  $('.header-city').on('mouseleave', function () {
    $('.header-city .hide-box').hide()
    $(this).removeClass('currt-city')
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

})