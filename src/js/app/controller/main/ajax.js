define(function(){
	var o ={};
	o.baseURL = null;
	o.request = function(way,add,obj,fun){
			var that = o;
			var xhr = that.createXHR();
			xhr.open(way,that.baseURL+add);
			xhr.send(obj);
			xhr.onreadystatechange = function(){
				if(this.readyState==4){
					if(this.status==200||this.status==304){
							var objx = JSON.parse(this.responseText);
							fun(objx)
				}}
			}
	};
	o.createXHR = function(){
		//如果浏览器支持XMLHttpRequest那么直接创建返回该对象
		if (typeof XMLHttpRequest != 'undefined'){
			return new XMLHttpRequest();
		}else if(typeof ActiveXObject != 'undefined'){
			if (typeof arguments.callee.activeXString != 'string'){
				var versions = ['MSXML2.XMLHttp.6.0', 'MSXML2.XMLHttp.3.0','MSXML2.XMLHttp'];
				for(var i = 0; i < versions.length;i++){
					try{
						new ActiveXObject(versions[i]);
						arguments.callee.activeXString = versions[i]
					}catch(e){

					}
				}
			}
			return new ActiveXObject(arguments.callee.activeXString);
		}else{
			throw new Error("没法正常的创建ajax对象");
		}
	}
	return o;
})