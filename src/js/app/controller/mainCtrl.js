
//定义主页面控制器
define(["./main/lunbo","../util/ajax","./main/shouye"], function(a,b,c){
	a.star("#imgs","#lunbo li");
	b.baseURL = "http://localhost:4000";
	c.data("#shop","#ul li")
	b.request("get","/at/shop/"+1,null,c.fun);
	c.click(b.request);
	c.mape("#map","#ditu");
	c.xiaoshi("#guanbi","#ditu")
})
