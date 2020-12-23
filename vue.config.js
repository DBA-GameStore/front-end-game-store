module.exports = {
  transpileDependencies: ["vuetify"],
  chainWebpack: config => {
    config.module.rules.delete("eslint");
  },

  pluginOptions: {
    prerenderSpa: {
      registry: undefined,
      renderRoutes: ["/", "/checkout", "/profile"],
      useRenderEvent: true,
      headless: true,
      onlyProduction: true
    }
  },

  devServer: {
    proxy: "http://localhost:8080"
  },

  publicPath:
    process.env.NODE_ENV === "production" ? "/front-end-game-store/" : "/"
};
