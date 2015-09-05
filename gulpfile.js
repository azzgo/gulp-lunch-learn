var gulp = require('gulp');
var jasmine = require("gulp-jasmine");
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var livereload = require('gulp-livereload');

gulp.task("test", function() {
    gulp.src("test/*.js").
        pipe(jasmine());
});

gulp.task("minify", function() {
    gulp.src("./main/*.js")
        .pipe(concat("min.js"))
        .pipe(uglify())
        .pipe(gulp.dest("./main/dest/"));
});

gulp.task("watchTest", function(argument) {
    var watch = gulp.watch(["main/*.js", "test/*.js"], ['test']);
    watch.on("change", function(event) {
        console.log("File" + event.path + "was" + event.type + "test task reruning...");
    })
});

gulp.task("watchUglify", function() {
    var watch = gulp.watch(["main/*.js"], ['minify']);
    watch.on("change", function(event) {
        console.log("File" + event.path + "was" + event.type + "minify task reruning...");
    })
});

gulp.task("livereload", function() {
    livereload.listen();
    gulp.watch(["./impress/css/*.css", "./impress/js/*.js", "./impress/index.html"], function(event) {
        gulp.src(event.path).pipe(livereload())
    });
})
