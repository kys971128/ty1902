					let index=0;
					let zindex=1;
					let $img=$("#slider img");
					let $li=$("#slider li");
					let $lbt=$("#lbt");
					let $goodType=$("#good-type");
					let $petType=$("#pet-type");
					let flag=true;
					let color=null;
					let timer=null;
					function slider(){
						if(index==0){
							color="#37742D";
						}else if(index==1){
							color="#8DE3F4";
						}else if(index==2){
							color="#D6EFE9";
						}else if(index==3){
							color="#000";
						}else if(index==4){
							color="#000";
						}
						//图片轮播
						$img.eq(index).css("zIndex",zindex++).fadeIn(300);
						//小圆点的变化
						$li.removeClass("index");
						$li.eq(index).addClass("index");
						//背景的变化
						$lbt.css("background",color);
						if(flag){
							$goodType.css("background",color);
							$("#good-type i").removeClass("flag");
						}else{
							$petType.css("background",color);
						}
					}
					init();
					//添加小圆点移入事件
					for(let i=0;i<$li.length;i++){
						$li.eq(i).on("mouseenter",function(){
							index=i;
							slider();
						})
					}
					//添加鼠标移入标题栏的事件
					$petType.on("mouseenter",function(){
						flag=false;
						color=$lbt.css("background");
						$goodType.css({"background":"#fff"});
						$("#good-type a").css("color","#000");
						$("#pet-type a").css("color","#fff");
						$petType.css("background",color);
						$("#good-type i").addClass("flag");
						$("#pet-type i").addClass("arrow");
					})
					$goodType.on("mouseenter",function(){
						flag=true;
						color=$lbt.css("background");
						$petType.css("background","#fff");
						$("#good-type a").css("color","#fff");
						$("#pet-type a").css("color","#000");
						$goodType.css("background",color);
						$("#good-type i").removeClass("flag");
						$("#pet-type i").removeClass("arrow");
					})
					//添加鼠标移入大盒子停止轮播
					$("#slider").on("mouseenter",function(){
						clearInterval(timer);
					})
					$("#slider").on("mouseleave",function(){
						autoPlay();
					})
					function init(){
						$li.eq(0).addClass("index");
					}
					function autoPlay(){
						timer=setInterval(function(){
							index++;
							if(index==$li.length){
								index=0;
							}
							slider();
								
						},2000)
					}
					autoPlay();
		
				
				