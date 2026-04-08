import { createServer } from 'http';

const server = createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'tetx/html; charset=utf-8'})
    res.end('<h1>Привет, Node.js </h1>');
});

server.listen(3000, () => {
    console.log('Сервер запущен: http://localhost:3000');
});
