const path = require("path");
const { merge } = require("webpack-merge");
const common = require("./webpack.common");

module.exports = merge(common, {
	mode: "development",
	devtool: "cheap-module-source-map",

	output: {
		filename: "js/[name].js"
	},

	devServer: {
		static: [path.resolve(__dirname, "dist"), path.resolve(__dirname, "src")],
		hot: true,
		open: true,
		watchFiles: ["src/**/*"],
		port: 9000,
		allowedHosts: "all"
	}
});