import { createRequire } from "node:module";

const require = createRequire(import.meta.url);

const { NextFederationPlugin } = require("@module-federation/nextjs-mf");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  webpack(config, options) {
    config.plugins.push(
      new NextFederationPlugin({
        name: "pedido",

        filename: "static/chunks/remoteEntry.js",

        exposes: {
          "./Order": "./components/Order.js",
        },

        shared: {},

        extraOptions: {
          exposePages: true,
        },
      }),
    );

    return config;
  },
};

export default nextConfig;
