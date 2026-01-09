const path = require("path");
const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");

const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");

module.exports = merge(common, {
	mode: "production",
	devtool: false,

	output: {
		path: path.resolve(__dirname, "dist"),
		filename: "js/[name].[contenthash:8].js",
		assetModuleFilename: "assets/[name].[contenthash:8][ext][query]",
		clean: true,
		publicPath: "/",
	},

	optimization: {
		minimize: true,
		splitChunks: {
			chunks: "all",
			cacheGroups: {
				vendor: {
					test: /[\\/]node_modules[\\/]/,
					name: "vendors",
					chunks: "all",
				},
			},
		},
		minimizer: [
			new TerserPlugin({
				parallel: true,
				extractComments: false,
				terserOptions: {
					compress: { drop_console: true },
					format: { comments: false },
				},
			}),
			new CssMinimizerPlugin(),
		],
	},

	module: {
		rules: [
			{
				test: /\.(scss|css)$/,
				use: [
					MiniCssExtractPlugin.loader,
					"css-loader",
					{
						loader: "sass-loader",
						options: {
							implementation: require("sass"),
							sassOptions: {
								includePaths: [
									path.resolve(__dirname, "src/scss"),
									path.resolve(__dirname, "src/styles"),
								],
							},
						},
					},
				],
			},
		],
	},

	plugins: [
		new MiniCssExtractPlugin({
			filename: "css/[name].[contenthash:8].css",
		}),
	],

	performance: {
		hints: "warning",
		maxEntrypointSize: 512000,
		maxAssetSize: 512000,
	},
});
