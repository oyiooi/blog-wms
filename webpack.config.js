const path = require('path')
const htmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports={
    entry: {
        main: './src/index.tsx',
        login: './src/login/index.ts',
    },
    output: {
        filename: '[name].bundle.js'
    },
    devServer: {
        static: {
          directory: path.join(__dirname, 'dist'),
        },
        compress: true,
        port: 8000,
        hot: true,
        client: {
            // progress: true,
            overlay: {
                errors: true,
                warnings: false,
            },
            // logging: 'info',
        },
        liveReload: true,
        watchFiles: ['src/**/**'],
        open: true,
    },
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.([cm]?ts|tsx)$/,
                use: 'ts-loader'
            },
            {
                test: /\.(c|le)ss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    {
                        loader: 'less-loader', // 编译 Less 为 CSS
                    }
                ]
            }
        ]
    },
    plugins: [
        new htmlWebpackPlugin({
           template: './src/login/index.html',
           filename: 'login.html',
           chunks: ['login']
        }),
        new htmlWebpackPlugin({
            meta: {
                chartset: 'utf-8',
                viewport: 'width=device-width;initial-scale:1'
            },
            title: 'WMS',
            templateContent: `
                <html>
                <body>
                    <div id='root'></div>
                </body>
                </html>
            `,
            chunks: ['main'],
            filename: 'index.html',
        }),
        new MiniCssExtractPlugin()
    ]
}