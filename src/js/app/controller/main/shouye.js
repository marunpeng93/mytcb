define(function(){
	var obj = {};
		this.shop=null;
		this.uls = null;
		this.lis = null;
		obj.data = function(a,c){
			this.shop=document.querySelector(a);
			this.lis = document.querySelectorAll(c);
		}
		obj.changColor=function(){
			for(var i = 0;i < this.lis.length;i++){
				this.lis[i].style.background = "#fff"
			}
		}
		obj.click = function(request){
			var that = this;
			for(var i = 0;i < this.lis.length;i++){
				this.lis[i].index = i+1;
				this.lis[i].onclick = function(){
					that.changColor();
					this.style.background = "#fc6621"
					request("get","/at/shop/"+this.index,null,that.fun)
				}
			}
		}
		obj.fun = function(o){
			var ob = o["shop_data"]
			var shop = obj.shop;
			var ul= document.querySelector("#shop_main");
				if(ul){
					ul.remove();
				}
			var ul = document.createElement("ul");
			ul.id = "shop_main";
			var lis = document.querySelectorAll("#ditu li")
			for(var i = 0;i < ob.length;i++){
				var li = document.createElement("li");
				var img = document.createElement("img");
				img.src = ob[i]["shop_ico"];
				li.appendChild(img);
				var div1 = document.createElement("div");
				div1.className = "div1";
				var div2 = document.createElement("div");
				div2.className = "div2";
				var p = document.createElement("p");
				p.innerHTML = "<a href="+ob[i]["shop_addr"]+">"+ob[i]["shop_name"]+"</a><span>店铺等级：</span>";
				div2.appendChild(p);
				var p = document.createElement("p");
				p.innerHTML = "主营："+ob[i]["main"];
				div2.appendChild(p)
				var p = document.createElement("p");
				p.innerHTML = "地址："+ob[i]["addr"];
				div2.appendChild(p)
				div1.appendChild(div2)
				var div3 = document.createElement("div");
				div3.className ="div3"
				var p = document.createElement("p");
				p.innerHTML = "先行赔付";
				div3.appendChild(p)
				var p = document.createElement("p");
				p.innerHTML = "同城帮认证";
				div3.appendChild(p)
				var p = document.createElement("p");
				p.innerHTML = "人气："+ob[i]["shop_visit"]+"次浏览";
				div3.appendChild(p)
				div1.appendChild(div3)
				var a = document.createElement("a");
				a.className = "span";
				a.href = ob[i]["shop_addr"];
				a.innerHTML = "进入店铺";
				div1.appendChild(a)
				li.appendChild(div1)
				ul.appendChild(li);
				(function(x,b,c){
					lis[i].onclick = function(){
						var div = document.querySelectorAll(".merchant")
						obj.init(x,ob,c)
						for(var j = 0;j < lis.length;j++){
							lis[j].style.backgroundColor = "#fff"
							div[j].style.display ="none";
						}
						this.style.backgroundColor = "#fc6621"
					}
				})([ob[i][ "map_longitude"],ob[i]["map_latitude"]],ob,i)
			}
			shop.appendChild(ul)
			obj.init([ob[0][ "map_longitude"],ob[0]["map_latitude"]],ob);
		}
		obj.init = function(x,o,num){
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
			    content: div
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
		obj.mape = function(a,b){
    		document.querySelector(a).onclick = function(){
    			document.querySelector(b).style.display = "flex"
    		}
    	}
		obj.xiaoshi = function(a,b){
			document.querySelector(a).onclick=function(){
				document.querySelector(b).style.display = "none"
			}
		}
		return obj;
})