const config = require('./config');
const webpackMerge = require('webpack-merge');
const WebpackConfiguration = require('./webpack-common.config');
const CleanPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const WebpackDevelopmentConfiguration = {

    devtool: 'source-map',

    devServer: {
        historyApiFallback: true
    },

    output: {
        path: config.paths.public,
        filename: 'static/js/[name].js',
        publicPath: '/'
    },

    plugins: [
        new HtmlWebpackPlugin({
            filename: './index.html',
            template: 'index.html'
        }),
        new CleanPlugin([ config.paths.public ])
    ]
};

module.exports = webpackMerge(WebpackConfiguration, WebpackDevelopmentConfiguration);