const path = require("path");

module.exports = {
  entry: ["@babel/polyfill", path.resolve(__dirname, "src/index.tsx")],

  output: {
    path: path.resolve(__dirname, "public"),
    filename: "bundle.js"
  },

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: [
          {
            loader: "babel-loader",
            options: {
              cacheDirectory: true
            }
          }
        ],
        exclude: /node_modules/
      }
    ]
  },

  resolve: {
    extensions: [".ts", ".tsx", ".js"]
  },

  devServer: {
    contentBase: path.resolve(__dirname, "public"),
    port: 3003,
    historyApiFallback: true
  }
};
