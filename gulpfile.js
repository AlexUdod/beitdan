"use strict";

var gulp = require("gulp");
var sass = require('gulp-sass');
var server = require('browser-sync').create();
var del = require("del");
var posthtml = require("gulp-posthtml"); // work HTML changes
var include = require("posthtml-include"); //include SVG sprites
var csso = require("gulp-csso"); //minification CSS
var rename = require("gulp-rename"); //rename .min
var postcss = require("gulp-postcss");
var autoprefixer = require("autoprefixer");

var concat = require('gulp-concat'); //JS склейка

// delete

gulp.task("clean", function() {
  return del("build");
});

// копирывание

gulp.task("copy", function(){
  return gulp.src([
    "app/fonts/**/*.{woff, woff2}",
    "app/img/**",
    // "app/js/**",
    "app/*.ico",
    "app/*.html"
    ], {
      base: "app"
    })
    .pipe(gulp.dest("build"));
});


gulp.task('sass', function() {
  return gulp.src('app/sass/style.scss')
	// return gulp.src('app/sass/**/*.scss')
	.pipe(sass())
  .pipe(postcss([autoprefixer()]))
  .pipe(csso())
  .pipe(rename("style.min.css"))
	.pipe(gulp.dest('build/css'))
	.pipe(server.stream());
});

gulp.task("html", function () {
  return gulp.src("app/*.html")
  .pipe(posthtml(
    [    include()]
    ))
    .pipe(gulp.dest("build"));
});

gulp.task("scripts", function() {
  return gulp.src('app/js/*.js') // путь к папке со скриптами
   // .pipe(concat('all.js')) // в какой файл объединить
   .pipe(gulp.dest('./build/js'));
});

gulp.task("server", function () {
  server.init({
    server: "build/",
    notify: false,
    open: true,
    cors: true,
    ui: false
  });

  gulp.watch("app/sass/**/*.{scss,sass}", gulp.series("sass"));
  gulp.watch("app/js/**/*.js", gulp.series("html", "sass", "copy","scripts", "refresh"));
  gulp.watch("app/*.html", gulp.series("html", "refresh"));
});

gulp.task("refresh", function(done) {
  server.reload();
  done();
});

gulp.task("build", gulp.series("clean","copy","sass", "html", "scripts"));
gulp.task("start", gulp.series("build", "server"));

