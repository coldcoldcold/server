var path = require('path');
module.exports = {
    target: 'node',
    entry: './src/app.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
        loaders: [{
            test: /\.js$/, //处理以.js结尾的文件
            exclude: /node_modules/, //处理除了nodde_modules里的js文件
            loader: 'babel-loader' //用babel-loader处理
        }]
    }
}