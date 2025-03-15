const path = require('path');

console.log('Directory Name:', path.dirname(__filename));

console.log('File Name:', path.basename(__filename));

console.log('File Extension:', path.extname(__filename));

const joinPath = path.join('/document', 'amresh', 'brightchamps', 'development');
console.log('Joined path:', joinPath);

const resolvePath = path.resolve('document', 'amresh', 'brightchamps', 'development');
console.log('Resolved Path:', resolvePath);

const normalizePath = path.normalize('document/./brightchamps/../development');
console.log('Normalize Path:', normalizePath);