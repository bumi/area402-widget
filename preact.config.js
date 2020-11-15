export default (config, env, helpers) => {
  delete config.entry.polyfills;
  config.output.filename = "[name].js";

  // let { plugin } = helpers.getPluginsByName(config, "ExtractTextPlugin")[0];
  // let { rule } = helpers.getLoadersByName(config, "babel-loader")[0];
  // let babelConfig = rule.options;

  // babelConfig.presets.push("preact-widget-scripts/babel");

  // babelConfig.plugins.push([
  //   "@emotion",
  //  {
  //    sourceMap: true,
  //   autoLabel: true,
  //  },
  // ]);

  // plugin.options.disable = true;

  if (env.production) {
    config.output.libraryTarget = "umd";
  }
};
