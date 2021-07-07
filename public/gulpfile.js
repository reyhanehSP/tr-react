"use strict";

// Load plugins
const cp = require("child_process");
const gulp = require("gulp");
const cssnano = require("gulp-cssnano");
const del = require("del");
const eslint = require("gulp-eslint");
const imagemin = require("gulp-imagemin");
const newer = require("gulp-newer");
const plumber = require("gulp-plumber");
const rename = require("gulp-rename");
var sass = require('gulp-sass')(require('sass'));
const concat = require('gulp-concat');
const browsersync = require("browser-sync").create();


// BrowserSync
function browserSync(done) {
    browsersync.init({
        server: {
            baseDir: "./"
        },
        notify:false,
        open: false
    });
    done();
}
// BrowserSync Reload
function browserSyncReload(done) {
    browsersync.reload();
    done();
}

// Clean assets
function clean() {
    return del(["assets/"]);
}

// Optimize Images
function images() {
    return gulp
        .src("assets/app/images/**/*")
        .pipe(newer("assets/app/images"))
        .pipe(
            imagemin([
                imagemin.gifsicle({ interlaced: true }),
                imagemin.optipng({ optimizationLevel: 5 }),
                imagemin.svgo({
                    plugins: [
                        {
                            removeViewBox: false,
                            collapseGroups: true
                        }
                    ]
                })
            ])
        )
        .pipe(gulp.dest("dest/img"));
}

function font() {
    return gulp
        .src("assets/app/fonts/**/*.{eot,svg,ttf,woff,woff2}")
        .pipe(gulp.dest("dest/fonts"))
}

// CSS task
function css() {
    return gulp
        .src(["assets/app/scss/app.scss", "../node_modules/bootstrap/dist/css/bootstrap.css"])
        .pipe(plumber())
        .pipe(sass({ outputStyle: "expanded" }))
        .pipe(rename({ suffix: ".min" }))
        .pipe(cssnano())
        .pipe(concat('./core.min.css'))
        .pipe(gulp.dest("dest/css/"))
        .pipe(browsersync.stream());
}

// Lint scripts
function scriptsLint() {
    return gulp
        .src(["assets/app/js/**/*", "./gulpfile.js"])
        .pipe(plumber())
        .pipe(eslint())
        .pipe(eslint.format())
        .pipe(eslint.failAfterError());
}

// Transpile, concatenate and minify scripts
function scripts() {
    return (
        gulp
            .src(["assets/app/js/**/*"])
            .pipe(plumber())
            // folder only, filename is specified in webpack config
            .pipe(gulp.dest("dest/js/"))
            .pipe(browsersync.stream())
    );
}

// Jekyll
function jekyll() {
    return cp.spawn("bundle", ["exec", "jekyll", "build"], { stdio: "inherit" });
}

// Watch files
function watchFiles() {
    gulp.watch("assets/app/scss/**/*", css);
    gulp.watch("assets/app/fonts/**/*", font);
    gulp.watch("assets/app/js/**/*", gulp.series(scriptsLint, scripts));
    gulp.watch("assets/app/images/**/*", images);
}

// define complex tasks
const js = gulp.series(scriptsLint, scripts);
const build = gulp.series(clean, gulp.parallel(css, images, font ,jekyll, js));
const watch = gulp.parallel(watchFiles, browserSync);

// export tasks
exports.images = images;
exports.font = font;
exports.css = css;
exports.js = js;
exports.jekyll = jekyll;
exports.clean = clean;
exports.build = build;
exports.watch = watch;
exports.default = build;