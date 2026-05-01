const gulp = require("gulp");
const sass = require("gulp-sass")(require("sass"));
//const imagemin = require("gulp-imagemin");
const uglify = require("gulp-uglify");

const scssFiles = "src/styles/*.scss";

function scripts() {
    return gulp.src("./src/scripts/*.js")
        .pipe(uglify())
        .pipe(gulp.dest("./dist/js"));
}

async function styles() {
  return await gulp.src(scssFiles)
    .pipe(sass({ outputStyle: "compressed" }))
    .pipe(gulp.dest("./dist/css"));
}

function images() {
    return gulp.src("./assets/images/**/*")
        //.piple(imagemin())
        .pipe(gulp.dest("./dist/images"));
}

exports.default = gulp.parallel(styles, images, scripts);

exports.watch = function() {
  gulp.watch(scssFiles, gulp.parallel(styles));
}
