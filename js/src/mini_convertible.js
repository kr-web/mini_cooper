// mini_convertible.js
/* 580px */
(function($){

  // 스크롤 시 tabBox 고정 및 top 버튼 생성
  var tabBox = $('#tabBox').offset().top;
  var topMvBtn = $('.topMvBtn');
  var timed = 500;

  $(window).on('scroll', function(){
  $('#tabBox').css({'position':'fixed', 'bottom':'auto', 'top':0});

  var wScroll = $(this).scrollTop();
  if(tabBox < wScroll){
  }else{
    $('#tabBox').removeAttr('style');
  }
  
  var winScroll = $(window).scrollTop();
  (winScroll >= 580) ? topMvBtn.stop().fadeIn(timed) : topMvBtn.stop().fadeOut(timed);
  
  });

  // aside#infoBox 마우스 올릴 시 설명표시 slide
  var infoBox = $('#infoBox');
  var infoBoxExplain = $('.info_explain');

  infoBox.on('mouseover',function(e){
    e.preventDefault();
    infoBoxExplain.show("slide", { direction: "right" }, 300);
  });

  infoBox.on('mouseleave',function(e){
    e.preventDefault();

    infoBoxExplain.hide("slide", { direction: "right" }, 300);
  });

  // 탭메뉴

  $('.tab_02').children('a').on('click', function(e){
		e.preventDefault();
		var sectionName = $(this).attr('href');
		var sectionOffset = $(sectionName).offset().top;

		$('html, body').animate({scrollTop: sectionOffset - 70 + 'px'});
  });
  
  $('.tab_03').children('a').on('click', function(e){
		e.preventDefault();
		var sectionName = $(this).attr('href');
		var sectionOffset = $(sectionName).offset().top;

		$('html, body').animate({scrollTop: sectionOffset - 70 + 'px'});
	});


})(jQuery);
