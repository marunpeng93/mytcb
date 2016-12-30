define(function(){
	return function(x,o,num){
			 var map = new AMap.Map('container', {
            	center: x,
            	zoom: 10
        });
        map.plugin(["AMap.ToolBar"], function() {
            map.addControl(new AMap.ToolBar());
        });
        for(var j = 0;j <o.length;j++){
        	var div = document.createElement("div");
        	var img = document.createElement("img");
        	img.src = "img/qi.png"
        	img.style.width="32px";
        	if(j == num){
        		img.src = "img/bj.jpg";
        	}
        	div.appendChild(img)
	        var content = document.createElement('div');
	    	content.className = 'merchant';
	    	var p = document.createElement('p');
	    	p.innerHTML = o[j]["shop_name"];
	    	var span = document.createElement("span");
	    	span.innerHTML = "×";
	    	p.appendChild(span)
	    	content.appendChild(p); 
	    	var p = document.createElement('p');
	    	p.innerHTML = "主营："+o[j]["main"];
	    	content.appendChild(p);
	    	var p = document.createElement('p');
	    	p.innerHTML = "地址："+o[j]["addr"];
	    	content.appendChild(p);
	    	div.appendChild(content)
	    	var a = document.createElement("a");
	    	a.href = o[j]["shop_addr"];
	    	a.innerHTML = '进入店铺...'
	    	p.appendChild(a);
	    	marker = new AMap.Marker({
			    position: [o[j][ "map_longitude"],o[j]["map_latitude"]],
			    title: o[j]["shop_name"],
			    map: map,
			    content: div,
			    topWhenClick:true,
			});
			img.onclick = function(){
				var div = document.querySelectorAll(".merchant");
				for(var j = 0;j < div.length;j++){
					div[j].style.display ="none";
				}
				this.parentNode.querySelector("div").style.display = "block"
			}
			span.onclick = function(){
				this.parentNode.parentNode.style.display = "none"
			}
        	}
		}
})