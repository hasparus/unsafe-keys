module.exports = {
  plugins: [
    [
      "semantic-release-gitmoji",
      {
        releaseRules: {
          major: [":boom:"],
          minor: [":sparkles:"],
          patch: [":bug:", ":ambulance:", ":lock:", ":tada:"],
        },
      },
    ],
    "@semantic-release/github",
    "@semantic-release/npm",
  ],
  branches: ["main", { name: "next", prerelease: true }],
};
