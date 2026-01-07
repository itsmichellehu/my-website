const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const pages = ["index", "about", "boardspace", "postup", "tastebuds"];
const isProduction = process.env.NODE_ENV === "production";

module.exports = {
	resolve: {
		extensions: [".js"],
		roots: [path.resolve("./src")],
		alias: {
			"@scss": path.resolve(__dirname, "src/scss"),
			"@components": path.resolve(__dirname, "src/components")
		}
	},

	entry: pages.reduce((entries, page) => {
		entries[page] = `./src/js/${page}.js`;
		return entries;
	}, {}),

	output: {
		path: path.resolve(__dirname, "dist"),
		filename: "js/[name].[contenthash:8].js",
		assetModuleFilename: "assets/[name].[contenthash:8][ext][query]",
		clean: true
	},

	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader",
					options: {
						presets: ["@babel/preset-env"]
					}
				}
			},

			{
				test: /\.(png|jpe?g|gif|svg|webp)$/i,
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
					isProduction ? MiniCssExtractPlugin.loader : "style-loader",
					"css-loader",
					{
						loader: "sass-loader",
						options: {
							implementation: require("sass"),
							sassOptions: {
								includePaths: [
									path.join(__dirname, "src"),
									path.resolve(__dirname, "src/scss"),
									path.join(__dirname, "src/components")
								]
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
