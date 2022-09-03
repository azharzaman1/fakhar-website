config.module.rules.push({
  test: /\.pdf$/,
  use: {
    loader: "file-loader",
    options: {
      name: "[path][name].[ext]",
    },
  },
});

// vue.config.js configureWebpack
config.module
  .rule("pdf")
  .test(/\.pdf$/)
  .use("pdf")
  .loader("file-loader")
  .end();

config.module
  .rule("pdf")
  .test(/\.pdf$/)
  .use("file-loader?name=[path][name].[ext]")
  .loader("file-loader")
  .end();
