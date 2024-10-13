const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

// Define HTML pages for dynamic generation
const htmlPages = [
    { template: './src/index.html', chunks: ['index'], filename: 'index.html' },
    { template: './src/about.html', chunks: ['about'], filename: 'about.html' },
    { template: './src/boardspace.html', chunks: ['boardspace'], filename: 'boardspace.html' },
    { template: './src/postup.html', chunks: ['postup'], filename: 'postup.html' },
    { template: './src/tastebuds.html', chunks: ['tastebuds'], filename: 'tastebuds.html' },
];

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
        clean: true,  // Clean output folder before build
    },
    mode: 'development',
    cache: {
        type: 'memory',  // Cache in memory for faster rebuilds
    },
    target: 'web',  // Ensures hot reloading is optimized for the web
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: 'babel-loader',  // Use Babel for transpiling JS
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
                                sourceMap: true,  // Enable source maps
                            },
                        },
                    }
                ],
            },
            {
                test: /\.(jpg|jpeg|gif|png)$/, // Handle image files
                type: 'asset',
                parser: {
                    dataUrlCondition: {
                        maxSize: 30 * 1024,  // Inline assets smaller than 30KB
                    }
                }
            },
            {
                test: /\.svg$/, // Handle SVG files
                type: 'asset',
                parser: {
                    dataUrlCondition: {
                        maxSize: 10 * 1024,  // Inline SVGs smaller than 10KB
                    }
                }
            },
            {
                test: /\.mp4$/,  // Handle video files
                type: 'asset',
                parser: {
                    dataUrlCondition: {
                        maxSize: 200 * 1024,  // Inline videos smaller than 200KB
                    }
                }
            },
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name].css',
            chunkFilename: '[id].css',
        }),
        // Dynamically create HtmlWebpackPlugin instances
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
        open: true,
        hot: true,  // Enable hot reloading
        watchFiles: ['src/**/*'],
        port: 8686,
    },
    devtool: 'cheap-module-source-map',  // Faster rebuilds with more performant source maps
};
