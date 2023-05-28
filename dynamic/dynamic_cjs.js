'use strict';

module.exports=function() {
    Promise.resolve().then(function () { return foo$1; }).then(({default:foo})=>console.log(foo));
};

var foo = 'welcome rollup';

var foo$1 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    default: foo
});
