import typescript from '@rollup/plugin-typescript'
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

        svgr(),

        postcss({
            extract: false,
            modules: true,
            plugins: []
        })

    ],
}