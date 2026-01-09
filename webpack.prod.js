const path = require("path");
const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");
const glob = require("glob");

const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const { PurgeCSSPlugin } = require("purgecss-webpack-plugin");

const PATHS = {
	src: path.join(__dirname, "src"),
};

module.exports = merge(common, {
	mode: "production",
	devtool: false,

	output: {
		path: path.resolve(__dirname, "dist"),
		filename: "js/[name].[contenthash:8].js",
		assetModuleFilename: "assets/[name].[contenthash:8][ext][query]",
		clean: true,
		publicPath: "./",
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
		rules: [],
	},

	plugins: [
		new MiniCssExtractPlugin({
			filename: "css/[name].[contenthash:8].css",
		}),

		new PurgeCSSPlugin({
			paths: glob.sync(`${PATHS.src}/**/*`, { nodir: true }),
			only: ["main"], // Only process main bundle
			safelist: ["html", "body"], // Keep essential selectors
		}),
	],

	performance: {
		hints: "warning",
		maxEntrypointSize: 512000,
		maxAssetSize: 512000,
	},
});
