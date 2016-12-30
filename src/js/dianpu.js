define(["app/util/ajax","app/controller/main/dom"],function(a,b){
	a.baseURL = "http://localhost:4000";
	var href = location.href
		href = href.split("?")[1].split("&");
		var con = {};
		for(var i = 0;i<href.length;i++){
			var arr = href[i].split("=");
			con[arr[0]]=arr[1];
		}
		b.sev("#goods_lis","#main")
		a.request("get","/at/shop/"+con["index"]+"?"+"num="+con["num"],null,b.fun);
		a.request("get","/at/shop/"+con["form"],null,b.fn);
		window.suggest=function(data){
			console.log(data)
			var ul = document.querySelector("#seek ul");
			var div = document.querySelector("#seek");
			ul.remove();
			data=data["result"]
			var ul = document.createElement("ul");
			for(var i = 0;i <data.length;i++){
				var li = document.createElement("li");
				li.innerHTML=data[i]["word"];
				ul.appendChild(li)
			}
			div.appendChild(ul)
		}
	var inp = document.querySelector("#search");
	inp.oninput = function(){
		var sc = document.querySelector("#script");
		var sc = document.createElement("script");
		sc.src = "http://suggest.bang.360.cn/suggest?word="+
		this.value+"&category=7&encodein=utf-8&encodeout=utf-8&format=json&callback=window.suggest&t=0.3514809920297852";
		document.body.appendChild(sc);	
	}
})