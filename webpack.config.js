//Konfiguracja Webpack
module.exports = {
    entry: "./js/index.jsx",
    output: { filename: "./js/app.js" },
    watch: true,
    module: {
        loaders: [
            {
                test: /\.jsx$/,  exclude: /node_modules/,
                loader: 'babel-loader',
                query: { presets: ['es2015', 'stage-2' , 'react'] }
            }
        ]
    }
}
