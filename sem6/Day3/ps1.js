const http = require('http');
const fs = require('fs').promises;
const users = [];

const server = http.createServer(async (req, res) => {
    res.setHeader('Content-Type', 'application/json');

    if (req.url === '/getdata' && req.method === 'GET') {
        const data = await fs.readFile('./data.json', "utf-8");
        const jsonData = JSON.parse(data);
        res.statusCode = 200;
        res.end(JSON.stringify(jsonData));
        return;
    }

    else if (req.url === '/setdata' && req.method === 'POST') {
        let body = '';
        req.on('data', chunk => {
            body += chunk;
        });

        req.on('end', async () => {
            const newUser = JSON.parse(body);
            console.log('Received data:', newUser);

            const fileData = await fs.readFile('./data.json', "utf-8");
            const existingUsers = JSON.parse(fileData);
            existingUsers.push(newUser);

            await fs.writeFile('./data.json', JSON.stringify(existingUsers, null, 2));

            res.statusCode = 201;
            res.end(JSON.stringify({ message: 'Data received successfully' }));
        });
        return;
    }

    res.statusCode = 404;
    res.end(JSON.stringify({ error: 'Route not found' }));
});

server.listen(9000, () => {
    console.log('Server is running on port: 9000');
});