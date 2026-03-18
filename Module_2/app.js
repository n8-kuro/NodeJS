const { add, multiply} = require('./math');

console.log(add(2,3));
console.log(multiply(4,5));

const Logger = require('./logger');
const log = new Logger();
log.log('Server is running');