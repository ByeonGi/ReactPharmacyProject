
const HTMLWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports ={
   
    entry :[
        './src/client/index.js',
    ],
    output : {
        path : __dirname + '/public',
        filename : 'bundle.js'
    },
    module : {
        rules :[
            {
                test: /\.js|jsx$/,
                use : {
                    loader:'babel-loader',
                    options:{
                        presets : ['babel-preset-es2015']
                    }
                },
                exclude : /node_modules/,
            },
            {
                test : /\.css$/,
                use :[
                    {loader : 'style-loader'},
                    {loader : 'css-loader'}
                ]
            }
        ]
    },
    plugins : [
        
        new HTMLWebpackPlugin({
            template : './public/index.html'
        }),
        new webpack.HotModuleReplacementPlugin()
    
    ]
}