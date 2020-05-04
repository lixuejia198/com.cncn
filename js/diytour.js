$(function () {
  // 主体部分搜索框
  $('.main-banner-searchbox-text2 input[type="text"]').focus(function () {
    $(this).val('')
    $('.main-banner-searchbox-text2 .hidebox').show();
  })
  $('.main-banner-searchbox-text2 input[type="text"]').blur(function () {
    $(this).val('请输入想去的目的地')
    $('.main-banner-searchbox-text2 .hidebox').hide();
  })

})