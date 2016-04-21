var postcss = require('postcss');

module.exports = postcss.plugin('postcss-import-once', function (options){
	return function(css, result){
		options = options || {};

		console.log(css.every(function(decl){
			console.log(decl)
		}))
		// console.log(result)
	}
})