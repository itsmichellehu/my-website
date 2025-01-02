const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');

const htmlPages = [
    { template: './src/index.html', chunks: ['index'], filename: 'index.html' },
    { template: './src/get-involved.html', chunks: ['get-involved'], filename: 'get-involved.html' },
    { template: './src/kids.html', chunks: ['kids'], filename: 'kids.html' },
    { template: './src/visit-us.html', chunks: ['visit-us'], filename: 'visit-us.html' },
    { template: './src/give.html', chunks: ['give'], filename: 'give.html' },
    { template: './src/about-us.html', chunks: ['about-us'], filename: 'about-us.html' }
];

module.exports = {
    entry: {
        index: './src/js/index.js',
        about: './src/js/index.js',
        leadership: './src/js/index.js',
        getInvolved: './src/js/index.js',
        kids: './src/js/index.js',
        give: './src/js/index.js',
        visit: './src/js/index.js',
    },
    output: {
        filename: 'js/[name].js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    },
    mode: 'development',
    cache: {
        type: 'memory',
    },
    target: 'web',
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: 'babel-loader',
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
                                outputStyle: 'expanded',
                                sourceMap: true,
                            },
                        },
                    }
                ],
            },
            {
                test: /\.(jpg|jpeg|gif|png)$/,
                type: 'asset',
                parser: {
                    dataUrlCondition: {
                        maxSize: 30 * 1024,
                    }
                },
                use: [
                    {
                        loader: 'image-webpack-loader',
                        options: {
                            disable: true,
                        },
                    },
                ],
            },
            {
                test: /\.svg$/,
                type: 'asset',
                parser: {
                    dataUrlCondition: {
                        maxSize: 10 * 1024,
                    }
                }
            },
            {
                test: /\.mp4$/,
                type: 'asset',
                parser: {
                    dataUrlCondition: {
                        maxSize: 200 * 1024,
                    }
                }
            },
        ]
    },
    plugins: [
        new ESLintPlugin({
            extensions: ['js'],
            exclude: 'node_modules',
        }),
        new MiniCssExtractPlugin({
            filename: '[name].css',
            chunkFilename: '[id].css',
        }),
        ...htmlPages.map(page => new HtmlWebpackPlugin({
            template: page.template,
            filename: page.filename,
            chunks: page.chunks,
        })),
        new CopyWebpackPlugin({
            patterns: [
                { from: path.resolve(__dirname, 'src/assets/images'), to: 'assets/images' },
                { from: path.resolve(__dirname, 'src/assets/svg'), to: 'assets/svg' },
                { from: path.resolve(__dirname, 'src/assets/videos'), to: 'assets/videos' },
            ]
        })
    ],
    externals: {
        jquery: 'jQuery',
    },
    devServer: {
        static: path.resolve(__dirname, 'dist'),
        host: '0.0.0.0',
        open: true,
        hot: true,
        watchFiles: ['src/**/*'],
        port: 5668,
        allowedHosts: 'all',
    },
    devtool: 'cheap-module-source-map',
};
