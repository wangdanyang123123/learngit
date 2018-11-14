requirejs.config({
	baseUrl:"js/plugins",
	paths:{
		baiduT:"baiduTemplate",
		page:"jPages",
		extend:"jquery.extend",
		jquery:"jq1.11.1",
		lazy:"lazyload.min",
		swiper:"swiper.min",
		cookie:"cookies"
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
		},
		cookie:{
			deps:["jquery"]
		}
	}
});


requirejs(["jquery","swiper","baiduT","extend","lazy","page","cookie"],function($,sw,bd){

	
	
	
	$(function() {
	
		var magnifierConfig = {
			magnifier : "#magnifier1",//最外层的大容器
			width : 380,//承载容器宽
			height : 440,//承载容器高
			moveWidth : null,//如果设置了移动盒子的宽度，则不计算缩放比例
			zoom : 1.7//缩放比例
		};
	
		var _magnifier = magnifier(magnifierConfig);
	
		/*magnifier的内置函数调用*/
		/*
			//设置magnifier函数的index属性
			_magnifier.setIndex(1);
	
			//重新载入主图,根据magnifier函数的index属性
			_magnifier.eqImg();
		*/
	});
	
	
	var select = document.querySelector(".city-choose");

		select.children[0].onclick=function(){
			if(select.children[1].className == "active"){
				select.children[1].className = "";
			}else{
				select.children[1].className = "active";
			}
		}

		for(var i=0; i<select.children[1].children.length; i++){
			select.children[1].children[i].onclick=function(){
				select.children[1].className = "";
				select.children[0].innerText = this.innerText;
			}
		}
		
		
		
		
		
		
		$(".floor_choose span").click(function(){
			var scroll = $(".louceng .floor").eq($(this).index()).offset().top;
			$("body,html").stop().animate({
				scrollTop:scroll
			})
			$(this).addClass("active").siblings().removeClass("active");
		})



		$(window).scroll(function(){
			var scroll=$('html,body').scrollTop();
			var fixed = $(".louceng .yilou").offset().top;
			if($("body,html").scrollTop()>fixed){
				$(".xiding").addClass("fix");
			}else{
				$(".xiding").removeClass("fix");
			};
			$(".louceng .floor").each(function(index,ele){
				if(scroll>=$(ele).offset().top){
					$(".floor_choose span").eq($(ele).index()).addClass('active').siblings().removeClass("active");
				}
			});
		});
	
	
	
	
	
	
		var jian = document.querySelector(".xuanzenumber dd .jianhao");
		var jia = document.querySelector(".xuanzenumber dd .jiahao");
		var cnt = document.querySelector(".xuanzenumber dd #shuliang").value;
		
		jian.onclick=function(){
			if(cnt>1){
				cnt--;
				document.querySelector(".xuanzenumber dd #shuliang").value=cnt;
			}
		}
		jia.onclick=function(){
			cnt++;
			document.querySelector(".xuanzenumber dd #shuliang").value=cnt;
		}
	
	
	
	$(".detalis-right4 button").click(function(){
		var winename = document.querySelector(".wine-name").innerHTML;
		var price = document.querySelector(".promotion-price dd b").innerHTML;
		var city = document.querySelector(".city-choose .peisongchengshi").innerHTML;
		var winenum = document.querySelector("#shuliang").value;
		
		var goods = [];
		
//		if(getcookie("cart")){
//			alert("已添加该商品");
//		}
		
		goods.push({
			winename:winename,
			price:price,
			city:city,
			winenum:winenum
		})
		console.log(goods)
		setcookie("cart",JSON.stringify(goods),7);
		
	});
		
	
	
	
	
	
	
	$(".erlou-tab").tab("active");
	$(".sanlou-tab").tab("active");
	
	
	
	
	
	
});