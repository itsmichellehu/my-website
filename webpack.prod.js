const path = require("path");
const { merge } = require("webpack-merge");
const common = require("./webpack.common");

const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");

module.exports = merge(common, {
	mode: "production",
	devtool: false,

	output: {
		filename: "js/[name].[contenthash:8].js",
		assetModuleFilename: "assets/[name].[contenthash:8][ext][query]"
	},

	optimization: {
		minimize: true,
		moduleIds: "deterministic",
		runtimeChunk: "single",
		splitChunks: {
			chunks: "all",
			cacheGroups: {
				vendor: {
					test: /[\\/]node_modules[\\/]/,
					name: "vendors",
					chunks: "all"
				}
			}
		},
		minimizer: [
			new TerserPlugin({
				parallel: true,
				extractComments: false,
				terserOptions: {
					compress: { drop_console: true },
					format: { comments: false }
				}
			}),
			new CssMinimizerPlugin()
		]
	},

	plugins: [
		new MiniCssExtractPlugin({
			filename: "css/[name].[contenthash:8].css"
		})
	],

	performance: {
		hints: "warning",
		maxEntrypointSize: 512000,
		maxAssetSize: 512000
	}
});
