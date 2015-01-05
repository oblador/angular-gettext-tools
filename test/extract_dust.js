'use strict';

var assert = require('assert');
var fs = require('fs');
var Extractor = require('..').Extractor;
var testExtract = require('./utils').testExtract;

describe('Extract', function () {
    it('Extracts strings from views', function () {
        var files = [
            'test/fixtures/single.dust'
        ];
        var catalog = testExtract(files);

        assert.equal(catalog.items.length, 1);
        assert.equal(catalog.items[0].msgid, 'Hello!');
        assert.equal(catalog.items[0].msgstr, '');
        assert.deepEqual(catalog.items[0].references, ['test/fixtures/single.dust:3', 'test/fixtures/single.dust:4']);
    });
});
