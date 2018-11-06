var webpack = require('webpack');
var path = require('path');

module.exports = {
    // webpack-dev-server 를 콘솔이 아닌 자바스크립트로 실행할땐 HotReloadingModule를 사용하기 위해서 dev-server 클라이언트와 핫 모듈을 따로 entry에 넣어주어야한다.

    entry : [
        './src/index.js',
        'webpack-dev-server/client?http://0.0.0.0:4000',
        'webpack/hot/only-dev-server',
        './src/style.css'
    ],

    output : {
        path : '/',
        filename : 'bundle.js'
    },

    devServer : {
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
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),
    ],

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
    resolve : {
        modules : [
            path.resolve(__dirname, 'src'),
            path.resolve(__dirname, 'node_modules')
        ]
    }
    //resolve를 추가해주면 React 프로젝트의 루트 디렉토리를 설정하여, 나중에 ./Components로 접근 할 수 있게 해준다.
}