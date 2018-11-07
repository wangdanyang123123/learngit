requirejs.config({
	baseUrl:"js/plugins",
	paths:{
		baiduT:"baiduTemplate",
		page:"jPages",
		extend:"jquery.extend",
		jquery:"jq1.11.1",
		lazy:"lazyload.min",
		swiper:"swiper.min"
	},
	shim:{
		baiduT:{
			exports:"baidu"
		},
		page:{
			deps:["jquery"]
		},
		extend:{
			deps:["jquery"]
		},
		jquery:{
			exports:"jQuery"
		},
		lazy:{
			deps:["jquery"]
		},
		swiper:{
			exports:"Swiper",
			deps:["jquery"]
		}
	}
});

requirejs(["jquery","swiper","baiduT","extend","lazy","page"],function($,sw,bd){
	var mySwiper = new sw ('.swiper-container', {
		autoplay:{
			delay:4000,
		},
		direction: 'horizontal', // 垂直切换选项
		loop: true, // 循环模式选项
		onlyInViewport: false,  //默认仅控制当前窗口内的swiper切换。当swiper离开可视区域则无法切换。
//		watchOverflow:true   //当没有足够的slide切换时，例如只有1个slide（非loop），swiper会失效且隐藏导航等。默认不开启这个功能。
			    
		pagination: {
			el: '.swiper-pagination',
			clickable: true,
			renderBullet: function (index, className) {
				return '<span class="' + className + '">' + (index + 1) + '</span>';
			},
		},
	});
	
	
	$(".day-left-bot").tab("active");
	
//	$(".swiper-wrapper img").mouseenter(function(){
//		$(this).animate({
//			width:1400,
//			height:520
//		})
//	});
	
	$('.floor_ctrl div').mouseenter(function(){
		var top = $('.floor .louceng').eq($(this).index()).height()+($(this).index())*308;
		$(this).css("background","#d3161b");
		$(this).siblings().css("background","#ffe8e8");
		$(this).siblings().children().css("color","#73584a");
		$(this).children().css("color","white");
		$('.daojishi').stop().animate({
			scrollTop:top
		});
	});
	
	
	
	
	$(".shoufengqin").sfq();
	
	$(".a-brand div img").mouseenter(function(){
		$(this).stop().animate({
			left:-100              
		});
	}).mouseleave(function(){
		$(this).stop().animate({
			left:0
		});
	});
	
	
	
	
	
});