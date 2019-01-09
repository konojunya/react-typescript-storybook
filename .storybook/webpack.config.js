const path = require("path");

module.exports = (baseConfig, env, defaultConfig) => {
  defaultConfig.module.rules.push({
    test: /\.tsx?$/,
    include: path.resolve(__dirname, "../"),
    use: [
      {
        loader: "ts-loader",
        options: {
          configFile: path.join(__dirname, "../tsconfig.json")
        }
      }
    ]
  });

  defaultConfig.resolve.extensions.push(".ts", ".tsx");

  return defaultConfig;
};
