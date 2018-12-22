const https = require('https');
const fs = require('fs');
const express = require('express')
const app = express()
app.use('/dist', express.static(__dirname+'/dist'))

const options = {
  key: fs.readFileSync('server.key'),
  cert: fs.readFileSync('server.crt')
};

let pages = {
    root: __dirname + '/pages/',
    dotfiles: 'deny',
    headers: {
        'x-timestamp': Date.now(),
        'x-sent': true
    }
};

app.get('/',(req,res) => {
    res.sendFile('index.html',pages)
});

https.createServer(options, app).listen(8000, () => console.log(`Example app listening on port 8000!`));