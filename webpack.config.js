const path = require('path')

module.exports = {
    entry: './src/app.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/dist'
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
            use: { loader: 'babel-loader' }
        }]
    }
}