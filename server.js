const http = require('http');
const fs = require('fs');
const path = require('path');
const os = require('os');

const port = 5555 || process.env.PORT;

http.createServer(function (request, response) {
  console.log('request ', request.url);

  const fileName = request.url;
  let filePath = '.' + request.url;
  const fileNames = fileName.split('.');

  if (filePath === './' || (fileNames[0] !== '/' && !fileNames[1])) {
    filePath = './index.html';
  }

  const extname = String(path.extname(filePath)).toLowerCase();
  const mimeTypes = {
    '.html': 'text/html',
    '.js': 'text/javascript',
    '.css': 'text/css',
    '.json': 'application/json',
    '.png': 'image/png',
    '.jpg': 'image/jpg',
  };

  const contentType = mimeTypes[extname] || 'application/octet-stream';

  fs.readFile(filePath, function (error, content) {
    if (error) {
      if (error.code == 'ENOENT') {
        fs.readFile('./404.html', function (error, content) {
          response.writeHead(404, { 'Content-Type': 'text/html' });
          response.end(content, 'utf-8');
        });
      }
      else {
        response.writeHead(500);
        response.end('Sorry, check with the site admin for error: ' + error.code + ' ..\n');
      }
    }
    else {
      response.writeHead(200, { 'Content-Type': contentType });
      response.end(content, 'utf-8');
    }
  });

}).listen(port);
console.log(`Server running at ${os.hostname()}:${port}/`);
