/**
 * @type {import('@remix-run/dev').AppConfig}
 */
module.exports = {
  serverBuildTarget: "netlify", // Target Netlify deployment
  serverBuildDirectory: "netlify/functions/server", // Where the server bundle is stored
  assetsBuildDirectory: "public/build", // Directory for built assets
  publicPath: "/build/", // Path for assets
};
