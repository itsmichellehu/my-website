const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const ImageMinimizerPlugin = require('image-minimizer-webpack-plugin');

module.exports = {
    entry: {
        index: './src/js/index.js',
        about: './src/js/about.js',
        boardspace: './src/js/boardspace.js',
        postup: './src/js/postup.js',
        tastebuds: './src/js/tastebuds.js',
    },
    output: {
        filename: 'js/[name].[contenthash].js', // Use contenthash for better caching in production
        path: path.resolve(__dirname, 'dist'),
        clean: true, // Clean the output directory before every build
    },
    mode: 'development', // Switch to 'production' in production builds
    devtool: 'eval-source-map', // Faster rebuilds in development, switch to 'source-map' for production
    module: {
        rules: [
            {
                test: /\.jsx?$/,  // Handle both .js and .jsx files
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react'],
                    }
                }
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
                        },
                    },
                ],
            },
            {
                test: /\.(png|jpg|jpeg|gif|svg)$/i,
                type: 'asset',
                parser: {
                    dataUrlCondition: {
                        maxSize: 8192, // Inline images smaller than 8kb
                    },
                },
                generator: {
                    filename: 'assets/images/[name].[hash:6][ext]',
                },
            },
            {
                test: /\.svg$/,
                use: [
                    {
                        loader: 'svgo-loader',
                        options: {
                            plugins: [
                                { removeTitle: false }, // Keep <title> for accessibility
                                { removeViewBox: false }, // Ensure viewBox isn't removed
                                { prefixIds: true }, // Prefix ID attributes to avoid clashes
                            ],
                        },
                    },
                ],
            },
        ],
    },
    optimization: {
        minimizer: [
            "...", // Keep default minimizers
            new ImageMinimizerPlugin({
                minimizer: {
                    implementation: ImageMinimizerPlugin.imageminMinify,
                    options: {
                        plugins: [
                            ["gifsicle", { interlaced: true }],
                            ["jpegtran", { progressive: true }],
                            ["optipng", { optimizationLevel: 5 }],
                            [
                                "svgo",
                                {
                                    plugins: [
                                        {
                                            name: "preset-default",
                                            params: {
                                                overrides: {
                                                    removeViewBox: false, // Keep viewBox in SVGs
                                                    addAttributesToSVGElement: {
                                                        params: {
                                                            attributes: [{ xmlns: "http://www.w3.org/2000/svg" }],
                                                        },
                                                    },
                                                },
                                            },
                                        },
                                    ],
                                },
                            ],
                        ],
                    },
                },
            }),
        ],
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'css/[name].[contenthash].css', // Use contenthash for better caching in production
            chunkFilename: 'css/[id].[contenthash].css',
        }),
        new CleanWebpackPlugin(), // Clean dist/ directory before each build
        ...['index', 'about', 'boardspace', 'postup', 'tastebuds'].map(page => new HtmlWebpackPlugin({
            template: `./src/${page}.html`,
            chunks: [page],
            filename: `${page}.html`
        })),
        new CopyWebpackPlugin({
            patterns: [
                { from: path.resolve(__dirname, 'src/assets/images'), to: 'assets/images' },
                { from: path.resolve(__dirname, 'src/assets/svg'), to: 'assets/svg' },
                { from: path.resolve(__dirname, 'src/assets/videos'), to: 'assets/videos' }
            ]
        })
    ],
    resolve: {
        extensions: ['.js', '.jsx'], // Add .js for resolving JavaScript files
    },
    devServer: {
        static: {
            directory: path.resolve(__dirname, 'dist')
        },
        open: true,
        hot: true,
        watchFiles: ['src/**/*'], // Watch only the src directory
        port: 9000, // Set custom port
    },
};
