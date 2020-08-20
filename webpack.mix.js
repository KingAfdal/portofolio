const mix = require('laravel-mix');

mix.js('output.css', [
    require('tailwindcss')
])
    .sass('src/app.scss')
    .option({
        autoprefixer: {
            option: {
                browser: [
                    "last 5 version",
                ]
            }
        }
    })
    .setPublicPath('index');