const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
// const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

module.exports = {
    entry: {
        index: './src/js/index.js',
        about: './src/js/about.js',
        // boardspace: './src/js/boardspace.js',
        postup: './src/js/postup.js',
        tastebuds: './src/js/tastebuds.js',
    },
    output: {
        filename: 'js/[name].js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    },
    mode: 'development',
    cache: false,
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
                test: /\.scss$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.css$/, // Match CSS files
                use: [
                    'style-loader', // Injects styles into DOM
                    'css-loader',   // Turns CSS into CommonJS
                ],
            },
            {
                test: /\.(png|jpg|jpeg|gif)$/i,
                type: 'asset',
                parser: {
                    dataUrlCondition: {
                        maxSize: 8192,
                    },
                },
                generator: {
                    filename: 'assets/images/[name].[hash:6][ext]',
                },
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[path][name].[ext]',
                            outputPath: 'images',
                        },
                    },
                    {
                        loader: 'image-webpack-loader',
                        options: {
                            mozjpeg: {
                                progressive: true,
                                quality: 65
                            },
                            optipng: {
                                enabled: true,
                            },
                            pngquant: {
                                quality: [0.65, 0.90],
                                speed: 4
                            },
                            gifsicle: {
                                interlaced: false,
                            },
                            webp: {
                                quality: 75
                            }
                        }
                    }
                ]
            },
            {
                test: /\.svg$/,
                type: 'asset/resource',
                generator: {
                    filename: 'assets/svg/[name][ext]',
                }
            },
            {
                test: /\.(mp4)$/,
                use: {
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                        outputPath: 'assets/videos/', // Output directory for videos
                    },
                },
            },
        ]
    },
    plugins: [
        // new BundleAnalyzerPlugin(),
        new HtmlWebpackPlugin({
            template: './src/index.html',
            chunks: ['index'],
            filename: 'index.html'
        }),
        new HtmlWebpackPlugin({
            template: './src/about.html',
            chunks: ['about'],
            filename: 'about.html'
        }),
        // new HtmlWebpackPlugin({
        //     template: './src/boardspace.html',
        //     chunks: ['boardspace'],
        //     filename: 'boardspace.html'
        // }),
        new HtmlWebpackPlugin({
            template: './src/tastebuds-full-casestudy.html',
            filename: 'tastebuds-full-casestudy.html',
            chunks: ['tastebuds']
        }),
        new HtmlWebpackPlugin({
            template: './src/tastebuds.html',
            filename: 'tastebuds.html',
            chunks: ['tastebuds']
        }),

        new HtmlWebpackPlugin({
            template: './src/sandbox.html',
            chunks: ['sandbox'],
            filename: 'sandbox.html',
        }),
        new HtmlWebpackPlugin({
            template: './src/postup.html',
            chunks: ['postup'],
            filename: 'postup.html',
        }),
        new CopyWebpackPlugin({
            patterns: [
                { from: path.resolve(__dirname, 'src/assets/images'), to: 'assets/images' },
                { from: path.resolve(__dirname, 'src/assets/svg'), to: 'assets/svg' },
                { from: path.resolve(__dirname, 'src/assets/videos'), to: 'assets/videos' }
            ]
        })
    ],
    externals: {
        jquery: 'jQuery', // This tells Webpack to use the global 'jQuery' variable
    },
    devServer: {
        static: path.resolve(__dirname, 'dist'),
        open: true,
        hot: true,
        watchFiles: ['**/*'], // Watch everything in the project
    },
    // optimization: {
    //     splitChunks: {
    //         chunks: 'all',
    //     },
    // },
    devtool: 'source-map',
};