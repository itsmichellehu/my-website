const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const { type } = require("os");
// const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

module.exports = {
    mode: 'production',
    entry: {
        index: './src/js/index.js',
        about: './src/js/about.js',
        boardspace: './src/js/boardspace.js',
        postup: './src/js/postup.js',
        tastebuds: './src/js/tastebuds.js',
    },
    output: {
        filename: 'js/[name].js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
        // publicPath: '/your-repo-name/' // Set this to your actual repo name
    },
    stats: {
        errorDetails: true
    },
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
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.(png|jpe?g|gif|svg)$/i,
                type: 'asset/resource',
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
                                quality: 75, // Adjust JPEG quality
                            },
                            optipng: {
                                enabled: true,
                            },
                            pngquant: {
                                quality: [0.65, 0.90], // Adjust PNG quality
                                speed: 4,
                            },
                            gifsicle: {
                                interlaced: false,
                            },
                            webp: {
                                quality: 75, // Enable WebP compression for browsers that support it
                            },
                        },
                    }
                ]
            }
        ]
    },
    externals: {
        jquery: 'jQuery', // This tells Webpack to use the global 'jQuery' variable
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'css/[name].css'
        }),
        new HtmlWebpackPlugin({
            template: './src/index.html',
            filename: 'index.html',
            chunks: ['index']
        }),
        new HtmlWebpackPlugin({
            template: './src/about.html',
            filename: 'about.html',
            chunks: ['about']
        }),
        new HtmlWebpackPlugin({
            template: './src/boardspace.html',
            chunks: ['boardspace'],
            filename: 'boardspace.html'
        }),
        new HtmlWebpackPlugin({
            template: './src/postup.html',
            filename: 'postup.html',
            chunks: ['postup']
        }),
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
        new CopyWebpackPlugin({
            patterns: [
                { from: 'src/assets', to: 'assets' }
            ]
        })
        // new BundleAnalyzerPlugin()
    ]
};