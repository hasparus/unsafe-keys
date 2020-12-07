module.exports = {
  plugins: [
    "semantic-release-gitmoji",
    "@semantic-release/github",
    "@semantic-release/npm",
  ],
  branches: [
    "+([0-9])?(.{+([0-9]),x}).x",
    "main",
    "next",
    "next-major",
    { name: "beta", prerelease: true },
    { name: "alpha", prerelease: true },
  ],
};
