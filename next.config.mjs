import withImages from 'next-images';

export default withImages({
  esModule: true,
  fileExtensions: ['jpg', 'jpeg'],
  webpack(config, options) {
    config.module.rules.push({
      test: /\.(jpe?g|png)$/,
      use: [
        options.defaultLoaders.babel,
        {
          loader: 'sharp-loader',
          options: { format: 'webp' },
        },
      ],
    });
    return config;
  },
  reactStrictMode: true,
});
