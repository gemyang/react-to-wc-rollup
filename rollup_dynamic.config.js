import css from "rollup-plugin-css-only"

export default {
    input : "src/dynamic_import.js",
    output : {
        file: "dynamic/dynamic_cjs.js",
        format: "cjs",
        inlineDynamicImports: true
    },
    plugins: [
        css({output: "dynamic.css"})
    ]
}