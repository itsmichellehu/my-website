const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const pages = ["index", "about", "boardspace", "postup", "tastebuds"];

module.exports = {
	entry: {
		index: "./src/js/index.js",
		about: "./src/js/about.js",
		boardspace: "./src/js/boardspace.js",
		postup: "./src/js/postup.js",
		tastebuds: "./src/js/tastebuds.js"
	},

	output: {
		path: path.resolve(__dirname, "dist"),
		clean: true,
		assetModuleFilename: "assets/[name].[contenthash:8][ext][query]"
	},

	resolve: {
		extensions: [".js"],
		alias: {
			assets: path.resolve(__dirname, "src/assets")
		}
	},

	module: {
		rules: [
			{
				test: /\.js$/,
				loader: "babel-loader",
				exclude: /node_modules/,
				options: {
					presets: ["@babel/preset-env"]
				}
			},

			{
				test: /\.(png|jpe?g|gif|svg)$/i,
				type: "asset/resource",
				parser: {
					dataUrlCondition: { maxSize: 4 * 1024 }
				}
			},

			{
				test: /\.(mp4|webm)$/i,
				type: "asset/resource",
				generator: {
					filename: "assets/videos/[name].[contenthash:8][ext]"
				}
			},
			{
				test: /\.(scss|css)$/,
				use: [
					process.env.NODE_ENV !== "production" ? "style-loader" : MiniCssExtractPlugin.loader,
					"css-loader",
					{
						loader: "sass-loader",
						options: {
							implementation: require("sass"),
							sassOptions: {
								includePaths: [path.join(__dirname, "src")]
							}
						}
					}
				]
			},
			{
				test: /\.(woff2?|ttf|eot|otf)$/i,
				type: "asset/resource",
				generator: {
					filename: "assets/fonts/[name].[contenthash:8][ext]"
				}
			}
		]
	},

	plugins: [
		...pages.map(
			(page) =>
				new HtmlWebpackPlugin({
					template: `./src/${page}.html`,
					filename: `${page}.html`,
					chunks: [page],
					inject: "body",
					scriptLoading: "defer"
				})
		)
	]
};
