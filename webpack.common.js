const path = require( 'path' );
const HtmlWebpackPlugin = require( 'html-webpack-plugin' );

module.exports = {
  entry: './src/index.js',
  resolve: {
    alias: {
      components: path.resolve( __dirname, 'src', 'app', 'components' ),
      pages: path.resolve( __dirname, 'src', 'app', 'pages' ),
      assets: path.resolve( __dirname, 'src', 'app', 'assets' ),
    },
    extensions: ['.js'],
  },
  output: {
    filename: '[name].js',
    path: path.resolve( __dirname, 'dist' ),
  },
  devServer: {
    static: './dist',
    hot: true,
  },
  plugins: [
    new HtmlWebpackPlugin( {
      filename: path.resolve( __dirname, 'index.html' ),
      template: './src/index.html',
    } ),
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
      {
        test: /\.css$/,
        exclude: /\.module\.css$/,
        use: ['style-loader', 'css-loader', 'postcss-loader'],
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif|pdf)$/,
        type: 'asset',
      },
    ],
  },
};
