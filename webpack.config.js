const path = require('path')
const HtmlWebpackPlugin = require("html-webpack-plugin")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const CleanWebpackPlugin = require('clean-webpack-plugin')
const WebpackMd5Hash = require('webpack-md5-hash')

module.exports = {
    entry: './src/app.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].[chunkhash].js'
    },
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        port: 3001
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node-modules/,
            use: { 
                loader: 'babel-loader',
                options: { presets: ['@babel/preset-env']} 
            }
        },
        {
            test: /\.html$/,
            use: { loader: 'html-loader'}
        },
        {
            test: /\.sass$/,
            use: ['style-loader', MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader', 'sass-loader']    
        }]
    },
    plugins: [
        new CleanWebpackPlugin('dist', {}),
        new MiniCssExtractPlugin({
            filename: 'style.[contenthash].css'
        }),
        new HtmlWebpackPlugin({
            hash: true,
            template: "./src/index.html",
            filename: "./index.html"
        }),
        new WebpackMd5Hash()
    ]
}