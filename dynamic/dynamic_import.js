'use strict';

module.exports=function() {
    Promise.resolve().then(function () { return require('./foo-376a7ed6.js'); }).then(({default:foo})=>console.log(foo));
};
