/**
* Description of the module and the logic it provides
*
* @module cartridge/models/Reference
*/

'use strict';


var System = require('dw/system');

// var myFunction = function() {

function myFunction() { 
	 var ArrayList = require('dw/util/ArrayList');
	 var products = require('dw/catalog/ProductMgr');
    var site = System.Site.getCurrent();
    var myPreferenceID = site.getCustomPreferenceValue('ProductID');
   var ps = new ArrayList();
   for(let i=0; i < myPreferenceID.length; i++) {
    ps.add(products.getProduct(myPreferenceID[i]));
 }
     return ps;
}
 

//module.exports = {
//	func : myFunction
//};


module.exports =  myFunction();