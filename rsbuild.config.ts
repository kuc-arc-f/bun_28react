import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';
import path from "path"
const directoryPath = './src/client';
//
export default defineConfig(async ({ env, command }) => {
  plugins: [pluginReact()],
  source: {
    entry: {
      home: './src/client/home.tsx',
    },
  },
  output: {
    distPath: {
      root: 'dist',
    },
    filename: {
      js: `[name].js`,
    },
  },
});
