const withImages = require("next-images");

module.exports = withImages({
  trailingSlash: true,
  future: {
    webpack5: true,
  },
});
