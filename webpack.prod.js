const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const glob = require('glob');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const { PurgeCSSPlugin } = require('purgecss-webpack-plugin');
const ImageMinimizerPlugin = require('image-minimizer-webpack-plugin'); // Import ImageMinimizerPlugin

const PATHS = {
    src: path.join(__dirname, 'src')
};

const htmlPages = [
    { template: 'index.html', chunks: ['index'] },
    { template: 'about.html', chunks: ['about'] },
    { template: 'boardspace.html', chunks: ['boardspace'] },
    { template: 'postup.html', chunks: ['postup'] },
    { template: 'tastebuds.html', chunks: ['tastebuds'] }
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
        filename: 'js/[name].js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
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
                    filename: 'images/[name][contenthash][ext]',
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
                ]
            }
        ]
    },
    externals: {
        jquery: 'jQuery',
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name].css',
        }),
        new PurgeCSSPlugin({
            paths: glob.sync(`${PATHS.src}/**/*`, { nodir: true }),
            safelist: {
                standard: ['keep-this-class', /^dynamic-/]
            },
        }),
        ...htmlPages.map(page => new HtmlWebpackPlugin({
            template: `./src/${page.template}`,
            filename: page.template,
            chunks: page.chunks
        })),
        new CopyWebpackPlugin({
            patterns: [
                { from: 'src/assets', to: 'assets' }
            ]
        })
    ],
    optimization: {
        minimize: true,
        minimizer: [
            `...`, // Keep Webpack defaults like Terser
            new CssMinimizerPlugin(),
            new ImageMinimizerPlugin({
                minimizerOptions: {
                    plugins: [
                        ['mozjpeg', { progressive: true, quality: 75 }],
                        ['optipng', { optimizationLevel: 5 }],
                        ['pngquant', { quality: [0.65, 0.90] }],
                        ['gifsicle', { interlaced: false }],
                        ['svgo', {
                            plugins: [
                                { removeViewBox: false },
                                { cleanupIDs: true },
                            ],
                        }],
                    ],
                },
            }),
        ],
        splitChunks: {
            chunks: 'all',
        },
    },
    devtool: false, // Disable source maps for production
};
