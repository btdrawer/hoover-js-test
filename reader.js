/*
Reader file.
It takes a text file - input.txt, placed in the same directory - and
converts it to an array.

All but the last line of the text file should be two integers separated
by a space, representing coordinates.
The last line should be a string of directions, e.g., 'NNESW', which will
be broken apart into individual characters.
*/
const fs = require('fs');

var text = fs.readFileSync('./input.txt').toString();
var data = [];

text.split('\r\n').map((t) => data.push(t.split(' ')));
data[data.length-1] = data[data.length-1][0].split('');

module.exports = data;