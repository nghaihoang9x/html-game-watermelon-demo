const path = require('path');
// require('dotenv').config()
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const webpack = require('webpack')
const MinifyPlugin = require("babel-minify-webpack-plugin");

// This is main configuration object.
// Here you write different options and tell Webpack what to do
module.exports = {
    // Path to your entry point. From this file Webpack will begin his work
    entry: {
      main: ['./main.js']
    },

    // Path and filename of your result bundle.
    // Webpack will bundle all JavaScript into this file
    output: {
        path: path.resolve(__dirname, 'public/assets'),
        filename: '[name].js'
    },
    devServer: {
        contentBase: path.join(__dirname, 'public'),
        publicPath: '/assets/',
        hot: true,
        watchContentBase: true,
    },
    watchOptions: {
        ignored: /node_modules/
    },
    // Default mode for Webpack is production.
    // Depending on mode Webpack will apply different things
    // on final bundle. For now we don't need production's JavaScript
    // minifying and other thing so let's set mode to development
    mode: process.env.NODE_ENV ? process.env.NODE_ENV : 'development',
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            ["@babel/preset-env"]
                        ]
                    }
                }
            },
            {
                // Apply rule for .sass, .scss or .css files
                test: /\.(sa|sc|c)ss$/,

                use: [
                    {
                        loader: MiniCssExtractPlugin.loader
                    },
                    {
                        loader: "css-loader",
                        options: {
                            sourceMap: true,
                        },
                    },
                    // {
                    //     loader: "postcss-loader"
                    // },
                    {
                        loader: "sass-loader",
                        options: {
                            implementation: require("sass"),
                            sourceMap: true,
                        }
                    }
                ]
            },
            {
                // Now we apply rule for images
                test: /\.(png|jpe?g|gif|svg)$/,
                use: [
                    {
                        // Using file-loader for these files
                        loader: "file-loader",

                        // In options we can set different things like format
                        // and directory to save
                        options: {
                            outputPath: 'images'
                        }
                    }
                ]
            },
            {
                // Apply rule for fonts files
                test: /\.(woff|woff2|ttf|otf|eot)$/,
                use: [
                    {
                        // Using file-loader too
                        loader: "file-loader",
                        options: {
                            outputPath: 'fonts'
                        }
                    }
                ]
            }
        ],
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "main.css"
        }),
        // new webpack.ProvidePlugin({
        //     $: 'jquery',
        //     jQuery: 'jquery'
        // })
    ],
    externals: {
        jquery: 'jQuery'
    }
};
