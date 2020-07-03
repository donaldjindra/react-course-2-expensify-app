const path = require("path");
// entry -> output

module.exports = (env) => {
    const isProduction = env === 'production';

    console.log('env', env)
    return {
        entry: "./src/app.js",
        output: {
            path: path.join(__dirname, "public" ),
            filename: "bundle.js"
        },
        module: {
            rules: [{
                loader: "babel-loader",
                test: /\.js$/,
                exclude: /node_modules/
            }, {
                test: /\.s?css$/,
                use: [
                    "style-loader",
                    "css-loader",
                    "sass-loader"
                ]
            }]
        },
        devtool: isProduction ? "source-map" : "cheap-module-eval-source-map",
        devServer: {
            contentBase: path.join(__dirname, "public"),
            //historyApiFallback tells the server that the routing will be handled by client side code instead of server side
            historyApiFallback: true,
        }
    };
}

