module.exports = {
  content: ["_site/**/*.html", "_site/**/*.js"],
  css: ["_site/assets/css/*.css"],
  output: "_site/assets/css/",
  safelist: {
    standard: ["wechat-modal", "active"],
    // MapMyVisitors injects these after build; without a safelist, production
    // PurgeCSS drops ocean/radius/marker rules and the live map looks default.
    greedy: [/misc-map/, /mapmyvisitors/, /jvectormap/],
  },
  skippedContentGlobs: ["_site/assets/**/*.html"],
};
