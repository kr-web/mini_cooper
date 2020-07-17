// mini_infopage_modal.js
/* 미니쿠퍼 차량 정보페이지 모달 */

(function($){

  $('.detail_img').eq(0).find('button').on('click', function(){
    $('.modal').show();
  });

  $('.modal_close').on('click', function(){
    $('.modal').hide();
  })



})(jQuery);