var assert = require('better-assert');
var expect = require('expect.js');
var util = require('./index.js');

describe('querystring test suite', function(){
	it('should construct a query string from an object', function () {
		expect(util.qs({ a: 'b' })).to.be('a=b');
		expect(util.qs({ a: 'b', c: 'd' })).to.be('a=b&c=d');
		expect(util.qs({ a: 'b', c: 'tobi rocks' })).to.be('a=b&c=tobi%20rocks');
	});
});
