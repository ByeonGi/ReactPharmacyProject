var path = require('path');

const webpack = require('webpack');
module.exports ={
    entry : [
        './src/index.js',
        
    ],

    output : {
        path : __dirname  + '/public',
        filename : 'bundle.js'
    },

    module : {
        rules : [
            {
                test : /\.js$/,
                use : ['babel-loader'],
                exclude : /node_modules/,
            },
            {
                test : /\.css$/,
                use:[
                    {loader : 'style-loader'},
                    {loader : 'css-loader'}
                ]
            }
        ]
    },
    plugins : [
        
        new webpack.HotModuleReplacementPlugin()
    ],
    resolve : {
        modules : [
            path.resolve(__dirname, 'src'),
            path.resolve(__dirname, 'node_modules')
        ]
    }
}