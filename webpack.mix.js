const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.scripts([
        'resources/js/jquery.min.js',
        'resources/js/bootstrap.min.js',
        'resources/js/jquery.easing.min.js',
        'resources/js/jquery.lettering.js',
        'resources/js/jquery.marquee.js',
        'resources/js/jquery.textillate.js',
        'resources/js/slick.min.js',
        'resources/js/TweenMax.min.js',
        'resources/js/appear.min.js',
        'resources/js/lity.js',
    ], 'public/js/all.js')
    .styles('resources/css/animate.css', 'public/css/animate.css')
    .styles('resources/css/bootstrap.min.css', 'public/css/bootstrap.min.css')
    .styles('resources/css/font-awesome.min.css', 'public/css/font-awesome.min.css')
    .styles('resources/css/lity.css', 'public/css/lity.css')
    .styles('resources/css/style.css', 'public/css/style.css')
    .styles('resources/css/slick.css', 'public/css/slick.css')
;
