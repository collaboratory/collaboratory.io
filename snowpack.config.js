// Consult https://www.snowpack.dev to learn about these options
module.exports = {
  install: ["svelte"],
  installOptions: {
    // ignore `import fs from 'fs'` etc
    externalPackage: [
      ...require("module").builtinModules,
      ...Object.keys(require("./package.json").dependencies),
    ],
  },
  plugins: [
    [
      "@snowpack/plugin-svelte",
      {
        compilerOptions: {
          hydratable: true,
        },
        hmrOptions: {
          preserveState: true,
        },
      },
    ],
    "@snowpack/plugin-typescript",
    [
      "@snowpack/plugin-build-script",
      { cmd: "postcss", input: [".css", ".pcss"], output: [".css"] },
    ],
  ],
  devOptions: {
    open: "none",
  },
  buildOptions: {
    sourceMaps: true,
  },
  mount: {
    ".svelte/assets": "/_app/assets",
    "src/components": "/_components",
  },
  alias: {
    $app: "./.svelte/assets/runtime/app",
    $components: "./src/components",
  },
};
