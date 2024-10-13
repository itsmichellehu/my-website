const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const ImageMinimizerPlugin = require('image-minimizer-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

const PATHS = {
    src: path.join(__dirname, 'src'),
};

const htmlPages = [
    { template: 'index.html', chunks: ['index'] },
    { template: 'about.html', chunks: ['about'] },
    { template: 'boardspace.html', chunks: ['boardspace'] },
    { template: 'postup.html', chunks: ['postup'] },
    { template: 'tastebuds.html', chunks: ['tastebuds'] },
];

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
        filename: 'js/[name].[contenthash].js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    },
    stats: {
        errorDetails: true,
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            cacheDirectory: true,
                            presets: [
                                ['@babel/preset-env', {
                                    useBuiltIns: 'usage',
                                    corejs: 3,
                                }]
                            ],
                        },
                    },
                ],
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
                            sassOptions: {
                                outputStyle: 'compressed',
                            },
                        },
                    },
                ],
            },
            {
                test: /\.(png|jpe?g|gif|svg)$/i,
                type: 'asset/resource',
                generator: {
                    filename: 'images/[name].[contenthash][ext]',
                },
                use: [
                    {
                        loader: 'image-webpack-loader',
                        options: {
                            mozjpeg: {
                                progressive: true,
                                quality: 75,
                            },
                            optipng: {
                                enabled: true,
                            },
                            pngquant: {
                                quality: [0.65, 0.90],
                                speed: 4,
                            },
                            gifsicle: {
                                interlaced: false,
                            },
                            webp: {
                                quality: 75,
                            },
                        },
                    },
                ],
            },
        ],
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name].[contenthash].css',
        }),
        ...htmlPages.map(page => new HtmlWebpackPlugin({
            template: `./src/${page.template}`,
            filename: page.template,
            chunks: page.chunks,
        })),
        new CopyWebpackPlugin({
            patterns: [
                { from: 'src/assets', to: 'assets' },
            ],
        }),
    ],
    optimization: {
        minimize: true,
        minimizer: [
            new TerserPlugin({
                parallel: true,
                terserOptions: {
                    compress: {
                        drop_console: true,
                    },
                },
            }),
            new CssMinimizerPlugin({
                parallel: true,
            }),
            new ImageMinimizerPlugin({
                minimizer: {
                    implementation: ImageMinimizerPlugin.imageminMinify,
                    options: {
                        plugins: [
                            ['mozjpeg', { progressive: true, quality: 75 }],
                            ['optipng', { optimizationLevel: 5 }],
                            ['pngquant', { quality: [0.65, 0.90] }],
                            ['gifsicle', { interlaced: true }],
                            ['svgo', {
                                plugins: [
                                    { removeViewBox: false },
                                    { cleanupIDs: true },
                                ],
                            }],
                        ],
                    },
                },
            }),
        ],
        splitChunks: {
            chunks: 'all',
            minSize: 50000,
            maxSize: 400000,
        },
        runtimeChunk: 'single',
    },
    resolve: {
        alias: {
            '@components': path.resolve(__dirname, 'src/components/'),
            '@scss': path.resolve(__dirname, 'src/scss/'),
        },
        extensions: ['.js', '.jsx'],
    },
    cache: {
        type: 'filesystem',
    },
    devtool: false,
};
