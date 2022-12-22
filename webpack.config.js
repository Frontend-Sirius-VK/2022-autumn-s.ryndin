const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'main.[hash:8].js',
        publicPath: '/',
        clean: true,
    },
    module: {
        rules: [
            { test: /\.css$/, use: ['style-loader', 'css-loader'] },
            { test: /\.handlebars$/, loader: 'handlebars-loader' },
            { test: /\.(jpeg|png)$/, type: 'asset/resource' }
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx', '.css'],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, './src/index.html'),
        })
    ],
    devServer: {
        proxy: {
            '/api': 'http://127.0.0.1:3030',
        },
        historyApiFallback: true
    }
};