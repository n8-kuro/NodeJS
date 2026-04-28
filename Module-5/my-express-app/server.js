import express from 'express';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get('/', (req, res) => {
    res.json({ message: 'Home page' });
});

app.get('/users/:id', (req, res) => {
    const userId = req.params.id;
    res.json({ message: 'Запроше пользователь с ID: ${userId}' });
});

app.post('/users', (req, res) => {
    const { name, email } = req.body;
    res.status(201).json({ message: 'Пользователь создан', name, email });
});

app.get('/api/products', (req, res) => {
    const { category, sort = 'name', order = 'asc', page = '1', limit = '10' } = req.query;
    const pageNum = Math.max(1, +page);
    const limitNum = Math.max(1, Math.min(100, +limit));

    res.json({
        filters: { category, sort, order },
        pagination: { page: pageNum, limit: limitNum },
        products: []
    });
});

app.listen(PORT, () => {
    console.log('Server: https://localhost:$(PORT)');
});