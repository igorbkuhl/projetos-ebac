const gulp = require("gulp");
const sass = require("gulp-sass")(require("sass"));

const scssFiles = "src/styles/*.scss";

async function styles() {
  return await gulp.src(scssFiles)
    .pipe(sass({ outputStyle: "compressed" }))
    .pipe(gulp.dest("./dist/css"));
}

exports.default = styles;
exports.watch = async function() {
  await gulp.watch(scssFiles, gulp.parallel(styles));
}
