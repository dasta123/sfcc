

/**
* Description of the Controller and the logic it provides
*
* @module  controllers/Preference
*/

'use strict';

var server = require('server');
var obj = require('*/cartridge/models/Products');

server.get('Hello', function(req, res, next){
	

	res.render('training/cums' , {
		List : obj
	}); 
	next();

});

module.exports = server.exports();
 