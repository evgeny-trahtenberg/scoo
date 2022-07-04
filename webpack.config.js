

module.exports = {
    /**
     * Modules config
     */
    module: {
        rules: [
            {
                enforce: 'pre',
                exclude: /node_modules/,
                loader: 'eslint-loader',
                test: /\.(js|vue)?$/,
                options: {
                    fix: true,
                    cache: false,
                }
            },
        ],
    },
};