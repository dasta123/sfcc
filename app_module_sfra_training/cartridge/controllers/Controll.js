/**
* Description of the Controller and the logic it provides
*
* @module  controllers/Controll
*/

'use strict';

var server = require('server')
server.get('Show',function(req, res, next){
	res.render('training/render');
	next();
});
module.exports = server.exports();