const http = require('http')
const fs = require('fs')
const obj = {
    name: 'Flo',
    job: 'Firefighter',
    age: 200,
  }

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.writeHead(200, {
      'Content-Type': 'text/html',
    })
    const readStream = fs.createReadStream(__dirname + '/index.html', 'utf8')
    readStream.pipe(res)
  } else if (req.url === '/about') {
    res.writeHead(200, {
      'Content-Type': 'text/html',
    })
    const readStream = fs.createReadStream(__dirname + '/about.html', 'utf8')
    readStream.pipe(res)
  } else if (req.url === '/users'){
    res.writeHead(200, {
        'Content-Type': 'application/json',
      })
    res.end(JSON.stringify(obj))
  } else {
      res.writeHead(404, {
        'Content-Type': 'text/html',
      })
      res.end('404 No Route Found')
  }
})
server.listen(3000, () => {
  console.log(`Listening on port 3000`)
})