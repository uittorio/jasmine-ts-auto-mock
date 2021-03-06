const tsAutoMockTransformer = require('ts-auto-mock/transformer');

module.exports = {
    mode: "development",
    resolve: {
        extensions: ['.ts', '.js']
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                loader: 'ts-loader',
                options: {
                    getCustomTransformers: program => ({
                        before: [
                            tsAutoMockTransformer.default(program)
                        ]
                    })
                }
            }
        ]
    }
};
