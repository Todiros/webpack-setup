const path = require('path')
const HtmlWebPackPlugin = require("html-webpack-plugin")

module.exports = {
    entry: './src/app.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
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
        }]
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: "./src/index.html",
            filename: "./index.html"
        })
    ]
}