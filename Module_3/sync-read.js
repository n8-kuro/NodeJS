import { readFileSync } from 'fs';

console.log('start sync');
setTimeout(() => console.log('timer fired (sync)'), 0);

const content = readFileSync('big.txt', 'utf-8');
console.log('sync length:', content.length);
console.log('end sync');