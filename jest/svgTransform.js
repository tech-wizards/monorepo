// Always return an empty svg string, so tags, like img, don't break on tests
module.exports = {
  process() {
    return 'module.exports = "";';
  },
  getCacheKey() {
    // The output is always the same.
    return 'svgTransform';
  },
};
