const webpack = require('webpack');

module.exports = function (config) {
    var _config = {
        basePath: '',

        frameworks: ['jasmine'],

        files: [
            {pattern: './node_modules/jquery/dist/jquery.js', watched: false},
            {pattern: './node_modules/materialize-css/dist/js/materialize.js', watched: false},
            {pattern: './karma-test-shim.js', watched: false}
        ],

        preprocessors: {
            './karma-test-shim.js': ['webpack', 'sourcemap']
        },

        webpack: require('./webpack.test.config.js'),

        reporters: ['progress', 'coverage-istanbul'],
        port: 9876,
        colors: true,
        logLevel: config.LOG_DEBUG,
        autoWatch: false,
        browsers: ['PhantomJS'],
        client: {
            captureConsole: true
        },
        singleRun: true,

        // Webpack std out off
        webpackServer: {noInfo: true},

        phantomjsLauncher: {
            // Have phantomjs exit if a ResourceError is encountered (useful if karma exits without killing phantom)
            exitOnResourceError: true
        },

        coverageIstanbulReporter: {
            reports: ['html', 'text-summary'],
            fixWebpackSourcePaths: true
        }
    };

    config.set(_config);
};
