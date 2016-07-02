var webpack = require('karma-webpack');

module.exports = function(config) {
    config.set({
        frameworks: ['jasmine'],
        files: [
            '../tests/**/*_spec.js',
        ],
        plugins: [webpack, 'karma-jasmine', 'karma-phantomjs-launcher', 'karma-coverage', 'karma-spec-reporter', 'es6-shim'],
        browsers: ['PhantomJS'],
        preprocessors: {
            '**/*_spec.js': ['webpack'],
            'src/**/*.js': ['webpack']
        },
        reporters: ['spec', 'coverage'],
        coverageReporter: {
            dir: '../tests/reports/coverage',
            reporters: [{
                type: 'html',
                subdir: 'report-html'
            }]
        },
        webpack: {
            module: {
                loaders: [{
                    test: /\.(js|jsx)$/,
                    exclude: /(bower_components|node_modules)/,
                    loader: 'babel-loader'
                }],
            }
        },
        colors: true,
        webpackMiddleware: {
            noInfo: true
        },
    });
};