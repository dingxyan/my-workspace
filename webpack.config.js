const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	// devtool: 'eval-source-map',
	entry:  __dirname + "/src/main.js",//唯一入口文件
	output: {
	  path: __dirname + "/build",//打包后的文件存放的地方
	  filename: "bundle.js"//打包后输出文件的文件名
	},
	devServer: {
	  contentBase: "./build",//本地服务器所加载的页面所在的目录
	  inline: true,//实时刷新
	  port: 3000
	},
	module: {
        rules: [
            {
                test: /(\.jsx|\.js)$/,
                use: {
                    loader: "babel-loader"
                },
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: "style-loader"
                    }, {
                        loader: "css-loader"
                    }
                ]
            },
            {
              test: /\.less$/,
              loader: 'style-loader!css-loader!less-loader'
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: __dirname + "/src/index.html"//插件，用于生成与入口js同名html，并且修改源码立刻生效
        })
    ],
    resolve: {
        alias: {
          'vue': 'vue/dist/vue.esm.js' 
        }
    }
}