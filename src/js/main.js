

/*require(["app/lunbo","app/ajax","app/shouye"],function(a,b,c){
		a.star("#imgs","#lunbo li");
		b.baseURL = "http://localhost:4000";
		c.data("#shop","#ul li")
		b.request("get","/at/shop/"+1,null,c.fun);
		c.click(b.request);
		c.mape("#map","#ditu");
		c.xiaoshi("#guanbi","#ditu")
})
*/

//加载依赖的公共配置模块
requirejs(['common'], function(c){
	requirejs(['app/controller/mainCtrl']);
});
