console.log('Welcome to wrapper-explorer.js');

console.log('__filename: ', __filename);
console.log('__dirname: ', __dirname);

module.exports.greet = function(name) {
    console.log(`Hello ${name}`);
    
}
