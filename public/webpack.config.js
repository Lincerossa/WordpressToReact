const ExtractTextPlugin = require('extract-text-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
  entry: {
    main: './src/app.js'
  },
  output: {
    filename: './dist/scripts/[name].js'
  },
  devtool: 'source-map', 
  module: {
    loaders: [
      {
        test: /\.(js||jsx)$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        options: {
          "presets" : ["react", "es2015"]
        }
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
              query: {
                modules: true,
                sourceMap: true,
                importLoaders: 2,
                localIdentName: '[local]___[hash:base64:5]'
              }
            },
            'sass-loader'
          ]
        }),
      },
    ]
  },
  plugins: [
    new ExtractTextPlugin("./dist/scripts/style.css"),
    // new BundleAnalyzerPlugin({
    //   analyzerHost: 'localhost',
    // })
  ]
}