module.exports = {
  transpileDependencies: ["vuetify"],
  chainWebpack: config => {
    config.module.rules.delete("eslint");
  },

  pluginOptions: {
    prerenderSpa: {
      registry: undefined,
      renderRoutes: ["/", "/about/profile", "/checkout"],
      useRenderEvent: true,
      headless: true,
      onlyProduction: true
    }
  },

  publicPath:
    process.env.NODE_ENV === "production" ? "/front-end-game-store/" : "/"
};
