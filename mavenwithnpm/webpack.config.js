//const CopyWebpackPlugin = require('copy-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: {
        app: './src/main/js/app.js'
    },
    output: {
        path: __dirname + '/src/main/webapp',
        filename: '[name].js'
    },
//    optimization: {
//        splitChunks: {
//            chunks: 'all'
//        }
//    },
    plugins: [
        new CleanWebpackPlugin()
    ]
};