function animate(ele,property,callBack){
	/*
	 * callBack = function(){alert("到达目标值了");
	 */
	clearInterval(ele.timer);
    ele.timer = setInterval(function(){
    	var flag = true;//所有的属性都到达了目标值
    	for(var attr in property){
    		//console.log(attr);
            var current = 0;
            if(attr == "opacity"){
            	current = getStyle(ele,attr)*100;
            }else{
            	current = parseInt(getStyle(ele,attr));
            }
            var speed = (property[attr] - current) / 10;
            
            speed = speed > 0 ?  Math.ceil(speed) : Math.floor(speed);
            if(property[attr] != current){//表示属性没有到达目标值 。将flag设置false;
            	flag = false;
            }
            if(attr == "opacity"){//这一段代码不应该在这里操作
        		ele.style[attr] = (current + speed)/100;
        	}else if(attr == "zIndex"){
        		ele.style[attr] = property[attr];
        	}else{
        		ele.style[attr] = current + speed + "px";
        	}
    	}
    	if(flag){//所有属性都到达了目标值
    		//清除定时器
    		clearInterval(ele.timer);
    		//执行个回调函数
    		//如果在调用animate的时间没有传递实参callBack，
    		//这时的callBack是一个undefined，
        		if(callBack){
        			callBack();
        		}
        	}
        },10)
    }
   
	function getStyle(ele,attr){
		if(window.getComputedStyle){//现代浏览器
		return window.getComputedStyle(ele,null)[attr];
	}else{//ie8
		return ele.currentStyle[attr];
	}
}