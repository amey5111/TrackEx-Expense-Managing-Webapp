/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    DB_URI: "mongodb://localhost:27017/UserDB",
    NEXTAUTH_SECRET: "password",

    GOOGLE_CLIENT_ID:
      "1057479639676-uqjeq1tkdrhhqpnvtod24s8og4o14fhp.apps.googleusercontent.com",
    GOOGLE_CLIENT_SECRET: "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",
  },
};

module.exports = nextConfig;
