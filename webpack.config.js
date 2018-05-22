const HtmlWebPackPlugin = require('html-webpack-plugin');

module.exports = {
    module: {
        rules: [{
            oneOf: [
                {
                    test:    [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
                    loader:  require.resolve('url-loader'),
                    options: {
                        limit: 100000,
                        name:  'static/media/[name].[hash:8].[ext]',
                    },
                },
                {
                    test:    /\.js$/,
                    exclude: /node_modules/,
                    use:     [
                        'babel-loader',
                        'eslint-loader'
                    ],
                },
                {
                    test: /\.html$/,
                    use:  [
                        {
                            loader:  'html-loader',
                            options: { minimize: true },
                        }
                    ],
                },
                {
                    test: /\.scss$/,
                    use:  [
                        {
                            loader: 'style-loader',
                        },
                        {
                            loader:  'css-loader',
                            options: {
                                modules:        'true',
                                localIdentName:
                                    '[path][name]__[local]--[hash:base64:5]',
                            },
                        },
                        {
                            loader:  'sass-loader',
                            options: {
                                modules:        'true',
                                localIdentName:
                                    '[path][name]__[local]--[hash:base64:5]',
                            },
                        }
                    ],
                },
                {
                    exclude: [/\.js$/, /\.html$/, /\.json$/],
                    loader:  require.resolve('file-loader'),
                    options: {
                        name: 'static/media/[name].[hash:8].[ext]',
                    },
                }
            ],
        }],
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: './src/index.html',
            filename: './index.html',
        })
    ],
    devServer: {
        inline:   true,
        port:     1337,
        compress: true,
        overlay:  true,
    },
};
