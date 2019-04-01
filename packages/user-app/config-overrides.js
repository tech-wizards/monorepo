module.exports = function override(config, env) {
  config.module.rules = config.module.rules.filter(x => !x.test || (x.test.toString() !== /\.(js|mjs|jsx)$/.toString() && x.test.toString() !== /\.(ts|tsx)$/.toString()));
  config.module.rules.push({
    test: /\.(ts|tsx)$/,
    loader: require.resolve('babel-loader'),
    options: {
      root: '../../',
    }
  });
  return config;
}
