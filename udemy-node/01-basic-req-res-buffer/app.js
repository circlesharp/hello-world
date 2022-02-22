const http = require('http');
const fs = require('fs');

function requestListener(req, res) {
  const { url, method, headers } = req;
  // console.log(url, method, headers);

  let title = 'default title';
  let content = `<h1>hello world</h1>`;
  if (url === '/') {
    title = 'root';
  } else if (url === '/favicon.ico') {
    console.log(444);
    return;
  } else if (url === '/form') {
    content = `
      <form action="/message" method="POST">
        <label for="text">text</label>
        <input type="text" id="text" name="text" />
        <input type="submit" />
      </form>
    `;
  } else if (url === '/message' && method.toUpperCase() === 'POST') {
    // steam, chunk, buffer
    const body = [];
    req.on('data', (chunk) => {
      console.log('单个 chunk / buffer', chunk);
      body.push(chunk);
    });
    req.on('end', () => {
      const parsedBody = Buffer.concat(body);
      console.log('经过拼接的 chunk / buffer', parsedBody);
      console.log('Buffer.prototype.toString()', parsedBody.toString());
      const [_, msg] = parsedBody.toString().split('=');
      fs.writeFile('message.txt', msg, (err) => {
        // 重定向
        res.statusCode = 302;
        res.setHeader('Location', '/fuck');
        res.end();
      });
    });

    return;
  } else {
    title = url;
  }
  console.log(2333);
  res.setHeader('Content-Type', 'text/html');
  res.write(`
  <html>
    <title>${title}</title>
    ${content}
  </html>
  `);
  res.end();
}

const server = http.createServer(requestListener);

server.listen(3000);
