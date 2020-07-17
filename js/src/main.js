(function($){

  var gnbMenu = $('.gnb_mob_menu');
  var gnbMob = $('#gnb_mob');

  gnbMob.on('click',function(e){
    e.preventDefault();
    gnbMenu.css({display:'block'});
  });

  // viewBox ================================================================
  var viewBox = $('#viewBox');
  var slideBtn = $('.slide_btn');

  var btn = $('button');
  var nextBtn = $('.next');
  var prevBtn = $('.prev');
  var timed = 500;

  var viewUl = $('.slide_banner_box').find('.slideBox');
  var cloneLi   = viewUl.children('li').eq(-1).clone(true);
    viewUl.prepend(cloneLi);

  var viewLi = viewUl.children('li');
  var viewLiLen  = viewLi.length;

  viewUl.css({width:viewLiLen * 100 + '%', marginLeft: -100 + '%', position: 'relative'});
  viewLi.width(100 / viewLiLen + '%');

  var n = 0;
  var check = true;

  btn.on('click', function(e){
	e.preventDefault();
	var thisBtn = $(this)[0];
	// next 버튼 클릭시
	if(thisBtn === nextBtn[0] && check){
		check = false;
		n += 1;
		viewUl.stop().animate({left: -n * 100 + '%'}, timed, function(){
			if(n >= viewLiLen - 2){	n = -1;	 }
			viewUl.css({left: -n * 100 + '%'});
			check = true;
		 });
	}
	// prev 버튼 클릭
	else if(check) {
		check = false;
		n -= 1;
		viewUl.stop().animate({left: -n * 100 + '%'}, timed, function(){
			if(n <= -1){	n = viewLiLen - 2;	 }
			viewUl.css({left: -n * 100 + '%'});
			check = true;
		 });
	}
  });

  var mvImg;
  var mvSlideGo = function(){
  	mvImg = setInterval(function(){
  	  nextBtn.trigger('click');
  	}, timed*15);
  };
  mvSlideGo();
  var ClearFn = function(){	clearInterval( mvImg ) };
  var GoFn    =  function(){	mvSlideGo()};
  $('.slide_banner_box').on({'mouseenter' :ClearFn , 'mouseleave':GoFn });

  // infoBox ================================================================
 

})(jQuery);