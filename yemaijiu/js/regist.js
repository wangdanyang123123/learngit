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
	
		//验证码
	$('#check-code').code_Obj({
			codeLength: 4
		});
	
	
	$("#uphone").on('focus',function(){
		if(this.placeholder=='请输入手机号'){
			this.placeholder='';
		};
	});
	
	$("#uphone").on('blur',function(){
		if(this.value==""){
			$(this).css("margin-bottom","6px");
			$(".error-uphone").css("display","block");
		};
		if(!this.value==""){
			$(this).css("margin-bottom","16px");
			$(".error-uphone").css("display","none");
		}
	});
	
});