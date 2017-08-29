module.exports = {
    devtool: 'source-map',
    entry: './typescripts/app.ts',
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/
            }
        ]
    },
    resolve: {
        extensions: [".tsx", ".ts", ".js"]
    },
    output: {
        filename: './assets/scripts/app.js',
        path: __dirname
    }
};