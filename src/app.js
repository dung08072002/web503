const http = require('http');

const server = http.createServer((req, res) => {
    console.log('url', req.url);
    const url = req.url;
    if(url === '/'){
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<body>');
        res.write('<ul><li>User 1</li></ul>');
        res.write('<ul><li>User 2</li></ul>');
        res.write('<ul><li>User 3</li></ul>');
        res.write('<ul><li>User 4</li></ul>');
        res.write(` <form action="http://localhost:3000/create-user" method="POST">
                        <input type="text" placeholder="username" id="username" name="username">
                        <button id="btn-submit">Submit</button>
                    </form>`);
        res.write('</body>');
        res.write('</html>');
        res.end();
    }else if (url === '/users'){
        res.end();
    }else if (url === '/create-user'){
        res.end();
    }
})

const PORT = 3000;

server.listen(PORT, () => {
    console.log(`Server running port ${PORT}`);
})