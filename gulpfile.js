"use strict";

//******************************************************************************
//* DEPENDENCIES
//******************************************************************************
var gulp        = require("gulp"),
    //browserify  = require("browserify"),
    //source      = require("vinyl-source-stream"),
    //buffer      = require("vinyl-buffer"),
    //tslint      = require("gulp-tslint"),
    //tsc         = require("gulp-typescript"),
    //sourcemaps  = require("gulp-sourcemaps"),
    //uglify      = require("gulp-uglify"),
    //runSequence = require("run-sequence"),
    //mocha       = require("gulp-mocha"),
    //istanbul    = require("gulp-istanbul"),
    //browserSync = require('browser-sync').create(), 
    del = require('del'),
    debug = require('gulp-debug');

gulp.task('lib', function () {
    gulp.src(["node_modules/@infor/sohoxi/dist/css/*.css"]).pipe(debug({ title: 'css:' })).pipe(gulp.dest('sohoxi/css'));
    gulp.src(['node_modules/@infor/sohoxi/dist/js/sohoxi*.*']).pipe(debug({ title: 'soho:' })).pipe(gulp.dest('sohoxi/js'));
    gulp.src(['node_modules/@infor/sohoxi/dist/js/jquery-3.0.0-*']).pipe(gulp.dest('sohoxi/js'));
    gulp.src(['node_modules/@infor/sohoxi/dist/js/cultures/*.js']).pipe(gulp.dest('sohoxi/js/cultures'));
    gulp.src(['node_modules/@infor/sohoxi/dist/svg*.*']).pipe(gulp.dest('sohoxi/'));

});


gulp.task('clean', function () {
    return del(['sohoxi/**/*']);
});

gulp.task('default', ['lib'], function () {
});
