module.exports = (api) => {
  api.cache(true);
  return {
    presets: [
      ['@babel/preset-typescript', { isTSX: true, allExtensions: true }],
      ["@babel/preset-react"]
    ],
    env: {
      'test': {
        "presets": [
          [
            "@babel/preset-env",
            {
              "targets": {
                "esmodules": false,
                "node": "current",
              },
              "modules": false,
            }
          ],
        ],
        'plugins': [
          'transform-es2015-modules-commonjs',
        ],
      },
      'build': {
        ignore: [
          '**/dist/**/*',
          '**/*.test.tsx',
          '**/*.test.ts',
          '**/*.story.tsx',
          '__snapshots__',
          '__tests__',
          '__stories__',
        ],
      },
    },
  };
};
