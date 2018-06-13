const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    mode: 'development',
    context: path.resolve(__dirname, 'src'),
    entry: ["./index.js", "./index.html"],
    output: {
        path: path.join(__dirname, 'dist'),
        filename: "bundle.js",
    },
    watch: true,
    module: {
        rules: [{
            test: /\.scss$/,
            loader: 'style-loader!css-loader!sass-loader',
        },  {
            test: /\.(png|jpg|gif)$/,
            use: [
                {
                    loader: 'file-loader',
                    options: {
                        limit: 8192
                    }
                }
            ]
        }, {
            test: /\.(html)$/,
            use: {
                loader: 'html-loader',
                options: {

                }
            }
        }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({template: "./index.html", inject: true,}),
    ],
};