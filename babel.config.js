module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {
          assets: './src/assets',
          features: './src/features',
        },
        extensions: ['.js', '.jsx', '.tsx', '.ts', '.json'],
      },
    ],
    'react-native-reanimated/plugin',
  ],
};
