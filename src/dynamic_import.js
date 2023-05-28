import "./style.css"
import "./style2.css"

module.exports=function() {
    import("./foo.js").then(({default:foo})=>console.log(foo))
}