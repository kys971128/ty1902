let gulp=require("gulp"),
	// uglify=require("gulp-uglify"),
	rename=require("gulp-rename"),
	concat=require("gulp-concat"),
	imagemin=require("gulp-imagemin"),
	sass=require("gulp-sass"),
	cleancss=require("gulp-clean-css");
	
gulp.task("css",function(){
	return gulp.src("./src/sass/index.scss")
	.pipe(rename("index2.css"))
	.pipe(sass({outputStyle:"expanded"}))
	.pipe(gulp.dest("./css"))
})
gulp.task("default",function(){
	gulp.watch("./src/sass/*.scss",["css"]); 
})