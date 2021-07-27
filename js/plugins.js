$(document).ready(function(){
	$('.carousel').carousel({
		interval:4000
	});
	
	//Show & Hide color-option
	$('.option-box .theme').click(function(){
		$('.color-option').toggle(800);
	});
	
	//Change theme on click
	$('.color-option ul li').click(function(){
		$("link[href*='theme']").attr("href",$(this).attr("data-value"));
	});
	
	//scroll to top
	var scrollbtn = $("#scroll-top");
	$(window).scroll(function(){
		$(this).scrollTop()>=700?scrollbtn.show():scrollbtn.hide();
	});
	//Click on Button to scroll
	scrollbtn.click(function(){
		$("html,body").animate({scrollTop:0},600);
	});
    
    //Main Menu Links
    //Links addClass active
	$('.main-menu li a').click(function(){
		$(this).parent().addClass('active').siblings().removeClass('active');
	});
    //Smooth Scroll
	$('.main-menu li a').click(function(){
		$('html, body').animate({
			scrollTop: $('#' + $(this).data('value')).offset().top
		},1000);
	});
    $('.home').click(function(){
        $("html,body").animate({scrollTop:0},600);
    })
});

