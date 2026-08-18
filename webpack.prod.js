// Must precede the webpack.common.js require: that module reads
// process.env.NODE_ENV at require time to pick the CSS loader.
process.env.NODE_ENV = "production";

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
    filename: "js/[name].[contenthash:8].js",
    path: path.resolve(__dirname, "dist"),
    assetModuleFilename: "assets/[name].[contenthash:8][ext][query]",
    clean: true,
    publicPath: "/",
  },

  optimization: {
    minimize: true,
    // Split heavy libraries into their own long-cached chunks so a change to
    // one (or to app code) doesn't bust the others, and pages only pay for
    // what they import.
    splitChunks: {
      chunks: "all",
      cacheGroups: {
        gsap: {
          test: /[\\/]node_modules[\\/]gsap[\\/]/,
          name: "gsap",
          priority: 20,
        },
        swiper: {
          test: /[\\/]node_modules[\\/]swiper[\\/]/,
          name: "swiper",
          priority: 20,
        },
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: "vendors",
          priority: 10,
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
