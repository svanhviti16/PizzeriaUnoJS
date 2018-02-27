//var webpack = require('webpack');
var path = require('path');

var parentDir = path.join(__dirname, '../');

module.exports = {
    entry: [
        path.join(parentDir, 'App.js')
    ],
    module: {
        rules: [
            { enforce: 'pre', test: /\.js$/, exclude: /node_modules/, use: 'eslint-loader' },
            { test: /\.js$/, exclude: /node_modules/, use: ['babel-loader', 'eslint-loader'] },
            { test: /\.png$/, loader: 'url-loader' },
            { test: /\.less$/, use: [
                { loader: 'style-loader' },
                { loader: 'css-loader' },
                { loader: 'less-loader' },
            ]}
        ],
        loaders: [ 
            { test: /(\.css$)/, loaders: ['style-loader', 'css-loader', 'postcss-loader'] }, 
            { test: /\.(png|woff|woff2|eot|ttf|svg)$/, loader: 'url-loader?limit=100000' },
            //{ test: /\.(gif|svg|jpg|png)$/,loader: "file-loader"  }  
        ],
    },
    output: {
        path: parentDir + '/dist',
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: parentDir,
        historyApiFallback: true
    }
}