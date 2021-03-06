const withBundleAnalyzer = require('@next/bundle-analyzer')({
    enabled: process.env.ANALYZE === 'true'
});

module.exports = withBundleAnalyzer({
    reactStrictMode: true,
    pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
    future: {webpack5: true},
    webpack: (config, {dev, isServer}) => {
        config.module.rules.push({
            test: /\.(png|jpe?g|gif|mp4)$/i,
            use: [
                {
                    loader: 'file-loader',
                    options: {
                        publicPath: '/_next',
                        name: 'static/media/[name].[hash].[ext]'
                    }
                }
            ]
        });

        config.module.rules.push({
            test: /\.svg$/,
            use: ['@svgr/webpack']
        });

        return config;
    }
});

const withYAML = require('next-yaml');
module.exports = withYAML(module.exports);