const path = require("path")
const webpack = require('webpack')
const htmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

const r = url => path.resolve(__dirname, url)

module.exports = {

    mode: 'development' ,

    devtool: 'eval-source-map' ,

    entry: [
        'webpack-dev-server/client?http://localhost:8080',
        r('./src/index.js')
    ],
    output: {
        path: r('./dist'),
        filename: '[name].js',
        publicPath: '/'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                options: {
                    presets: [
                        'env', 'react'
                    ],
                    cacheDirectory: true,
                }
            }, 
            {
                test: /\.(gif|jpg|png|woff|svg|eot|ttf)\??.*$/,
                loader: `url-loader?limit=500&name=images/[hash:8].[name].[ext]`
            },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: 'css-loader',
                    publicPath: '../'
                })
            },
            {
                test: /\.sass$/,
                loader: 'style-loader!css-loader!sass-loader'
            }
        ]
    },
    plugins: [
        new htmlWebpackPlugin({
            template: './index.tpl.html',
            inject: 'body',
            filename: './index.html',
            chunksSortMode: 'none'
        }),
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('development')
        }),
        new ExtractTextPlugin('css/index.css'),
    ],
    devServer: {
        host: '0.0.0.0',
        disableHostCheck: true,
    },
    performance: {
        hints: false
    },
    resolve: {
        extensions: ['.js', 'config.js', '.json'],
        alias: {
            '@components': path.resolve(__dirname, './src/componens'),
            '@images': path.resolve(__dirname, './src/public/images'),
            '@imagesp': path.resolve(__dirname, './src/public/images/PRetrieval'),
            '@imagesc': path.resolve(__dirname, './src/public/images/CRetrieval'),
            '@fonts': path.resolve(__dirname, './src/public/fonts'),
            '@sass': path.resolve(__dirname, './src/public/sass'),
            '@datep': path.resolve(__dirname, './src/date/p'),
            '@datec': path.resolve(__dirname, './src/date/c'),
            '@date': path.resolve(__dirname, './src/date'),
            '@page': path.resolve(__dirname, './src/page'),
        }
    },
}