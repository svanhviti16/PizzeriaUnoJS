//var webpack = require('webpack');
var path = require('path');

var parentDir = path.join(__dirname, '../');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    entry: [
        path.join(parentDir, 'App.js')
    ],
    module: {
        rules: [
            { enforce: 'pre', test: /\.js$/, exclude: /node_modules/, use: 'eslint-loader' },
            { test: /\.js$/, exclude: /node_modules/, use: ['babel-loader', 'eslint-loader'] },
            { test: /\.(png|jpg)$/, loader: 'url-loader' },
            { test: /\.less$/, use: [
                { loader: 'style-loader' },
                { loader: 'css-loader' },
                { loader: 'less-loader' },
            ]}
        ],
        loaders: [ 
            { test: /(\.css$)/, loaders: ['style-loader', 'css-loader', 'postcss-loader'] }, 
            { test: /\.(png|jpg|woff|woff2|eot|ttf|svg)$/, loader: 'url-loader?limit=100000' },
            //{ test: /\.(gif|svg|jpg|png)$/,loader: "file-loader"  }  
        ],
    },
    output: {
        path: parentDir + '/dist',
        filename: 'bundle.js',
        devtoolModuleFilenameTemplate: '[absolute-resource-path]'
    },
    devServer: {
        port: 9000,
        open: true,
        compress: true,
        contentBase: parentDir,
        historyApiFallback: true
    },
    devtool: 'source-map',
    plugins: [
        new HtmlWebpackPlugin( { title: 'Redux template', template: './index.html', inject: 'body' })
    ]
}