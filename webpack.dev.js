const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
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
    },
    mode: 'development',
    cache: false,
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: 'babel-loader',  // Preset options are defined in babel config
            },
            {
                test: /\.(scss|css)$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    {
                        loader: 'sass-loader',
                        options: {
                            implementation: require('sass'),
                            api: 'modern',
                            sassOptions: {
                                outputStyle: 'expanded',  // Readable output in development
                                sourceMap: true,          // Enable source maps in development
                            },
                        },
                    }
                ],
            },
            {
                test: /\.(png|jpg|jpeg|gif|svg)$/i,  // Combined handling for images and SVGs
                type: 'asset/resource',
                generator: {
                    filename: 'assets/images/[name].[hash:6][ext]',  // Unified image output
                },
            },
            {
                test: /\.(mp4)$/,  // Handling for video files
                type: 'asset/resource',
                generator: {
                    filename: 'assets/videos/[name][ext]',  // Video output
                }
            },
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name].css',
            chunkFilename: '[id].css',
        }),
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
        new HtmlWebpackPlugin({
            template: './src/boardspace.html',
            chunks: ['boardspace'],
            filename: 'boardspace.html'
        }),
        new HtmlWebpackPlugin({
            template: './src/tastebuds.html',
            filename: 'tastebuds.html',
            chunks: ['tastebuds']
        }),
        new HtmlWebpackPlugin({
            template: './src/postup.html',
            chunks: ['postup'],
            filename: 'postup.html'
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
        jquery: 'jQuery',  // Keep jQuery as an external dependency
    },
    devServer: {
        static: path.resolve(__dirname, 'dist'),
        open: true,
        hot: true,
        watchFiles: ['**/*'],  // Watch all files
    },
    devtool: 'eval-source-map',
};