var postcss = require('postcss');

postcss()
	.use(require('./index.js'))
	.process('a{};b{color:red;}')
	.then(function(r){
		console.log(r.css)
	})