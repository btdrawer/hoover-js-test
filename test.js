const fs = require('fs'),
assert = require('assert'),
stdout = require('test-console').stdout;

var out, main;

var case1 = '10 10\r\n9 0\r\n2 4\r\nNEESW',
case2 = '100 100\r\n90 34\r\n90 37\r\nENNWNNS',
case3 = '80 50\r\n22 10\r\n29 20\r\n33 36\r\n34 9\r\nEEEWWSESNEEEEEEEEEENSWEWWWNNE',
case4 = '8 10\r\n1 6\r\n2 4\r\n2 7\r\n4 8\r\nESSNNNEENW',
case5 = '5 5\r\n0 0\r\n2 3\r\nWWS',
case6 = '5 5\r\n0 0\r\n2 3\r\nN';

var results1 = ['9 0\n', '0\n'],
results2 = ['90 37\n', '1\n'],
results3 = ['32 11\n', '1\n'],
results4 = ['3 8\n', '3\n'],
results5 = ['0 0\n', '0\n'],
results6 = ['0 1\n', '0\n'];

var file = './input.txt';

describe('index.js', () => {
    it('should succeed if there is one patch of dirt', (done) => {
        fs.writeFileSync(file, case1);
        main = require('./main');

        out = stdout.inspectSync(() => {
            main();
        });
        
        assert.deepEqual(out, results1);

        done();
    });

    it('should succeed if there is one patch of dirt (larger area)', (done) => {
        fs.writeFileSync(file, case2);

        out = stdout.inspectSync(() => {
            main();
        });
        
        assert.deepEqual(out, results2);

        done();
    });

    it('should succeed if there are multiple patches of dirt', (done) => {
        fs.writeFileSync(file, case3);

        out = stdout.inspectSync(() => {
            main();
        });
        
        assert.deepEqual(out, results3);

        done();
    });

    it('should successfully clear multiple patches of dirt', (done) => {
        fs.writeFileSync(file, case4);

        out = stdout.inspectSync(() => {
            main();
        });
        
        assert.deepEqual(out, results4);

        done();
    });

    it('should not allow negative numbers', (done) => {
        fs.writeFileSync(file, case5);

        out = stdout.inspectSync(() => {
            main();
        });
        
        assert.deepEqual(out, results5);

        done();
    });

    it('should succeed with only one direction', (done) => {
        fs.writeFileSync(file, case6);

        out = stdout.inspectSync(() => {
            main();
        });
        
        assert.deepEqual(out, results6);

        done();
    });
});