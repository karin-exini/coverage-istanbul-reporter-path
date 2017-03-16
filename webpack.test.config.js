var path = require('path'),
    webpack = require('webpack');

module.exports = {
    devtool: 'inline-source-map',

    resolve: {
        root: path.resolve(__dirname, 'client'),
        modulesDirectories: ['node_modules'],
        extensions: ['', '.ts', '.js', '.json', '.css', '.html']
    },

    module: {
        preLoaders: [
            {
                test: /\.min\.js$/,
                loader: 'source-map'
            }
        ],
        loaders: [
            {
                test: /\.ts$/,
                loaders: [
                    'awesome-typescript-loader?sourceMap',
                    'angular2-template-loader',
                    'angular-router-loader'
                ],
                exclude: [/node_modules/]
            },
            {
                test: /\.css$/,
                loader: 'skip'
            },
            {
                test: /\.html$/,
                loader: 'html'
            },
            {
                test: /\.json$/,
                loader: 'json'
            }
        ],
        postLoaders: [
            {
                test: /\.ts$/,
                loader: 'istanbul-instrumenter-loader',
                exclude: [
                    'node_modules',
                    /\.spec\.ts$/
                ]
            }
        ]
    },

    tslint: {
        emitErrors: true,
        failOnHint: false
    }
};