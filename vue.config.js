module.exports = {
  transpileDependencies: ["vuetify"],
  chainWebpack: (config) => {
    config.module.rules.delete("eslint");
  },

  pluginOptions: {
    prerenderSpa: {
      registry: undefined,
      renderRoutes: ["/", "/checkout", "/profile", "/game"],
      useRenderEvent: true,
      headless: true,
      onlyProduction: true,
    },
  },

  devServer: {
    proxy: {
      "/V1": {
        target: "http://localhost:8080",
        changeOrigin: true,
        pathRewrite: {
          "^/V1": "",
        },
      },
      "/V2": {
        target: "http://127.0.0.1/sqlproject/",
        changeOrigin: true,
        pathRewrite: {
          "^/V2": "",
        },
      },
    },
  },

  publicPath:
    process.env.NODE_ENV === "production" ? "/front-end-game-store/" : "/",
};
