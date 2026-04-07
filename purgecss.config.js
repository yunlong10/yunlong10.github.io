module.exports = {
  content: ["_site/**/*.html", "_site/**/*.js"],
  css: ["_site/assets/css/*.css"],
  output: "_site/assets/css/",
  safelist: ["wechat-modal", "active"],
  skippedContentGlobs: ["_site/assets/**/*.html"],
};
