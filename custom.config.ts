import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';
import path from "path"
import buildCommon from './src/lib/buildCommon';
const directoryPath = './src/client';
//
export default defineConfig(async ({ env, command }) => {
  const entryFiles = await buildCommon.getEntryItems(directoryPath);
  //
  return {
    plugins: [pluginReact()],
    source: {
      entry: entryFiles,
    },
    output: {
      distPath: {
        root: 'dist',
      },
      filename: {
        js: `[name].js`,
      },
    },
  }
});
// index: './src/entry-client.tsx',