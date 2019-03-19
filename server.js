const express = require('express');
const next = require('next');

const todos = require('./utils/todos');

console.log(todos);

const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_DEV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();


app.prepare().then(() => {
    const server = express();

    server.get('/a', (req, res) => {
        return app.render(req, res, '/a', req.query);
    });

    server.get('/getTodos', (req, res) => {
        console.log('Request received...');
        return res.status(200).json(todos);
    });

    server.get('*', (req, res) => {
        return handle(req, res);
    });

    server.listen(port, err => {
        if (err) throw err;
        console.log(`Server is up on localhost:${port}...`);
    });
});