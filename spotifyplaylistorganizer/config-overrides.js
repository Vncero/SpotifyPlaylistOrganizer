const webpack = require('webpack');
const path = require('path');

module.exports = {
    webpack: function(config, env) {
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
        
        config.plugins = (config.plugins || []).concat([
            new webpack.ProvidePlugin({
                process: 'process/browser',
                Buffer: ['buffer', 'Buffer'],
            })
        ]);
        config.ignoreWarnings = [/Failed to parse source map/];
    
        return config;
    },

    paths: function(paths, env) {
        const buildPath = 'dist';
        paths.appIndexJs = path.resolve(__dirname, 'dist/index.js')
        paths.appSrc = path.resolve(__dirname, './', buildPath);
        
        return paths;
    }
};