define(function(){
	var obj = {};
	obj.imgs = null;
	obj.timer = null;
	obj.num = 0;
	obj.a = 0;
	obj.lis = null;
	obj.lunbo = function(){
		var that = obj;
		that.imgs.style.transition="all 0s";
		that.timer = setInterval(function(){
			that.a+=5;
			/*console.log(that.a)*/
			if(that.a >= that.lis.length*100){
				that.a = 0;
			}
			if(that.a%100 == 0){
				that.num = that.a/100;
				clearInterval(that.timer);
				that.timer = setTimeout(that.lunbo,1000)
			}
			that.imgs.style.marginLeft = - that.a + '%';
			that.changColor();
		},30)
	}
	obj.changColor = function(){
		var that = obj;
		for(var i = 0 ;i < that.lis.length;i++){
				that.lis[i].style.background = "#ccc"
		}
			that.lis[that.num].style.background="#333"
	}
	obj.click = function(){
		var that = obj;
		for(var j = 0;j < that.lis.length;j++){
			that.lis[j].index=j;
			that.lis[j].onclick = function(){
				clearInterval(that.timer)
				that.imgs.style.transition="all 0.6s";
				that.num = this.index;
				that.a = that.num*100;
				that.imgs.style.marginLeft = - that.a+"%";
				that.changColor()
				that.timer = setTimeout(that.lunbo,2500)
			}
		}

	}
	obj.star = function(img,li){
		this.imgs = document.querySelector(img);
		this.lis = document.querySelectorAll(li);
		this.lunbo();
		this.changColor();
		obj.click();
	}
	return obj;
})