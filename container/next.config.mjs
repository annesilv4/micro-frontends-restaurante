import { createRequire } from "node:module";

const require = createRequire(import.meta.url);

const { NextFederationPlugin } = require("@module-federation/nextjs-mf");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  webpack(config, options) {
    config.plugins.push(
      new NextFederationPlugin({
        name: "container",

        filename: "static/chunks/remoteEntry.js",

        remotes: {
          cardapio: `cardapio@http://localhost:3001/_next/static/${
            options.isServer ? "ssr" : "chunks"
          }/remoteEntry.js`,

          pedido: `pedido@http://localhost:3002/_next/static/${
            options.isServer ? "ssr" : "chunks"
          }/remoteEntry.js`,
        },

        shared: {},

        extraOptions: {
          exposePages: true,
          enableImageLoaderFix: true,
          enableUrlLoaderFix: true,
        },
      })
    );

    return config;
  },
};

export default nextConfig;