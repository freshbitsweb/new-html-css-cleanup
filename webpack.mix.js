const mix = require('laravel-mix');
let purgeCss = require('purgecss-webpack-plugin');
let glob = require('glob-all');

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
    .postCss('resources/css/animate.css', 'public/css/animate.css')
    .postCss('resources/css/bootstrap.min.css', 'public/css/bootstrap.min.css')
    .postCss('resources/css/font-awesome.min.css', 'public/css/font-awesome.min.css')
    .postCss('resources/css/lity.css', 'public/css/lity.css')
    .postCss('resources/css/style.css', 'public/css/style.css')
    .postCss('resources/css/slick.css', 'public/css/slick.css')
    .options({
        processCssUrls: false
    })
;

function collectWhitelist() {
    return ['lity-iframe', 'lity-container', 'lity-youtube', 'lity-container', 'lity-vimeo', 'lity-container', 'lity-facebookvideo', 'lity-container', 'lity-googlemaps', 'lity-container'];
}

mix.webpackConfig({
    plugins: [
        new purgeCss({
            paths: glob.sync([
                path.join(__dirname, 'resources/views/**/*.blade.php'),
                path.join(__dirname, 'resources/js/**/*.js')
            ]),
            whitelist: collectWhitelist,
            extractors: [{
                extractor: class {
                    static extract(content) {
                        return content.match(/[A-z0-9-:\/]+/g)
                    }
                },
                extensions: ['html', 'js', 'php', 'vue']
            }]
        })
    ]
})
