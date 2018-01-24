const config = require('./config');
const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const WebpackConfiguration = require('./webpack-common.config');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const WebpackProductionConfiguration = {

    devtool: false,

    output: {
        path: config.paths.target,
        filename: 'static/js/[name].min.js',
        publicPath: '/'
    },

    plugins: [
        new HtmlWebpackPlugin({
            filename: 'templates/index.html',
            template: 'index.html'
        }),
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.optimize.AggressiveMergingPlugin(),
        new webpack.optimize.ModuleConcatenationPlugin(),
        new webpack.optimize.UglifyJsPlugin({
            sourceMap: true,
            compress: { warnings: true }
        })
    ]

};

module.exports = webpackMerge(WebpackConfiguration, WebpackProductionConfiguration);