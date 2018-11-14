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







$.fn.code_Obj = function(o) {
	var _this = $(this);
	var options = {
		code_l: o.codeLength,//验证码长度
		codeChars: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9,
			'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',
			'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'
		],
		codeColors: ['#f44336', '#009688', '#cddc39', '#03a9f4', '#9c27b0', '#5e4444', '#9ebf9f', '#ffc8c4', '#2b4754', '#b4ced9', '#835f53', '#aa677e'],
		code_Init: function() {
			var code = "";
			var codeColor = "";
			var checkCode = _this.find("#data_code");
			for(var i = 0; i < this.code_l; i++) {
				var charNum = Math.floor(Math.random() * 52);
				code += this.codeChars[charNum];
			}
			for(var i = 0; i < this.codeColors.length; i++) {
				var charNum = Math.floor(Math.random() * 12);
				codeColor = this.codeColors[charNum];
			}
			console.log(code);
			if(checkCode) {
				checkCode.css('color', codeColor);
				checkCode.className = "code";
				checkCode.text(code);
				checkCode.attr('data-value', code);
			}
		}
	};
	options.code_Init();//初始化验证码
		_this.find("#data_code").bind('click', function() {
			options.code_Init();
	});
};