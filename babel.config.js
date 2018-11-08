module.exports = {
  plugins: [
    [
      'babel-plugin-styled-components',
      {
        displayName: process.env.NODE_ENV !== 'production',
        fileName: process.env.NODE_ENV !== 'production',
      },
    ],
    'react-hot-loader/babel',
  ],
};
