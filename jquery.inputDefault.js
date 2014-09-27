/*
Name		inputDefault
Version		V1.0
Author		huangdijia@gmail.com
Website		http://www.hdj.me/
Date		2011/08/10
*/

(function($){
	$.fn.inputDefault = function(options){
		var defaults = {attrName: 'fs', size:0, bold: false, italic:false, color:'#CCC'};
		var options = $.extend(defaults, options);
		this.each(function(){
			var $this = $(this);
			var text = $this.attr(options.attrName);
			
			var offset = $this.position();
	
			var outerWidth = $this.outerWidth();
			var outerHeight = $this.outerHeight();
			
			var innerWidth = $this.innerWidth();
			var innerHeight = $this.innerHeight();
			
			var plusLeft = (outerWidth - innerWidth)/2;
			var plusTop = (outerHeight - innerHeight)/2;
			
			var paddingTop = parseInt($this.css('paddingTop'));
			var paddingRight = parseInt($this.css('paddingRight'));
			var paddingBottom = parseInt($this.css('paddingBottom'));
			var paddingLeft = parseInt($this.css('paddingLeft'));
			
			if(!$.browser.chrome){
				var width = innerWidth - (paddingLeft + paddingRight);
				var height = innerHeight - (paddingTop + paddingBottom);
			}else{
				var width = innerWidth - paddingRight;
				var height = innerHeight - paddingBottom;
			}
		
			var top = offset.top + plusTop;
			var left = offset.left + plusLeft;
			
			var lineHeight = $this.css('lineHeight');
			var display = $this.val() ? 'none' : 'block';
			
			var fontSize = options.size ? options.size : $this.css('fontSize');
			var fontStyle = options.italic ? 'italic' : '';
			var fontWeight = options.bold ? '700' : $this.css('fontWeight');
			
			var css = {position:'absolute', fontSize: fontSize, fontWeight:fontWeight, fontStyle:fontStyle, lineHeight:lineHeight, display:display, paddingTop:paddingTop, paddingRight:paddingRight, paddingBottom:paddingBottom, paddingLeft:paddingLeft, cursor:'text', width:width, height:height, top:top, left:left, color:options.color, overflow:'hidden'};
			
			var lable = $("<label></label>").text(text).css(css).click(function(){
				$(this).hide();
				$(this).prev().focus();
			});
			
			$this.after(lable);
		}).focus(function(){
			var $this = $(this);
			var $label = $(this).next('label');
			$label.hide();
		}).blur(function(){
			var $this = $(this);
			var $label = $(this).next('label');
			if(!$this.val()) $label.show();
		});
	}
})(jQuery);
