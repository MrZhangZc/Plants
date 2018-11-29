const webpack = require('webpack')
const library = '[name]_lib'
const path = require('path')
const r = url => path.resolve(__dirname, url)

module.exports = {
    entry: {
        vendors: ['react', 'antd-mobile']
    },

    output: {
        filename: '[name].dll.js',
        path: r('./dist'),
        library
    },

    plugins: [
        new webpack.DllPlugin({
            path: path.join(__dirname, 'dist/[name]-manifest.json'),
            // This must match the output.library option above
            name: library
        }),
    ],
}