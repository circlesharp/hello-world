const http = require('http');

const app = http.createServer((req, res) => {
  const { method } = req;

  if (method === 'GET') {
    handleGet(req, res);
  } else if (method === 'POST') {
    handlePost(req, res);
  } else {
    handleNotFount(req, res);
  }
});

function handleGet(req, res) {
  const { url } = req;

  if (url === '/') {
    // 表单
    const page = `
      <form action="/create-user" method="POST">
        <input type="text" name="username" />
        <input type="submit" />
      </form>
    `;

    res.write(page);
    res.end();
  } else if (url === '/user') {
    // 列表
    const page = `
      <h1>User list</h1>
    `;

    res.write(page);
    res.end();
  } else if (url === '/create-user') {
  } else {
    // 404
    handleNotFount(req, res);
  }
}

function handlePost(req, res) {
  const { url } = req;

  if (url === '/create-user') {
    // 创建 user
    const usernameBufferArr = [];
    req.on('data', (chunk) => {
      usernameBufferArr.push(chunk);
    });
    req.on('end', () => {
      const [_, username] = Buffer.concat(usernameBufferArr)
        .toString()
        .split('=');
      res.statusCode = 302;
      res.setHeader('Location', `/${username}`);
      res.end();
    });
  } else {
    // 404
  }
}

function handleNotFount(req, res) {
  const page = `
    <h1>page not found: ${req.url}</h1>
  `;

  res.write(page);
  res.end();
}

app.listen(3000);
