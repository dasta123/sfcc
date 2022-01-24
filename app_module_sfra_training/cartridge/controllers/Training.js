/**
* Description of the Controller and the logic it provides
*
* @module  controllers/Training
*/

'use strict';

 
var server = require('server');
var cs = require('dw/web/Cookies');

server.get('Show',function(req, res, next){
	
	var cs = request.httpCookies['P7731'].getValue();
	res.render('training/training', {
		 obj:cs
	});
	next();
});
module.exports = server.exports(); 