const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
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
        publicPath: '/your-repo-name/' // Set this to your actual repo name
    },
    mode: 'production', // Enable production optimizations
    // optimization: {
    //     splitChunks: {
    //         chunks: 'all', // Automatically split chunks for async and non-async imports
    //         minSize: 20000, // Minimum size before a chunk is split
    //         maxSize: 244000, // Ensure chunks are under 244 KiB
    //     },
    // },
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
            template: './src/postup.html',
            filename: 'postup.html',
            chunks: ['postup']
        }),
        new HtmlWebpackPlugin({
            template: './src/tastebuds.html',
            filename: 'tastebuds.html',
            chunks: ['tastebuds']
        }),
        new HtmlWebpackPlugin({
            template: './src/tastebuds-quick-overview.html',
            filename: 'tastebuds-quick-overview.html',
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