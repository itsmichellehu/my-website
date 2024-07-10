// Removes any redundant useless CSS properties across multiple html files
// Created on April 28, 2024
// Last updated
// To run script: purgecss --config purgecss.config.js 

// module.exports = {
//     content: ["tastebuds-new.html", "postup-page-v3.html"],
//     css: ["globals-test-output.css"],
//     output: "output"  // This will create an output directory in the same path
//   }  


// module.exports = {
//   content: ["tastebuds-new.html"],
//   css: ["globals-test-output.css"],
//   output: "output"  // This will create an output directory in the same path
// }  

const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const uncss = require('gulp-uncss');

// Task to compile SCSS to CSS
gulp.task('scss', function() {
    return gulp.src('src/scss/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('dist/css'));
});

// Task to run UnCSS on the compiled CSS
gulp.task('uncss', function() {
    return gulp.src('dist/css/**/*.css')
        .pipe(uncss({
            html: ['index.html', 'about.html'] // Add paths to your HTML files here
        }))
        .pipe(gulp.dest('dist/css'));
});

// Default task to run both tasks in sequence
gulp.task('default', gulp.series('scss', 'uncss'));
