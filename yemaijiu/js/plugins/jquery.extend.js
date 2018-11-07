$.fn.extend({
	tab:function(selector,event){
		selector = selector || "active";
		event = event || "click";
		this.each(function(index,ele){
			$(ele).children().eq(0).children().on(event,function(){
				$(this).addClass(selector).siblings().removeClass(selector);
				$(ele).children().eq(1).children().eq($(this).index()).addClass(selector).siblings().removeClass(selector);
			});
		});
	}
});


$.fn.extend({
	sfq:function(){
		$(this).on("mouseenter","li",function(){
			var that = this;
			$(this).stop().animate({
				width:450
			}).siblings().stop().animate({
				width:150
			})
		}).mouseleave(function(){
			$(that).stop().animate({
				width:450
			}).end().siblings().stop().animate({
				width:150
			});
		});
	}
});