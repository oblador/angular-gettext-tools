'use strict';

var assert = require('assert');
var testExtract = require('./utils').testExtract;

describe('Extracting plurals', function () {
    it('works on HTML', function () {
        var files = [
            'test/fixtures/plural.html'
        ];
        var catalog = testExtract(files);

        var i = catalog.items;
        assert.equal(i.length, 1);

        assert.equal(i[0].msgid, 'Bird');
        assert.equal(i[0].msgid_plural, 'Birds');
        assert.deepEqual(i[0].msgstr, ['', '']);
    });

    it('works on Dust.js', function () {
        var files = [
            'test/fixtures/plural.dust'
        ];
        var catalog = testExtract(files);

        var i = catalog.items;
        assert.equal(i.length, 2);

        assert.equal(i[0].msgid, 'Bird');
        assert.equal(i[0].msgid_plural, 'Birds');
        assert.deepEqual(i[0].msgstr, ['', '']);

        assert.equal(i[1].msgid, 'You have one bird.');
        assert.equal(i[1].msgid_plural, 'You have {birds.length} birds.');
    });

    it('merges singular and plural strings', function () {
        var files = [
            'test/fixtures/merge.html'
        ];
        var catalog = testExtract(files);

        var i = catalog.items;
        assert.equal(i.length, 1);

        assert.equal(i[0].msgid, 'Bird');
        assert.equal(i[0].msgid_plural, 'Birds');
        assert.deepEqual(i[0].msgstr, ['', '']);
    });

    it('warns for incompatible plurals', function () {
        var files = [
            'test/fixtures/corrupt.html'
        ];
        assert.throws(function () {
            testExtract(files);
        });
    });
});
