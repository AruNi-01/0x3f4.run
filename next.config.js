const createNextIntlPlugin = require("next-intl/plugin");

/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    _next_intl_trailing_slash: "false",
  },
};

const withNextIntl = createNextIntlPlugin("./i18n/request.ts");

module.exports = withNextIntl(nextConfig);
