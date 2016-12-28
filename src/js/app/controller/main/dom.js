define(function(){
		var o = {};
		o.sev = function(a,b){
			o.ul = document.querySelector(a);
			o.main=document.querySelector(b)
			
		}
		o.fn=function(obj){
			var ul =o.ul ;
			var ob = obj["product"] ;
			for(var i = 0;i < ob.length;i++){
				var li = document.createElement("li");
				var img = document.createElement("img");
				img.src = ob[i]["product_img"];
				li.appendChild(img);
				var div1 = document.createElement("div");
				div1.className = "div1";
				var div2 = document.createElement("div");
				div2.className = "div2";
				var p = document.createElement("p");
				p.innerHTML = "<a href="+ob[i]["goumai_order_url"]+">"+ob[i]["product_name"];
				div2.appendChild(p);
				var p = document.createElement("p");
				p.innerHTML = "<span>服务内容：</span>"+ob[i]["service_desc1"];
				div2.appendChild(p)
				div1.appendChild(div2)
				var div3 = document.createElement("div");
				div3.className ="div3"
				var p = document.createElement("p");
				p.innerHTML = "<span>￥</span>"+ob[i]["product_price"];
				div3.appendChild(p)
				div1.appendChild(div3)
				var a = document.createElement("a");
				a.className = "span";
				a.href = ob[i]["goumai_order_url"];
				a.innerHTML = "立即购买";
				div1.appendChild(a)
				li.appendChild(div1)
				ul.appendChild(li);
			}
		}
		o.fun = function(obj){
		var main = o.main;
		main.innerHTML = "<div id='left'>"+
		"<img src="+obj["shop_ico"]+" "+"class='img'/>"+
		"<div id='text'>"+
		"<h2>"+obj["shop_name"]+"</h2>"+
		"<p><span>360担保交易</span><span>无效退款</span><span>先行赔付</span></p>"+
		"<p>联系人："+"李凤东" + "  电话：<span class='color'>" + obj["mobile"]+"</span> <a>查看完整号码></a></p>"+
		"<p>商家地址："+obj["addr_detail"]+" <a> 地图</a></p>"+
		"</div>"+					
		"</div>	"+				
		"<div id='right'>"+			
		"<p><span>分享 </span><span>发至手机 </span><span> 举报</span></p>"+
		"<p>店铺等级：</p>"+
		"<p>最近成交：<span class='color1'>"+111095+"</span> 次   评价：<span>"+109515+"</span> 条</p>"+
		"<p>营业时间： <span>"+"09:00-20:00"+"</span>"  +   "周末正常营业"+"</p>"+
		"</div>";
		var mess = document.querySelector("#message");
		mess.innerHTML = "<h2>店铺详情</h2>"+
						"<p><span>主营:</span>"+obj["main"]+"</p>"+
						"<p><span>服务区域:</span><span class='span'>玉桥</span>"+
							+"<span class='span'>乔庄</span><span class='span'>运河大街</span><span class='span'>梨园</span><span class='span'>东关</span><span class='span'>中仓</span></p>"
						+"<p><span>地址:</span>"+obj["addr"]+"(<a>查看地图</a> )</p>"
						+"<p><span>公告:</span>固态硬盘会大幅提高速度，正在火热更换中</p>";
		o.init([obj[ "map_longitude"],obj["map_latitude"]],obj)
						
	}
		o.init = function(x,obj){
			 var map = new AMap.Map('container', {
	        	center: x,
	        	zoom: 10
	    		});
	    		map.plugin(["AMap.ToolBar"], function() {
	        		map.addControl(new AMap.ToolBar());
	    		});
	    		marker = new AMap.Marker({
			    position: x,
			    title: obj["shop_name"],
			    map: map,
			});
		}
		return o;
	})
	
	