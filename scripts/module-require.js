const moduleExports = require('./module-export');

try {
    console.log(moduleExports.sum(2, 3));
    console.log(moduleExports.substract(3, 2));
    console.log(moduleExports.divide(6, 0));
} catch (error) {
    console.error(error.message);
}