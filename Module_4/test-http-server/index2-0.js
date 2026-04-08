import { createServer } from 'http';

const users = [
        { id: 1, name: 'Алексей'}, 
        { id: 2, name: 'Мария'},
];

const server = createServer((req, res) => {
    const { method, url } = req;
    res.setHeader('Content-Type', 'application/json; charset=utf-8');
    if ( method === 'GET' && url === '/') {
        res.writeHead(200);
        res.end(JSON.stringify({message: 'Главная страница' }));
    } else if (method === 'GET' && url === '/api/users') {
        let body = '';
        req.on('data', (chunk) => body += chunk);
        req.on('end', () => {
            try {
                const user = JSON.parse(body);
                user.id = Date.now();
                users.push(user);
                res.writeHead(201);
                res.end(JSON.stringify(user));
            } catch {
                res.writeHead(400);
                res.end(JSON.stringify({ error: 'Некорректный JSON'}));
            }
        });
    } else {
        res.writeHead(404);
        res.end(JSON.stringify({ error: 'Не найден'}));
    }
});

server.listen(3000, () => {
    console.log('Сервер запущен: http://localhost:3000');
});
