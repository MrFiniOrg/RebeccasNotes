// Third Party Libraries & other Consts...
const HtmlWebPackPlugin = require("html-webpack-plugin");
const path = require("path");
const webpack = require('webpack');
const SettingsPath = path.resolve(__dirname, "./Settings.json");
const Settings = require(SettingsPath);

require('dotenv').config();

module.exports = {
    // Telling webpack where to begin this transpilation process...
    entry: {
        app: [path.resolve(__dirname, "src", "index.tsx"), 'webpack-hot-middleware/client'],
        vendor: ['react', 'react-dom']
    },


    output: {
        // Options related to how webpack emits results
        path: path.resolve(__dirname, "build"), // string

        // the target directory for all output files
        // must be an absolute path (use the Node.js path module)
        filename: "bundle.[hash].js", // string

        // Do NOT remove this as we are dependant on this on the Server Build
        publicPath: "/"
    },

    // Telling webpack which files to lookout for...
    resolve: {
        extensions: ['.js', '.jsx', '.json', '.ts', '.tsx', '.css']
    },


    devtool: "source-map",

    // Minified == "production", NotMinified = "development"
    mode: Settings.IsMinified === "true" ? "production" : "development",

    // Telling Webpack which tech to use to transpile
    module: {
        // Rules for compilation
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.ts(x?)$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: "ts-loader"
                    }
                ]
            },
            {
                enforce: "pre",
                test: /\.js$/,
                loader: "source-map-loader"
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: "html-loader"
                    }
                ]
            }
        ],
    },

    // Using of 3rd party mods
    plugins: [
        new HtmlWebPackPlugin({
            minify: true,
            title: Settings.Title,
            template: path.resolve(__dirname, "src", "index.ejs"),
            favicon: path.resolve(__dirname, "src", "images", "favicon.png"),
            inject: true
        }),

        // NEW ADDITION FOR HMR
        new webpack.HotModuleReplacementPlugin()

    ]
};