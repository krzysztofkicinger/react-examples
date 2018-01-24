const _ = require('lodash');
const config = require('./config');
const webpack = require('webpack');
const DefinePlugin = require('webpack').DefinePlugin;
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const globalStylesExtractTextPlugin = new ExtractTextPlugin("static/css/styles.css");
const componentStylesExtractTextPlugin = new ExtractTextPlugin("static/css/component-styles.css");

module.exports = {

    context: config.paths.main,
    entry: {
        main: './app/app.jsx',
        assets: './assets.js',
        styles: './styles.js'
    },

    resolve: {
        extensions: ['.webpack.js', 'web.js', '.js', '.jsx']
    },

    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: [/node_modules/],
                use: {
                    loader: `babel-loader`,
                    options: {
                        presets: ['react', 'es2015', 'stage-1']
                    }
                }
            },
            {
                test: /\.css$/,
                use: globalStylesExtractTextPlugin.extract("css-loader")
            },
            {
                test: /\.pcss$/,
                include: config.paths.main,
                use: ['style-loader', 'postcss-loader']
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: {
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                        outputPath: 'static/img/'
                    }
                }
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: {
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                        outputPath: 'static/fonts/'
                    }
                }
            },
            {
                test: /\.html/,
                use: 'html-loader'
            }
        ]
    },

    plugins: [
        new CopyWebpackPlugin([
            // {
            //     from: '../main/assets/css/fonts.css',
            //     to: 'static/css/fonts.css'
            // }
        ]),
        new DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: ["vendor"],
            minChunks: module => /node_modules/.test(module.resource)
        }),
        globalStylesExtractTextPlugin,
        componentStylesExtractTextPlugin
    ]

};