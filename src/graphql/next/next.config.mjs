/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config, { webpack }) {
    config.plugins.push(
      new webpack.DefinePlugin({
        'globalThis.process': JSON.stringify(true),
        'process.env.NODE_ENV': JSON.stringify('production'),
      }),
    );
    return config;
  },
};

export default nextConfig;
