const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const API_ENDPOINT = process.env.API_ENDPOINT || 'http://127.0.0.1:5000'
const WS_ENDPOINT = process.env.WS_ENDPOINT || 'ws://127.0.0.1:8100'

module.exports = {
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html',
            API_ENDPOINT: API_ENDPOINT,
            WS_ENDPOINT: WS_ENDPOINT
        }),
        new webpack.DefinePlugin({
            'process.env.API_ENDPOINT': JSON.stringify(API_ENDPOINT),
            'process.env.WS_ENDPOINT': JSON.stringify(WS_ENDPOINT)
        })
    ]
}
