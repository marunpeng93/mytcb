//引入模块
var gulp= require("gulp"),
	liverload = require("gulp-livereload"),
	webserver = require("gulp-webserver"),
	uglify = require("gulp-uglify"),
	rename = require("gulp-rename"),
	sass = require("gulp-ruby-sass"),
	imagemin = require("gulp-imagemin"),
	pngquant = require("imagemin-pngquant"),
	concat = require("gulp-concat")
//注册任务
gulp.task("webserver",function(){
	gulp.src("dist").pipe(webserver({
		liverload:true,
		open:true
	}))
})
gulp.task("html",function(){
	gulp.src("src/**/*.html").pipe(gulp.dest("dist"))
})
gulp.task("ys",function(){
	return gulp.src("src/js/**/*.js")
	.pipe(uglify({preserveComments:'some'}))
	.pipe(gulp.dest("dist/js"))
})
gulp.task("sass",function(){
	return sass("src/css/*.scss",{style:"compact"})
	.on('error',function(err){
		console.log(err.message)
	})
	.pipe(gulp.dest("dist/css"))
})
gulp.task("images",function(){
	return gulp.src("src/img/**/*.{png,jpg,gif,svg}")/*.pipe(imagemin({
		progressive:true,
		svgoPlugins:[{removeViewBox:false}],
		use:[pngquant()]
	}))*/.pipe(gulp.dest('dist/img'))
})
gulp.task("concat",function(){
	gulp.src("dist/js/**/*.js")
	.pipe(concat("libs.js"))
	.pipe(gulp.dest("dist/js"))
})
gulp.task("watch",function(){
	gulp.watch("*.js")
});
gulp.task("default",["webserver","sass","concat","images","html",'ys',"watch"]);