const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');

const config = {
    entry: './src/index.ts',
    plugins: [
        new HTMLWebpackPlugin({
            template: './src/index.html',
            title: 'Dev Server',
        }),
    ],
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },

            {
                test: /\.s[ac]ss$/i,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader',
                ],
            },

            {
                test: /\.html$/i,
                loader: 'html-loader',
                options: {
                    sources: true,
                },
            },

            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    },
                }
            },

        ],
    },
    devServer: {
        static: './dist',
        watchFiles: ['src/*html'],
        hot: true,
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js',],
    },
    output: {
        filename: '[name].[contenthash].js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    },
};

module.exports = (env, argv) => {
    if (argv.mode === 'development') {
        config.devtool = 'inline-source-map';
    }

    if (argv.mode === 'production') {
        config.plugins = [
            new HTMLWebpackPlugin({
                template: './src/index.html',
                title: 'Natali',
                filename: '[name].[contenthash].html'
            }),
        ];
    }

    return config;
};
