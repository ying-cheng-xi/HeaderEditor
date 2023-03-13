module.exports = {
  externals: {
    react: 'React',
    'react-dom': 'ReactDOM',
  },
  outputDir: 'dist',
  outputAssetsPath: {
    js: 'assets/js',
    css: 'assets/css',
  },
  mpa: true,
  vendor: false,
  plugins: [
    'build-plugin-fusion',
    [
      'build-plugin-css-assets-local',
      {
        outputPath: 'assets/css-assets',
        relativeCssPath: '/',
      },
    ],
    './scripts/webpack/webpack.plugin.js',
  ],
};
