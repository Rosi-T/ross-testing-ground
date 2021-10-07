const { src, dest, watch, series } = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const babel = require('gulp-babel');
const terser = require('gulp-terser');
const browsersync = require('browser-sync').create();

sass.compiler = require('dart-sass');

// Sass Task
function scssTask() {
    return src('app/scss/style.scss', { sourcemaps: true })
    .pipe(sass())
    .pipe(postcss([autoprefixer(), cssnano()]))
    .pipe(dest('dist', {sourcemaps: '.'}));
}

// JavaScript Task
function jsTask() {
    return src('app/js/script.js', {sourcemaps: true})
    .pipe(babel({presets:['@babel/preset-env']}))
    .pipe(terser())
    .pipe(dest('dist', { sourcemaps: '.' }));
}

// Browsersync Tasks
function browsersyncServe(cb) {
    browsersync.init({
        // proxy: "dev.animalshub.local",
        // hostname: "dev.animalshub.local",
        // port: 3000,

        server: {
            baseDir: '.'
        }
      });
    cb();
}

function browsersyncReload(cb) {
    browsersync.reload();
    cb();
}

// Watch Task
function watchTask(){
    watch('*.html', browsersyncReload);
    watch(['app/scss/**/*.scss', 'app/js/**/*.js'], series(scssTask, jsTask, browsersyncReload));
}

// Default Gulp Task
exports.default = series(scssTask, jsTask, browsersyncServe, watchTask);

// Build Gulp Task
exports.build = series(scssTask, jsTask);
