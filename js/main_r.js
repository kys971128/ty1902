function hover(){
	
	$("#main_r img").each(function(index,value){
		$("#main_r img").eq(index).mouseenter(function(){
			$(this).removeClass("_unhover");
			$(this).addClass("_hover");
		})
		$("#main_r img").eq(index).mouseleave(function(){
			$(this).removeClass("_hover");

			$(this).addClass("_unhover");
		})
	})
	
}
hover();