<<<<<<< Updated upstream
import typescript from "@rollup/plugin-typescript";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import copy from "rollup-plugin-copy";

export default {
	input: "./src/main.ts",
	output: {
		dir:
			"C:/Users/jvalentine/Documents/GitHub/Personal/obsidian-leaflet-plugin",
		sourcemap: "inline",
		format: "cjs",
		exports: "default",
	},
	external: ["obsidian"],
	plugins: [
		typescript(),
		nodeResolve({ browser: true }),
		commonjs(),
		copy({
			targets: [
				{
					src: ["./*", '!./node_modules'],
					dest:
						"C:/Users/jvalentine/Documents/GitHub/Personal/obsidian-leaflet-plugin/",
				},
			],
		}),
	],
};
=======
import typescript from '@rollup/plugin-typescript';
import {nodeResolve} from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';

export default {
  input: './src/main.ts',
  output: {
    dir: '.',
    sourcemap: 'inline',
    format: 'cjs',
    exports: 'default'
  },
  external: ['obsidian'],
  plugins: [
    typescript(),
    nodeResolve({browser: true}),
    commonjs(),
  ]
};
>>>>>>> Stashed changes
