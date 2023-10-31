module.exports = {
  presets: ["module:metro-react-native-babel-preset"],
  plugins: [
    ["react-native-reanimated/plugin",
      {
        "relativeSourceLocation": true,
      }],
    [
      'module-resolver',
      {
        root: ['.'],
        extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
        alias: {
          '@':'./src/',
          'screens':'./src/Screens/',
          'types': './src/Types',
          // 'redux':'./src/Redux',
          'header':'./src/ReusableComponent/Header',
        },
      },
    ]
  ]
};
