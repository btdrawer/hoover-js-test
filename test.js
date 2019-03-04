const fs = require('fs'),
assert = require('assert');
var stdout = require('test-console').stdout,
out, main;

var case1 = '10 10\r\n9 0\r\n2 4\r\nNEESW',
case2 = '100 100\r\n90 34\r\n90 37\r\nENNWNNS',
case3 = '80 50\r\n22 10\r\n29 20\r\n33 36\r\n34 9\r\nEEEWWSESNEEEEEEEEEENSWEWWWNNE',
case4 = '5 5\r\n1 2\r\n1 0\r\n2 2\r\n2 3\r\nNNESEESWNWW';

var results1 = ['8 0\n', '0\n'],
results2 = ['90 37\n', '1\n'],
results3 = ['32 11\n', '1\n'],
results4 = ['1 3\n', '1\n'];

var fd = fs.openSync('./input.txt', 'w+');

describe('index.js', () => {
    it('case 1', (done) => {
        fs.writeFileSync(fd, case1);
        main = require('./main');

        out = stdout.inspectSync(() => {
            main();
        });
        
        assert.deepEqual(out, results1);

        done();
    });

    it('case 2', (done) => {
        fs.writeFileSync(fd, case2);

        out = stdout.inspectSync(() => {
            main();
        });
        
        assert.deepEqual(out, results2);

        done();
    });

    it('case 3', (done) => {
        fs.writeFileSync(fd, case3);

        out = stdout.inspectSync(() => {
            main();
        });
        
        assert.deepEqual(out, results3);

        done();
    });

    it('case 4', (done) => {
        fs.writeFileSync(fd, case4);

        out = stdout.inspectSync(() => {
            main();
        });
        
        assert.deepEqual(out, results4);

        fs.closeSync(fd);
        done();
    });
});