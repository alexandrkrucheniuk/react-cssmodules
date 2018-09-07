const path = require('path'),
    createSrcPath = (pathname) => path.resolve(__dirname, 'src', pathname);

module.exports = {
    entry: {
        config:      './src/config/index.js',
        live_config: './src/live_config/index.js',
        viewer:      './src/viewer/index.js',
    },

    output: {
        path:     path.resolve(__dirname, 'public'),
        filename: '[name].js',
    },

    resolve: {
        alias: {
            components: createSrcPath('components'),
            viewer:     createSrcPath('viewer'),
            config:     createSrcPath('config'),
            liveconfig: createSrcPath('live_config'),
            reducers:   createSrcPath('reducers'),
        },
    },
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

                /*    {
                        test: /\.html$/,
                        use:  [
                            {
                                loader:  'html-loader',
                                options: { minimize: true },
                            }
                        ],
                    },*/
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
    devServer: {
        contentBase:        path.resolve(__dirname, 'public'),
        historyApiFallback: true,
        inline:             true,
        open:               true,
        port:               8080,
    },
};
