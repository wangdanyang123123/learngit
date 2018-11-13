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
	//账号聚焦，失焦
	$("#uname").on('focus',function(){
		if(this.placeholder=='请输入E-mail或手机号'){
			this.placeholder='';
		};
	});
	
	$("#uname").on('blur',function(){
		if(this.value==""){
			$(this).css("margin-bottom","6px");
			$(".error-uname").css("display","block");
		};
		if(!this.value==""){
			$(this).css("margin-bottom","16px");
			$(".error-uname").css("display","none");
		}
	});
	
	
	//密码聚焦失焦
	$("#password").on('focus',function(){
		if(this.placeholder=='请输入E-mail或手机号'){
			this.placeholder='';
		};
		if(!this.value==""){
			$(this).css("margin-bottom","16px");
			$(".error-uname").css("display","none");
		}
	});
	
	$("#password").on('blur',function(){
		if(this.value==""){
			$(this).css("margin-bottom","6px");
			$(".error-password").css("display","block");
		};
		if(!this.value==""){
			$(this).css("margin-bottom","16px");
			$(".error-password").css("display","none");
		}
	});
	
	
	
	
	
	
});