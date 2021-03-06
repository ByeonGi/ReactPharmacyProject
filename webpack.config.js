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
    devServer:{
        hot : true,
        filename : 'bundle.js',
        publicPath : '/',
        historyApiFallback : true,
        contentBase : './public',
        // 모든 요청을 ㅡ로기로 돌려서 express의 응답을 받아오며
        // bundle 파일을 경우엔 우선권을 가져서 devServer의 스크립트를 사용하게 된다.
        proxy : {
            "**" : "http://localhost:3000"// express 서버 주소
        },
        stats : {
            assets : false,
            colors : true,
            version : false,
            hash : false,
            timings : false,
            chunks : false,
            chunkModules : false
        }
    },
    plugins : [
        new webpack.HotModuleReplacementPlugin(),
    ],
    resolve : {
        modules : [
            path.resolve(__dirname, 'src'),
            path.resolve(__dirname, 'node_modules')
        ]
    }
}