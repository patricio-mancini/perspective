module.exports = {
    roots: [
        "packages/perspective/test/js",
        "packages/perspective-viewer/test/js",
        "packages/perspective-viewer-datagrid/test/js",
        "packages/perspective-viewer-d3fc/test/js",
    ],
    verbose: true,
    testURL: "http://localhost/",
    transform: {
        ".js$": "@finos/perspective-test/src/js/transform.js",
        ".html$": "html-loader-jest"
    },
    collectCoverage: true,
    collectCoverageFrom: ["packages/perspective/dist/cjs/**"],
    coverageProvider: "v8",
    coverageReporters: ["cobertura", "text"],
    automock: false,
    setupFiles: ["@finos/perspective-test/src/js/beforeEachSpec.js"],
    reporters: ["default", "@finos/perspective-test/src/js/reporter.js", "jest-junit"],
    globalSetup: "@finos/perspective-test/src/js/globalSetup.js",
    globalTeardown: "@finos/perspective-test/src/js/globalTeardown.js"
};
