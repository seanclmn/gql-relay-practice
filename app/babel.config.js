module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
		plugins: [
			'relay',
      'react-native-paper/babel'
		]
  };
};
