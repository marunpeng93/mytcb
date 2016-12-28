var express = require("express");
var fs = require('fs');
var bodyParser = require('body-parser');
var app = express();
app.use(express.static('../dist'));
app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("Content-Type", "application/json;charset=utf-8");
    next();
});
app.get("/at/shop/:n",function(req,res){
	res.header("Content-Type", "application/json");
//console.log(req)
	var n= req.params.n;
	fs.readFile("data/"+n+".json",function(err,data){
		if(err){
			res.send("文件不存在")
		}else{
			if(req.query.num){
				var obj = JSON.parse(data)["shop_data"][req.query.num];
				res.send(JSON.stringify(obj))
			}else{
				res.send(data);
			}
		}
	})
})
//app.get("/",function(req,res){
//	console.log(req)
//})
app.listen(4000,function(){
	console.log("启动成功。。。")
});