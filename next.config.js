const os = require("os");

module.exports = {
  serverRuntimeConfig: {
    scriptsRoot: (process.env.SCRIPTS_ROOT || "~/.webalizer").replace(
      "~",
      os.homedir
    ),
    username: process.env.USERNAME,
    password: process.env.PASSWORD,
  },
  publicRuntimeConfig: {
    isAuthEnabled: !!process.env.USERNAME && !!process.env.PASSWORD,
  },
  async rewrites() {
    return [
      {
        source: "/:path*",
        destination: "/:path*",
      },
      {
        source: "/api/:path*",
        destination: "/api",
      },
    ];
  },
};
