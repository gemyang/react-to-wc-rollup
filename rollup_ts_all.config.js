import typescript from '@rollup/plugin-typescript'
import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import babel from '@rollup/plugin-babel'
import svgr from "@svgr/rollup"
import postcss from 'rollup-plugin-postcss'
import pkg from './package.json' assert {type: "json"}

export default {
    input: 'src/index.ts',
    output: {
        file: pkg.module,
        format: pkg.type,
        sourcemap: true,
        strict: false,
    },
    plugins: [
        typescript(),

        resolve(),

        commonjs({
            include: 'node_modules/**'
        }),

        babel({
            exclude: "node_modules/**",
            presets: ["@babel/preset-react"],
            babelHelpers: "bundled",
        }),

        svgr(),

        postcss({
            extract: false,
            modules: true,
            plugins: []
        })

    ],
}