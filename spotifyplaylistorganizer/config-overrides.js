const webpack = require('webpack');

module.exports = function override(config) {
    const fallback = config.resolve.fallback || {};
    Object.assign(fallback, {
        crypto: false,
        stream: false,
        assert: false,
        http: false,
        https: false,
        os: false,
        url: false,
        zlib: false,
        path: false, 
        fs: false,
        net: false,
        async_hooks: false,
        ...config.resolve.fallback,
    });
    config.resolve.fallback = fallback;
    
    config.plugins = (config.pluhins || []).concat([
        new webpack.ProvidePlugin({
            process: 'process/browser',
            Buffer: ['buffer', 'Buffer'],
        })
    ]);
    config.ignoreWarnings = [/Failed to parse source map/];
    return config;
};