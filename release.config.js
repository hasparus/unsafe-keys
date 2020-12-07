module.exports = {
  plugins: [
    "semantic-release-gitmoji",
    "@semantic-release/github",
    "@semantic-release/npm",
  ],
  branches: ["main", { name: "next", prerelease: true }],
};
