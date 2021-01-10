module.exports = {
  transpileDependencies: ["vuetify"],
  chainWebpack: (config) => {
    config.module.rules.delete("eslint");
  },

  pluginOptions: {
    prerenderSpa: {
      registry: undefined,
      renderRoutes: ["/", "/checkout", "/profile", "/game", "/uploadGame", "/history"],
      useRenderEvent: true,
      headless: true,
      onlyProduction: true,
    },
  },

  devServer: {
    proxy: {
      "/api": {
        target: "http://127.0.0.1/SQLProject/",
        ws: true,
        changeOrigin: true,
        pathRewrite: {
          "^/api": "", //請求的時候使用這個api就可以
        },
      },
    },
    port: "8080",
  },

  publicPath:
    process.env.NODE_ENV === "production" ? "/front-end-game-store/" : "/",
};
