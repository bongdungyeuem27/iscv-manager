const webpack = require('webpack');
const rewireAliases = require('react-app-rewire-aliases');
const path = require('path');

const override = function override(config, env) {
    config = rewireAliases.aliasesOptions({
        '~pages': path.resolve(__dirname, 'src/pages'),
        '~components': path.resolve(__dirname, 'src/components'),
        '~images': path.resolve(__dirname, 'src/images'),
        '~middlewares': path.resolve(__dirname, 'src/middlewares'),
        '~redux': path.resolve(__dirname, 'src/redux'),
        '~contracts': path.resolve(__dirname, 'src/contracts'),
        '~layouts': path.resolve(__dirname, 'src/layouts')
    })(config, env);
    // config.resolve.fallback = fallback
    config.resolve.fallback = {
        crypto: require.resolve('crypto-browserify'),
        stream: require.resolve('stream-browserify'),
        assert: require.resolve('assert'),
        http: require.resolve('stream-http'),
        https: require.resolve('https-browserify'),
        os: require.resolve('os-browserify'),
        url: require.resolve('url')
    };
    config.plugins = (config.plugins || []).concat([
        new webpack.ProvidePlugin({
            process: 'process/browser',
            Buffer: ['buffer', 'Buffer']
            // 'react/jsx-dev-runtime.js': require.resolve('react/jsx-dev-runtime.js'),
            // 'react/jsx-runtime.js': require.resolve('react/jsx-runtime.js'),
        })
    ]);
    config.ignoreWarnings = [/Failed to parse source map/];
    config.module.rules.unshift({
        test: /\.m?js$/,
        resolve: {
            fullySpecified: false // disable the behavior
        }
    });
    return config;
};
module.exports = override;
