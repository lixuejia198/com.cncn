$(function () {
  // 主体部分
  // 主体 banner部分 输入框的功能
  $('.main-banner-searchcon-text>form>input').focus(function () {
    $('.main-banner-searchcon-hidebox').slideDown(800)
  })
  $('.main-banner-searchcon-text>form>input').blur(function () {
    $('.main-banner-searchcon-hidebox').slideUp()
  })
  // 主体 banner部分 背景图片的变化
  $('.main-banner-list-txt>ul>li').on('mouseover', function () {
    let index = $(this).index();
    $('.main-banner-imgbg>img').eq(index).css('opacity', 1);
  })
  $('.main-banner-list-txt>ul>li').on('mouseleave', function () {
    let index = $(this).index();
    $('.main-banner-imgbg>img').css('opacity', 0);
  })
  // 主体 banner部分 热门主题图片的变化
  $('.main-hottheme-content>ul>li').on('mouseover', function () {
    let index = $(this).index();
    $('.main-hottheme-content>ul>li').eq(index).find('div.hidebox').stop().animate({
      height: 85
    }, 200);
  })
  $('.main-hottheme-content>ul>li').on('mouseleave', function () {
    let index = $(this).index();
    $('.main-hottheme-content>ul>li').eq(index).find('div.hidebox').stop().animate({
      height: 24
    }, 200);
  })






  // 主体 客人评价中的风景图片的放大效果
  $('.main-assessment-usersay-content .use-assess>div.pic>img').on('mouseover', function (e) {
    let imgSrc = $(this).attr('bimg');
    let x = e.pageX - 650;
    let y = e.pageY - 400;
    $('.previewShowWindow').show().css({
      'top': y,
      'left': x
    });
    $('.previewShowWindow>img').attr('src', `./images/${imgSrc}.jpg`)
  });
  $('.main-assessment-usersay-content .use-assess>div.pic>img').on('mouseleave', function () {
    $('.previewShowWindow').hide();
  });

})