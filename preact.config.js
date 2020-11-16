export default (config, env, helpers) => {
  delete config.entry.polyfills;
  config.output.filename = "[name].js";

  let { rule } = helpers.getLoadersByName(config, "babel-loader")[0];
  let babelConfig = rule.options;

  babelConfig.plugins.push([
    "@emotion",
    {
      sourceMap: true,
      autoLabel: "dev-only"
    },
  ]);

  if (env.production) {
    config.output.libraryTarget = "umd";
  }
};
