const path = require("path");
const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");

module.exports = merge(common, {
	mode: "development",
	devtool: "cheap-module-source-map",

	output: {
		path: path.resolve(__dirname, "dist"),
		filename: "js/[name].js",
		publicPath: "/",
	},

	devServer: {
		static: [path.resolve(__dirname, "dist"), path.resolve(__dirname, "src")],
		hot: true,
		open: true,
		watchFiles: ["src/**/*"],
		port: 5688,
		allowedHosts: "all",
		host: "0.0.0.0",
	},
});
