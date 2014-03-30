var assert = require('better-assert');
var expect = require('expect.js');
var util = require('./index.js');

describe('querystring test suite', function(){
	it('should parse a querystring and return an object', function () {
		
		// Single assignment
		var queryObj = util.qsParse("foo=bar");
		expect(queryObj.foo).to.be("bar");
		
		// Multiple assignments
		queryObj = util.qsParse("france=paris&germany=berlin");
		expect(queryObj.france).to.be("paris");
		expect(queryObj.germany).to.be("berlin");
		
		// Assignments containing non-alphanumeric characters
		queryObj = util.qsParse("india=new%20delhi");
		expect(queryObj.india).to.be("new delhi");
	});
	
	it('should construct a query string from an object', function () {
		expect(util.qs({ a: 'b' })).to.be('a=b');
		expect(util.qs({ a: 'b', c: 'd' })).to.be('a=b&c=d');
		expect(util.qs({ a: 'b', c: 'tobi rocks' })).to.be('a=b&c=tobi%20rocks');
	});
});
