const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

// const pages = ["index", "about", "boardspace", "postup", "tastebuds"];
const pages = ["index", "about", "postup", "tastebuds"];
const isProduction = process.env.NODE_ENV === "production";

module.exports = {
	resolve: {
		extensions: [".js", ".json"],
		alias: {
			"@": path.resolve(__dirname, "src/"),
			"@assets": path.resolve(__dirname, "src/assets"),
			"@js": path.resolve(__dirname, "src/js"),
			"@components": path.resolve(__dirname, "src/components"),
			"@scss": path.resolve(__dirname, "src/scss"),
			"@abstracts": path.resolve(__dirname, "src/scss/abstracts"),
			"@base": path.resolve(__dirname, "src/scss/base"),
			"@sections": path.resolve(__dirname, "src/scss/sections"),
			"@utilities": path.resolve(__dirname, "src/scss/utilities"),
			"@pages": path.resolve(__dirname, "src/scss/pages"),
		},
	},

	entry: {
		main: "./src/js/main.js",
	},

	output: {
		path: path.resolve(__dirname, "dist"),
		filename: "js/[name].js",
		assetModuleFilename: "assets/[name].[ext][query]",
		clean: true,
		publicPath: "/",
	},

	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader",
					options: {
						presets: ["@babel/preset-env"],
					},
				},
			},

			{
				test: /\.(png|jpe?g|gif|webp)$/i,
				type: "asset/resource",
				parser: {
					dataUrlCondition: { maxSize: 4 * 1024 },
				},
				use: [
					{
						loader: "image-webpack-loader",
						options: {
							optipng: {
								enabled: false,
							},
							pngquant: {
								quality: [0.75, 0.95],
								speed: 4,
							},
							webp: {
								quality: 100,
							},
						},
					},
				],
			},
			{
				test: /\.svg$/i,
				type: "asset/resource",
			},
			{
				test: /\.(mp4|webm)$/i,
				type: "asset/resource",
				generator: {
					filename: "assets/videos/[name].[contenthash:8][ext]",
				},
			},
			{
				test: /\.(scss|css)$/,
				use: [
					isProduction ? MiniCssExtractPlugin.loader : "style-loader",
					"css-loader",
					{
						loader: "sass-loader",
						options: {
							implementation: require("sass"),
							sassOptions: {
								includePaths: [path.resolve(__dirname, "../src/scss")],
							},
						},
					},
				],
			},
			{
				test: /\.(woff2?|ttf|eot|otf)$/i,
				type: "asset/resource",
				generator: {
					filename: "assets/fonts/[name].[contenthash:8][ext]",
				},
			},
		],
	},

	plugins: [
		...pages.map(
			(page) =>
				new HtmlWebpackPlugin({
					template: `./src/${page}.html`,
					filename: `${page}.html`,
					chunks: ["main"], // main.js on every page
					inject: "head",
					scriptLoading: "defer",
				})
		),

		new CopyWebpackPlugin({
			patterns: [
				{
					from: path.resolve(__dirname, "src/assets"),
					to: "assets",
					noErrorOnMissing: true,
				},
			],
		}),
	],
};
